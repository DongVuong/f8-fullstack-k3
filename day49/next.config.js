/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "code-fullstack-exercise49.vercel.app",
      },
      {
        hostname: "api-pages.vercel.app",
      },
    ],
  },
};

module.exports = nextConfig;
