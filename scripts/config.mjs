import { execSync } from 'child_process'

export const config = {
    outdir: "./lib",
    platform: 'browser',
    tsconfig: 'tsconfig.json',
}

export const typescript = {
    name: 'TypeScriptDeclarationsPlugin',
    setup(build) {
        build.onEnd((result) => {
            if (result.errors.length > 0) return
            execSync('tsc')
        })
    }
}
