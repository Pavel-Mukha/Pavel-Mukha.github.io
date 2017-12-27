var gulp = require('gulp');
var sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');


gulp.task('sass', function () {
    gulp.src("./sass/style.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task("sass:watch", function () {
   gulp.watch("./sass/**/*.scss", ['sass']);
});

gulp.task('default', () =>
gulp.src('css/style.css')
    .pipe(autoprefixer({
        browsers: ['last 1000 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('dist'))
);

