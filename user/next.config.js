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
                            "default-src 'self' https://*.clarity.ms https://c.bing.com",
                            "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://*.googletagmanager.com https://*.clarity.ms https://www.clarity.ms https://c.bing.com https://www.google.com https://www.gstatic.com https://*.youtube.com https://*.ytimg.com https://*.doubleclick.net",
                            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
                            "font-src 'self' https://fonts.gstatic.com https://fonts.googleapis.com",
                            "img-src 'self' blob: data: https://*.clarity.ms https://*.google-analytics.com https://*.googletagmanager.com https://img.youtube.com https://*.ytimg.com https://www.google.com",
                            "connect-src 'self' https://api.800batterypro.com https://*.clarity.ms https://a.clarity.ms https://b.clarity.ms https://c.clarity.ms https://d.clarity.ms https://e.clarity.ms https://f.clarity.ms https://g.clarity.ms https://h.clarity.ms https://i.clarity.ms https://j.clarity.ms https://k.clarity.ms https://l.clarity.ms https://m.clarity.ms https://n.clarity.ms https://o.clarity.ms https://p.clarity.ms https://q.clarity.ms https://r.clarity.ms https://s.clarity.ms https://t.clarity.ms https://u.clarity.ms https://v.clarity.ms https://w.clarity.ms https://x.clarity.ms https://y.clarity.ms https://z.clarity.ms https://c.bing.com https://*.google-analytics.com https://www.google.com https://google.com https://*.google.com",
                            "frame-src 'self' https://*.googletagmanager.com https://*.youtube.com https://*.youtube-nocookie.com https://www.google.com",
                        ].join('; ')
                    }
                ]
            }
        ];
    }
};
 
module.exports = withNextIntl(nextConfig);