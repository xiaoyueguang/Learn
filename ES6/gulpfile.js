var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('babel', function(){
  return gulp.src('./es6/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .on('error', function(err){
      console.log('报错了:',err);
      this.end();
    })
    .pipe(gulp.dest('./es5'));
});

gulp.task('default', function(){
  gulp.watch('./es6/*.js', ['babel'])
});
