/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "**",
      },
    ],
  },
  env: {
    NEON_DATABASE_URL:
      "postgres://mahmadshoukat7:fZnq0kS9bjaF@ep-bold-wildflower-215811.ap-southeast-1.aws.neon.tech/neondb",
    PGHOST: "ep-bold-wildflower-215811.ap-southeast-1.aws.neon.tech",
    PGDATABASE: "neondb",
    PGUSER: "mahmadshoukat7",
    PGPASSWORD: "fZnq0kS9bjaF",
  },
};

module.exports = nextConfig;
