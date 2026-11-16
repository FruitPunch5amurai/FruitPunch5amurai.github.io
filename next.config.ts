import type { NextConfig } from "next";

// A custom domain and a user site (username.github.io) are both served from /.
// Set NEXT_PUBLIC_BASE_PATH=/repository-name only when the site is served from
// a project subpath before a custom domain is attached.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  // Cache Components turns on Partial Prerendering, which cannot run in a
  // static export. GitHub Pages only serves the files in `out/`.
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
