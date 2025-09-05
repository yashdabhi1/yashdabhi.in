// scripts/generate-sitemap.js
const { SitemapStream, streamToPromise } = require('sitemap');
const { writeFileSync, mkdirSync, existsSync } = require('fs');
const path = require('path');

const hostname = 'https://yashdabhi.vercel.app'; // <- change if needed

// static routes — add your pages here
const routes = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.7 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
  // push more routes or generate dynamic ones below
];

(async () => {
  try {
    const publicDir = path.join(__dirname, '..', 'public');
    if (!existsSync(publicDir)) mkdirSync(publicDir);

    // Example: add dynamic routes from files (uncomment & adapt if needed)
    // const fs = require('fs');
    // const postsDir = path.join(__dirname, '..', 'src', 'posts');
    // if (fs.existsSync(postsDir)) {
    //   const files = fs.readdirSync(postsDir);
    //   files.forEach(file => {
    //     const slug = file.replace(/\.mdx?$|\.md$/i, '');
    //     routes.push({ url: `/blog/${slug}`, changefreq: 'monthly', priority: 0.8 });
    //   });
    // }

    const sitemapStream = new SitemapStream({ hostname });
    routes.forEach(r => sitemapStream.write(r));
    sitemapStream.end();

    const sitemap = await streamToPromise(sitemapStream);
    writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap.toString());
    console.log('✅ sitemap.xml created at public/sitemap.xml');
  } catch (err) {
    console.error('❌ Failed to create sitemap:', err);
    process.exit(1);
  }
})();
