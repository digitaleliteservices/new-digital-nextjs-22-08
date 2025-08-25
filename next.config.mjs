/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // trailingSlash: true, 
  // 👈 Important
};

export default nextConfig;
