export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    await import("./sentry.server.config");
  }

  if (process.env.NEXT_RUNTIME === "edge") {
    await import("./sentry.edge.config");
  }
}

export const onRequestError = async (
  err: unknown,
  request: {
    path: string;
    method: string;
    headers: { [key: string]: string | undefined };
  }
) => {
  // Log server-side errors
  console.error("Request error:", {
    path: request.path,
    method: request.method,
    error: err,
  });
};
