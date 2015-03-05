/**
 * Created by sergio on 05-03-15.
 */

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function(){
   console.log("hellow world");
});


//Sass task!

gulp.task('sass', function(){
    gulp.src('styles/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('styles'));
});
