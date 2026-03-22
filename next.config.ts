import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    SERVER_URL: process.env.SERVER_URL,
    GOOGLE_RECAPTCHA_SITE_SECRET: process.env.GOOGLE_RECAPTCHA_SITE_SECRET
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname:'lh3.googleusercontent.com'
      },
      {
        protocol: 'https',
        hostname: 'avatars.yandex.net'
      }
    ]
  }
};

export default nextConfig;
