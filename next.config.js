const { withSentryConfig } = require("@sentry/nextjs");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

const sentryWebpackPluginOptions = {
  silent: true,
  org: "your-org-name",
  project: "cipher-chain",
};

module.exports = withSentryConfig(
  nextConfig,
  sentryWebpackPluginOptions
);