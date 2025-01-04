import * as esbuild from 'esbuild'
import {config, typescript} from "./config.mjs";

await esbuild.build({
    ...config,
    entryPoints: ['./src/hooks/**', './src/Components/**'],
    plugins: [
        typescript
    ]
})
await esbuild.build({
    ...config,
    bundle: true,
    platform: 'node',
    entryPoints: ['./src/vite', './src/babel'],plugins: [
        typescript
    ]
})

