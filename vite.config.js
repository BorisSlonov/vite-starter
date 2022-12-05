import {
    resolve
} from 'path'
import {
    defineConfig
} from "vite"
import {
    ViteAliases
} from "vite-aliases"
import legacy from "@vitejs/plugin-legacy"
import viteImagemin from 'vite-plugin-imagemin'
import createSvgSpritePlugin from 'vite-plugin-svg-sprite'

import pages from './vitejs/pages.config'
const pagesInput = {}
pages.forEach((page => {
    pagesInput[page.name] = page.path
}));


export default defineConfig({
    root: './',
    publicDir: 'public',
    build: {
        target: 'es2017',
        outDir: 'build',
        rollupOptions: {
            input: {
                ...pagesInput
            }
        },
    },
    server: {
        port: 3000,
        host: '0.0.0.0',
        hmr: true,
    },
    plugins: [
        ViteAliases(),
        legacy({
            targets: ['defaults', 'not IE 11'],
        }),
        viteImagemin({
            gifsicle: {
                optimizationLevel: 7,
                interlaced: false,
            },
            optipng: {
                optimizationLevel: 7,
            },
            mozjpeg: {
                quality: 80,
            },
            pngquant: {
                quality: [0.8, 0.9],
                speed: 4,
            },
            svgo: {
                plugins: [{
                        name: 'removeViewBox',
                    },
                    {
                        name: 'removeEmptyAttrs',
                        active: false,
                    },
                ],
            },
        }),
        createSvgSpritePlugin({
            include: '/img/**/*.svg',
            symbolId: 'icon-[name]-[hash]',
        }),
    ],
})