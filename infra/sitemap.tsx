import { mkdirSync, writeFileSync } from "fs";
import { dirname, join, resolve } from "path";
import { app } from "../server";
import { AddressInfo } from "net";
import { init, transpile } from "jjsx";
init();

const PUBLIC_SITE = 'https://ufukbakan.github.io/cv';

const staticRoutes = [
    '/',
];

const targetDir = resolve(import.meta.dirname, '../public');

const server = app.listen(0, async (err) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    const port = (server.address() as AddressInfo).port;
    const origin = `http://localhost:${port}`;
    await generateSitemap(origin);
    process.exit(0);
});

async function generateSitemap(origin: string) {
    const sitemapEntries = [];
    for (const path of staticRoutes) {
        console.info('Generating sitemap entry for:', path);
        const response = await fetch(`${origin}${path}`);
        if (response.ok) {
            sitemapEntries.push(<url><loc>{PUBLIC_SITE}{path}</loc></url>);
        } else {
            console.warn(`Failed to fetch ${origin}${path} for sitemap generation.`);
        }
    }
    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${transpile(sitemapEntries)}</urlset>`;
    const targetBuildPath = join(targetDir, 'sitemap.xml');
    mkdirSync(dirname(targetBuildPath), { recursive: true });
    writeFileSync(targetBuildPath, sitemapContent, 'utf-8');
}