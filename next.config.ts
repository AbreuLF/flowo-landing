import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false, // This is causing double rendering in development
};

export default nextConfig;
