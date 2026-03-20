import { mkdirSync, writeFileSync } from "fs";
import { dirname, join, resolve } from "path";
import { app } from "../server";
import { AddressInfo } from "net";
const staticRoutes = [
    '/',
];

const targetDir = resolve(import.meta.dirname, '../dist/client');

const server = app.listen(0, async (err) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    const port = (server.address() as AddressInfo).port;
    for (const path of staticRoutes) {
        const origin = `http://localhost:${port}`;
        console.log('Building page:', path);
        const response = await fetch(`${origin}${path}`);
        const html = await response.text();
        const targetBuildPath = join(targetDir, path, 'index.html');
        mkdirSync(dirname(targetBuildPath), { recursive: true });
        writeFileSync(targetBuildPath, html);
    }
    process.exit(0);
});