import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  // Required only if your site is hosted on a subpath (e.g., github.io/repo-name)
  basePath:  '/CV', 
  assetPrefix:  '/CV/',
};

export default nextConfig;
