const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const imagemin = require("gulp-imagemin");
const obfuscate = require("gulp-obfuscate");

function funçãoTeste(callback) {
  console.log("Executando via Gulp");
  callback();
}

function compilaSass() {
  return gulp
    .src("./source/styles/*.scss")
    .pipe(
      sass({
        outputStyle: "compressed",
      })
    )
    .pipe(gulp.dest("./build/styles"));
}

function compilaImages() {
  return gulp
    .src("./source/images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./build/images"));
}

function compilaJs() {
  return gulp
    .src("./source/styles/script.js")
    .pipe(obfuscate())
    .pipe(gulp.dest("./build/styles"));
}

module.exports = {
  sass: compilaSass,
  default: funçãoTeste,
  imagemin: compilaImages,
  obfuscate: compilaJs,
};
