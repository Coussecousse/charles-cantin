
const gulp = require("gulp");
const imagemin = require('gulp-imagemin');

function imgSquash() {
    return gulp.src("public/images/*")
        .pipe(imagemin())
        .pipe(gulp.dest("public/images/"));
};

gulp.task("imgSquash", imgSquash);
function imgSquashIcon() {
    return gulp.src("src/images/*")
        .pipe(imagemin())
        .pipe(gulp.dest("src/images/"));
};

gulp.task("imgSquashIcon", imgSquashIcon)

