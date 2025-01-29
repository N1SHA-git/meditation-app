/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "usercontent.jamendo.com",
        pathname: "/**",
      },
    ],
    domains: ["i.ytimg.com"],
  },
};

module.exports = nextConfig;
