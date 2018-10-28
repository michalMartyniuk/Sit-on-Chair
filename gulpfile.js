const gulp = require("gulp");
const sass = require("gulp-sass");
const plumber = require("gulp-plumber");
const browserSync = require("browser-sync");

gulp.task("default", ["sass"], function() {
  browserSync.init({
    server: "./"
  });
  gulp.watch(["components/**/*.scss", "scss/**/*.scss"], ["sass"]);
  gulp.watch("*.html").on("change", browserSync.reload);
});

gulp.task("sass", function() {
  return gulp
    .src("scss/styles.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest("bundle/css"))
    .pipe(browserSync.stream());
});
