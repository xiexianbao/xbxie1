import * as rollup from 'rollup'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import inject from './rollup-plugin-inject.js'


export function startRollupWatcher() {
  const watchOptions = {
    input: './main.js',
    plugins: [
      commonjs(),
      nodeResolve(),
      inject()
    ],
    output: {
      file: './index.js',
      format: 'esm',
    }
  }
  return rollup.watch(watchOptions)
}