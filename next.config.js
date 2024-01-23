// @ts-check

const withBundleAnalyzer = require('next-bundle-analyzer').default({
    enabled: process.env.ANALYZE == 'true'
});

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = withBundleAnalyzer(nextConfig);
