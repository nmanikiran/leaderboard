// rollup.config.js
import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import { generateSW } from 'rollup-plugin-workbox';
import copy from 'rollup-plugin-copy';

// PostCSS plugins
import simplevars from 'postcss-simple-vars';
import nested from 'postcss-nested';
import cssnext from 'postcss-cssnext';
import cssnano from 'cssnano';
import postcssCustomProperties from 'postcss-custom-properties';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.min.js',
    format: 'esm',
    compact: true
  },
  watch: {
    include: 'src/**',
    exclude: 'node_modules/**'
  },

  plugins: [
    generateSW({
      swDest: 'dist/sw.js',
      globDirectory: 'dist/',
      mode: 'production'
    }),
    postcss({
      extract: path.resolve('dist/styles.min.css'),
      plugins: [
        postcssCustomProperties(),
        simplevars(),
        nested(),
        cssnext({ warnForDuplicates: false }),
        cssnano()
      ],
      extensions: ['.css']
    }),
    resolve(),
    babel({ babelHelpers: 'bundled' }),
    copy({
      targets: [
        { src: '/manifest.json', dest: 'dist/manifest.json' },
        { src: 'src/assets/**/*', dest: 'dist/assets' }
      ]
    })
  ]
};
