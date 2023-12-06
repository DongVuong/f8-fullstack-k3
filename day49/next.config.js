/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "code-fullstack-exercise49.vercel.app",
      },
    ],
  },
};

module.exports = nextConfig;
