import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "upload.wikimedia.org",
      "media.istockphoto.com",
      "mailparser.io",
      "s3.coinmarketcap.com",
    ],
  },
};

export default nextConfig;
