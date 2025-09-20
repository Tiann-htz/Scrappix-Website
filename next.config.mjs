/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Allow external domains for downloads
  async rewrites() {
    return [];
  },
};

export default nextConfig;