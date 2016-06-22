import gulp from 'gulp';
import runSequence from 'run-sequence';

import config from './gulp/config';
import path from './gulp/path';
import Css from './gulp/tasks/css.task';
import Js from './gulp/tasks/js.task';
import Html from './gulp/tasks/html.task';
import Fonts from './gulp/tasks/fonts.task';
import Images from './gulp/tasks/images.task';
import Clean from './gulp/tasks/clean.task';
import Webserver from './gulp/tasks/webserver.task';

gulp.task('js:lint', Js.lint);
gulp.task('js:build', ['js:lint'], Js.build);
gulp.task('js:vendor', Js.vendor);
gulp.task('css:build', Css.build);
gulp.task('html:build', Html.build);
gulp.task('fonts:build', Fonts.build);
gulp.task('images:build', Images.build);
gulp.task('serve', Webserver.serve);

gulp.task('build', ['images:build', 'js:vendor', 'js:build', 'css:build', 'html:build', 'fonts:build']);

gulp.task('clean:del', Clean.delete);
gulp.task('clean:cache', Clean.clear);

gulp.task('clear', ['clean:del', 'clean:cache']);

gulp.task('watch', () => {
  gulp.watch(path.all.js, ['js:build']);
  gulp.watch(path.all.scss, ['css:build']);
  gulp.watch(path.all.html, ['html:build']);
  gulp.watch(path.all.fonts, ['fonts:build']);
  gulp.watch(path.all.images, ['images:build']);
});

gulp.task('default', function(callback) {
  runSequence('build',
              ['watch', 'serve'],
              callback);
});