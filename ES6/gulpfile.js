var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('babel', function(){
  return gulp.src('./es6/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('./es5'));
});

gulp.task('default', function(){
  gulp.watch('./es6/*.js', ['babel'])
});
