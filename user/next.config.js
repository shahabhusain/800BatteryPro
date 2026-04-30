const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    // Add CSP headers to allow Clarity and GTM
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'Content-Security-Policy',
                        value: [
                            "default-src 'self'",
                            "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://*.googletagmanager.com https://*.clarity.ms https://c.bing.com https://www.googletagmanager.com",
                            "style-src 'self' 'unsafe-inline'",
                            "img-src 'self' blob: data: https://*.clarity.ms https://*.google-analytics.com https://*.googletagmanager.com",
                            "connect-src 'self' https://*.clarity.ms https://c.bing.com https://*.google-analytics.com https://*.analytics.google.com",
                            "font-src 'self'",
                            "frame-src 'self' https://*.googletagmanager.com",
                        ].join('; ')
                    }
                ]
            }
        ];
    }
};
 
module.exports = withNextIntl(nextConfig);