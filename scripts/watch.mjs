import * as esbuild from 'esbuild'
import {config} from "./config.mjs";


const ctx1 = await esbuild.context({
    ...config,
    entryPoints: ['./src/hooks/**', './src/Components/**'],
    plugins: [
    ]
})
const ctx2 = await esbuild.context({
    ...config,
    bundle: true,
    platform: 'node',
    entryPoints: ['./src/vite', './src/babel'],plugins: [
    ]
})

ctx1.watch()
ctx2.watch()

