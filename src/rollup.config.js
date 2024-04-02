import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';

export default {
  input: '/src/main.jsx',
  output: {
    file: './dist/bundle.js',
    format: 'cjs',
  },
  plugins: [resolve(), commonjs(), babel({ babelHelpers: 'bundled' })],
};
