import type { NextConfig } from "next";

import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['picsum.photos', 'img.freepik.com', 'images.unsplash.com'],
  }
};

export default withNextIntl(nextConfig);
