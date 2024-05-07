/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "docs.material-tailwind.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "demos.creative-tim.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "material-taillwind-pro-ct-tailwind-team.vercel.app",
        port: "",
      },
    ],
  },
};

export default nextConfig;
