import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: './src/index.ts',
    output: {
        format: 'cjs',
        file: './dist/index.js',
        banner: '#!/usr/bin/env node'
    },
    plugins: [
        typescript({
            tsconfigOverride: {
                compilerOptions: {
                    declaration: false,
                    module: "ESNext"
                }
            },
            objectHashIgnoreUnknownHack: true,
            rollupCommonJSResolveHack: true
        }),
        nodeResolve(),
        commonjs(),
        terser({
            toplevel: true,
            mangle: {},
            format: {
                comments: false
            }
        })
    ]
}