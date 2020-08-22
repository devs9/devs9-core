import svgr from '@svgr/rollup'
import url from 'rollup-plugin-url'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
import external from 'rollup-plugin-peer-deps-external'
import pkg from './package.json'

const outputComponents = 'core/index.js'
const inputComponents = 'src/components/core/index.ts'

export default [
  {
    input: inputComponents,
    output: [
      {
        file: outputComponents,
        format: 'cjs',
        exports: 'named',
        sourcemap: true
      },
      {
        file: pkg.module,
        format: 'es6',
        exports: 'named',
        sourcemap: true
      }
    ],
    plugins: [
      external(),
      url(),
      svgr(),
      resolve(),
      typescript({
        clean: true,
        rollupCommonJSResolveHack: true,
        exclude: ['src/**/*.stories.tsx', 'src/**/*.test.(tsx|ts)']
      }),
      commonjs()
    ]
  }
]
