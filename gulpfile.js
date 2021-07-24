var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;


// use default task to launch Browsersync and watch JS files
gulp.task('default', function () {

  // Serve files from the root of this project
  browserSync.init({
    proxy: "project1.local"
  });

  // all browsers reload after tasks are complete.
  gulp.watch("lib/**/*.js").on("change", reload );
});