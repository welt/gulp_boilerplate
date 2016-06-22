import gulp from 'gulp';

import del from 'del';
import cache from 'gulp-cache';

import path from '../path';

/**
 * Clean task
 * @class Clean
 */
class Clean {

  /**
   * Delete dest folder
   * @returns {*}
   */
  static delete() {
    return del(path.publicDir);
  }

  static clear(done) {
    return cache.clearAll(done);
  }
}

export default Clean;