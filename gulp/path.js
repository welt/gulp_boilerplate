/**
 * Project path
 */
let srcDir = 'app',
    publicDir = 'dist';

export default {
  entries: {
    scss: [`./${ srcDir }/scss/main.scss`],
    js: [`./${ srcDir }/js/app.js`]
  },
  vendor: {
    js: [
      `./${ srcDir }/libs/jquery/dist/jquery.js`
    ]
  },
  all: {
    html: `${ srcDir }/*.html`,
    js: `${ srcDir }/js/**/*.js`,
    scss: `${ srcDir }/scss/**/*.scss`,
    fonts: [`${ srcDir }/fonts/**/*.*`],
    images: `${ srcDir }/img/**/*.{gif,jpg,png,svg}`
  },
  dest: {
    all: `${ publicDir }/**/*.*`,
    js: `${ publicDir }/js`,
    css: `${ publicDir }/css`,
    html: `${ publicDir }/`,
    fonts: `${ publicDir }/fonts`,
    images: `${ publicDir }/img`
  },
  publicDir: publicDir
}
