import { crx, defineManifest } from "@crxjs/vite-plugin";
import { defineConfig } from "vite";

const manifest = defineManifest({
    manifest_version: 3,
    name: "PeMT-Tools",
    description: "PeMTのツール",
    version: "0.1.0",
    content_scripts: [
        {
            matches: [
                "https://pemt.trusted-host.online/*"
            ],
            js: [
                "src/index.ts"
            ],
            // css: [
            //     "global.css"
            // ]
        },
        {
            matches: [
                "https://pemt.trusted-host.online/class/*"
            ],
            js: [
                "src/exec.ts"
            ],
        }
    ]
});

export default defineConfig({
    plugins: [crx({ manifest })],
});