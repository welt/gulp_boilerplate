import gulp from 'gulp';
const browserSync = require('browser-sync').create();

import config from '../config';
import path from '../path';

/**
 * Clean task
 * @class Clean
 */
class Webserver {

  /**
   * Start your webserver and watch for changes
   * @returns {*}
   */
  static serve() {
    browserSync.init(config.server);

    browserSync.watch(path.dest.all).on('change', browserSync.reload);
  }

}

export default Webserver;