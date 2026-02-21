const IP_HEADER_CANDIDATES = [
  "x-forwarded-for",
  "x-real-ip",
  "cf-connecting-ip",
  "fastly-client-ip",
  "x-client-ip",
];

function normalizeIp(raw: string): string {
  const candidate = raw.trim();

  // Convert IPv6-mapped IPv4 (::ffff:1.2.3.4) to plain IPv4.
  if (candidate.startsWith("::ffff:")) {
    return candidate.slice(7);
  }

  return candidate;
}

export function getClientIp(request: Request): string {
  for (const headerName of IP_HEADER_CANDIDATES) {
    const headerValue = request.headers.get(headerName);
    if (!headerValue) continue;

    // x-forwarded-for can be a comma-separated list.
    const first = headerValue.split(",")[0];
    if (first?.trim()) {
      return normalizeIp(first);
    }
  }

  return "unknown";
}
