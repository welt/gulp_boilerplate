import { errorHandler } from './helpers';
import babel from 'rollup-plugin-babel';

/**
 * Plugins settings
 */
export default {

  server: {
    server: {
        baseDir: './dist'
    },
    host: 'localhost',
    port: 3000,
  },

  rollup: {
    format: 'es6',
    sourceMap: true,
    onwarn: (error) => {
      throw new Error(error);
    },
    plugins: [

      babel({
        presets: ['es2015-rollup'],
          babelrc: false,
          exclude: 'node_modules/**'
      })
    ]
  },

  simpleVars: { silent: true },

  autoprefixer: { browsers: ['last 2 version', 'ie >= 10'] },

  assets: {
    loadPaths: ['./app/img/'],
    cachebuster: true
  },

  inlineSvg: { path: './app/img/' },

  cssnano: { 
    discardComments: {
        removeAll: true
    },
    zindex: false,
    discardUnused: false,
    mergeIdents: false,
    reduceIdents: false
  },

  sourceMap: {
    init: {
      loadMaps: true
    },
    write: {}
  },

  eslint: { "extends": "airbnb-base" },

  uglify: {},

  imagemin: {},

  plumber: { errorHandler: errorHandler }
}
