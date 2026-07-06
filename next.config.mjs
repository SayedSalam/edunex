/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const repo = "edunex"; // اسم الريبو على GitHub — غيّره لو الريبو اسمه مختلف

const nextConfig = {
  output: "export",
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "i.pravatar.cc" },
    ],
  },
};
export default nextConfig;
