import { crx, defineManifest } from '@crxjs/vite-plugin';
import { defineConfig } from 'vite';

const manifest = defineManifest({
    manifest_version: 3,
    name: 'PeMT-Tools',
    description: 'PeMTのツール',
    version: '1.1.0',
    permissions: [
        'declarativeNetRequest',
        'declarativeNetRequestFeedback',
        'activeTab',
    ],
    host_permissions: [
        '*://*.pemt.trusted-host.online/*',
        '*://*.cdnjs.cloudflare.com/*'
    ],
    declarative_net_request: {
        rule_resources: [
            {
                id: 'redirect_1',
                enabled: true,
                path: 'public/redirect_1.json'
            }
        ]
    },

    web_accessible_resources: [
        {
            matches: [
                'https://pemt.trusted-host.online/*'
            ],
            resources: [
                'override.js',
                'ext-language_tools.js',
            ]
        }
    ],
    content_scripts: [
        {
            matches: [
                'https://pemt.trusted-host.online/*'
            ],
            js: [
                'src/index.ts',
                'src/override.ts'
            ],
            run_at: 'document_end'
        },
        {
            matches: [
                'https://pemt.trusted-host.online/class/*'
            ],
            js: [
                'src/exec.ts'
            ],
        }
    ]
});

export default defineConfig({
    plugins: [crx({ manifest })],
});