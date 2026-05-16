import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'niligiri-tourism.s3.ap-south-1.amazonaws.com',
        port: '',
        pathname: '/**', // Allows all images inside your bucket path structures
      },
    ],
  },
};

export default nextConfig;
