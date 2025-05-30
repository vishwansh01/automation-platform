import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "upload.wikimedia.org",
      "imgs.search.brave.com",
      "cdn.pixabay.com",
      "mailparser.io",
    ],
  },
};

export default nextConfig;
