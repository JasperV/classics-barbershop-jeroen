const gulp = require('gulp');
const log = require('fancy-log');
const critical = require('critical').stream;

gulp.task('critical', () => {
  return gulp
    .src('./docs/*.html')
    .pipe(
      critical({
        base: './docs/',
        inline: true
        // css: ['css/*']
      })
    )
    .on('error', err => {
      log.error(err.message);
    })
    .pipe(gulp.dest('./docs/'));
});
