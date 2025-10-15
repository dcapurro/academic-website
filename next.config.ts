import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/academic-website',
  images: {
    unoptimized: true
  },
  trailingSlash: true,
};

export default nextConfig;
