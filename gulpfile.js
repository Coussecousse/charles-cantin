
const gulp = require("gulp");
const imagemin = require('gulp-imagemin');

function imgSquash() {
    return gulp.src("public/images/*")
        .pipe(imagemin())
        .pipe(gulp.dest("public/images/"));
};

gulp.task("imgSquash", imgSquash);


