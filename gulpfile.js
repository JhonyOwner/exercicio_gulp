const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const imagemin = require("gulp-imagemin");

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
    .pipe("imagemin")
    .pipe(gulp.dest("./build/images"));
}

exports.sass = compilaSass;
exports.default = funçãoTeste;
exports.imagemin = compilaImages;
