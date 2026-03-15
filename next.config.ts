import type { NextConfig } from "next";

import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // domins imgage I use it in my app 
    domains: ['picsum.photos', 'img.freepik.com', 'images.unsplash.com', 'upload.wikimedia.org'],
  }
};

export default withNextIntl(nextConfig);
