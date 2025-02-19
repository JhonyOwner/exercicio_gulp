const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

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

exports.sass = compilaSass;
exports.default = funçãoTeste;
