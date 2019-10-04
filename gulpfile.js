const gulp = require("gulp");
const sass = require("gulp-sass");
const plumber = require("gulp-plumber");
const browserSync = require("browser-sync");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const babel = require("gulp-babel");

gulp.task("default", ["sass", "js"], () => {
  browserSync.init({
    server: "./public/"
  });

  gulp.watch(["scss/**/*.scss", "src/**/*.scss"], ["sass"]);
  gulp.watch("src/**/*.js", ["js"]);
  gulp.watch("*.html").on("change", browserSync.reload);
});

gulp.task("js", () => {
  return gulp
    .src("src/**/*.js")
    .pipe(plumber())
    .pipe(
      babel({
        presets: ["@babel/env"]
      })
    )
    .pipe(concat("script.js"))
    .pipe(gulp.dest("public/js"))
    .pipe(uglify())
    .pipe(rename("script.min.js"))
    .pipe(gulp.dest("public/js"))
    .pipe(browserSync.stream());
});

gulp.task("sass", () => {
  return gulp
    .src("scss/main.scss")
    .pipe(plumber())
    .pipe(sass().on("error", sass.logError))
    .pipe(rename("style.css"))
    .pipe(gulp.dest("public/css"))
    .pipe(cleanCSS())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("public/css"))
    .pipe(browserSync.stream());
});
