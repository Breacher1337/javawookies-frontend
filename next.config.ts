import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // ⚠️ This will allow production builds even if there are type errors
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;

