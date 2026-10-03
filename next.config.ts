import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // This app lives inside another Next project; keep Turbopack scoped to this folder.
  turbopack: { root: path.join(__dirname) },
};

export default nextConfig;
