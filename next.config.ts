import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/Porfolio_Pablo" : "",
  assetPrefix: isProd ? "/Porfolio_Pablo/" : "",
  images: { unoptimized: true }, // por si usas <Image/>
};

export default nextConfig;
