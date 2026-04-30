const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'Content-Security-Policy',
                        value: [
                            "default-src 'self'",
                            "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://*.googletagmanager.com https://www.google.com https://www.gstatic.com https://*.youtube.com https://*.ytimg.com https://*.doubleclick.net",
                            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
                            "font-src 'self' https://fonts.gstatic.com https://fonts.googleapis.com",
                            "img-src 'self' blob: data: https://*.google-analytics.com https://*.googletagmanager.com https://img.youtube.com https://*.ytimg.com https://www.google.com",
                            "connect-src 'self' https://api.800batterypro.com https://*.google-analytics.com https://www.google.com https://google.com https://*.google.com",
                            "frame-src 'self' https://*.googletagmanager.com https://*.youtube.com https://*.youtube-nocookie.com https://www.google.com",
                        ].join('; ')
                    }
                ]
            }
        ];
    }
};
 
module.exports = withNextIntl(nextConfig);