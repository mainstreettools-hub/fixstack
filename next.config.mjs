// Old Vercel URL -> custom domain (permanent 308) in one hop, so search engines consolidate on getfixstack.com.
// Page paths keep their trailing slash (trailingSlash: true); file paths like /sitemap.xml do not get one.
const OLD_HOST = [{ type: 'host', value: 'fixstack-mu.vercel.app' }];
export default {
  trailingSlash: true,
  images: { unoptimized: true },
  async redirects() {
    return [
      { source: '/', has: OLD_HOST, destination: 'https://getfixstack.com/', permanent: true },
      { source: '/:file(.*\\.[a-zA-Z0-9]+)', has: OLD_HOST, destination: 'https://getfixstack.com/:file', permanent: true },
      { source: '/:path*', has: OLD_HOST, destination: 'https://getfixstack.com/:path*/', permanent: true },
    ];
  },
};
