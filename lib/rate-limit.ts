type BucketEntry = {
  count: number;
  resetAt: number;
};

type LimitResult = {
  allowed: boolean;
  limit: number;
  remaining: number;
  resetAt: number;
  retryAfterSeconds: number;
};

type LimitOptions = {
  bucket: string;
  key: string;
  limit: number;
  windowMs: number;
};

const buckets = new Map<string, Map<string, BucketEntry>>();
let cleanupCounter = 0;

function getBucket(name: string): Map<string, BucketEntry> {
  const existing = buckets.get(name);
  if (existing) return existing;

  const created = new Map<string, BucketEntry>();
  buckets.set(name, created);
  return created;
}

function cleanupExpiredEntries(): void {
  cleanupCounter += 1;
  if (cleanupCounter % 100 !== 0) return;

  const now = Date.now();

  for (const [, bucket] of buckets) {
    for (const [key, value] of bucket) {
      if (value.resetAt <= now) {
        bucket.delete(key);
      }
    }
  }
}

export function applyMemoryRateLimit({
  bucket,
  key,
  limit,
  windowMs,
}: LimitOptions): LimitResult {
  cleanupExpiredEntries();

  const now = Date.now();
  const target = getBucket(bucket);
  const current = target.get(key);

  if (!current || current.resetAt <= now) {
    const resetAt = now + windowMs;
    target.set(key, {
      count: 1,
      resetAt,
    });

    return {
      allowed: true,
      limit,
      remaining: Math.max(limit - 1, 0),
      resetAt,
      retryAfterSeconds: Math.ceil(windowMs / 1000),
    };
  }

  if (current.count >= limit) {
    return {
      allowed: false,
      limit,
      remaining: 0,
      resetAt: current.resetAt,
      retryAfterSeconds: Math.max(Math.ceil((current.resetAt - now) / 1000), 1),
    };
  }

  current.count += 1;
  target.set(key, current);

  return {
    allowed: true,
    limit,
    remaining: Math.max(limit - current.count, 0),
    resetAt: current.resetAt,
    retryAfterSeconds: Math.max(Math.ceil((current.resetAt - now) / 1000), 1),
  };
}
