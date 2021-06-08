var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var ap = require('gulp-autoprefixer');
var sm = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

function redirect(done){

  gulp.src('./scss/**/*.scss')
  .pipe(sm.init())
  .pipe(sass({
    errorLogToConsole: true,
    outputStyle: 'compressed'
  }))
  .on('error', console.error.bind(console))
  .pipe(ap({
    browsers:['last 3 versions'],
    cascade: false
  }))
  .pipe(rename('style.css'))
  .pipe(sm.write())
  .pipe(gulp.dest('./'))
  .pipe(browserSync.stream());


  done();
}

function sync(done){
  browserSync.init({
    server: {
      baseDir: "./"
    },
    port: 8888
  });
  done();
}

function watcher(){
  gulp.watch("./scss/**/*", redirect);
}

gulp.task('default', gulp.parallel(sync, watcher));
gulp.task(sync);
