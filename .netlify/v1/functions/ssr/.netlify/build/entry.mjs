import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_2tPnUOI5.mjs';
import { onRequest } from './_noop-middleware.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/api/sendemail.astro.mjs');
const _page4 = () => import('./pages/contact.astro.mjs');
const _page5 = () => import('./pages/favicon.ico.astro.mjs');
const _page6 = () => import('./pages/manifest.json.astro.mjs');
const _page7 = () => import('./pages/robots.txt.astro.mjs');
const _page8 = () => import('./pages/services.astro.mjs');
const _page9 = () => import('./pages/work.astro.mjs');
const _page10 = () => import('./pages/index.astro.mjs');
const _page11 = () => import('./pages/_---slug_.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/api/sendEmail.ts", _page3],
    ["src/pages/contact.astro", _page4],
    ["src/pages/favicon.ico.ts", _page5],
    ["src/pages/manifest.json.ts", _page6],
    ["src/pages/robots.txt.ts", _page7],
    ["src/pages/services.astro", _page8],
    ["src/pages/work.astro", _page9],
    ["src/pages/index.astro", _page10],
    ["node_modules/@astrojs/starlight/index.astro", _page11]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "8354c514-a5bb-41d2-8bfa-044d4b97027b"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
