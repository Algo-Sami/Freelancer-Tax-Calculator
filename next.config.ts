import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  // No external images needed — all content is text-based
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
