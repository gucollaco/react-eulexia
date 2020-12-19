import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import scss from 'rollup-plugin-scss'
import { terser } from 'rollup-plugin-terser'
import { uglify } from 'rollup-plugin-uglify'

const config = [
  {
    input: 'src/index.js',
    output: {
      file: 'dist/index.js',
      format: 'cjs'
    },
    external: [/@babel\/runtime/],
    plugins: [
      external(),
      resolve({ browser: true }),
      commonjs({
        include: ['node_modules/**']
      }),
      babel({ exclude: 'node_modules/**', babelHelpers: 'bundled' }),
      scss(),
      uglify()
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
      resolve({ browser: true }),
      commonjs({
        include: ['node_modules/**']
      }),
      babel({ exclude: 'node_modules/**', babelHelpers: 'bundled' }),
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
      resolve({ browser: true }),
      commonjs({
        include: ['node_modules/**']
      }),
      babel({ exclude: 'node_modules/**', babelHelpers: 'bundled' }),
      scss(),
      terser()
    ]
  }
]

export default config
