import babel from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import scss from 'rollup-plugin-scss'
// import builtins from 'rollup-plugin-node-builtins'
import { terser } from 'rollup-plugin-terser'
// import { uglify } from 'rollup-plugin-uglify'
import builtins from 'builtin-modules'

const config = [
  {
    input: 'src/index.js',
    output: {
      file: 'dist/index.js',
      format: 'cjs'
    },
    external: builtins,
    plugins: [
      external(),
      nodeResolve(),
      commonjs(),
      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'runtime',
        skipPreflightCheck: true
      })
    ]
  },
  {
    input: 'src/index.js',
    output: {
      file: 'dist/index.modern.js',
      format: 'es'
    },
    external: [/@babel\/runtime/],
    plugins: [
      external(),
      nodeResolve({ browser: true }),
      commonjs({
        include: ['node_modules/**']
      }),
      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'runtime',
        skipPreflightCheck: true
      }),
      scss(),
      terser()
    ]
  },
  {
    input: 'src/index.js',
    output: {
      name: 'ReactEulexia',
      file: 'dist/index.umd.js',
      globals: {
        react: 'React',
        'styled-components': 'styled',
        crypto: 'crypto'
      },
      format: 'umd'
    },
    plugins: [
      external(),
      nodeResolve({ browser: true }),
      commonjs({
        include: ['node_modules/**']
      }),
      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'runtime',
        skipPreflightCheck: true
      }),
      scss(),
      terser()
    ]
  }
]

export default config
