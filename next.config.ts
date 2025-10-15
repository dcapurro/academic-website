import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/academic-website' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
};

export default nextConfig;
