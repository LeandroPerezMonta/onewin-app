import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d16q5vvir3f28d.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "v1.bundlecdn.com",
      },
      {
        protocol: "https",
        hostname: "imgproxy.v1.bundlecdn.com",
      }
    ]
  }
  /* config options here */
};

export default nextConfig;
