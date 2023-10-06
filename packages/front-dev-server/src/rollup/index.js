import * as rollup from 'rollup'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import inject from './rollup-plugin-inject.js'


export function startRollupWatcher() {
  const watchOptions = {
    input: './main.js',
    plugins: [
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