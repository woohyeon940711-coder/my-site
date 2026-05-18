import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['3000-iol11kob2lji2f0nqs568-84598c2d.sg1.manus.computer'],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
