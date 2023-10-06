import * as rollup from 'rollup'
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'

const bundle = await rollup.rollup({
  input: './rollup/input.js',
  plugins: [
    commonjs(),
    nodeResolve()
  ]
})
await bundle.write({
  file: './bin/index.js',
  format: 'esm',
})