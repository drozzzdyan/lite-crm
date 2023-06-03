import gulp from 'gulp';
import less from 'gulp-less';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
import cleanCSS from 'gulp-clean-css';
import { deleteAsync } from 'del';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';

const sass = gulpSass(dartSass);

export const clean = async() => {
  await deleteAsync([ 'dist' ]);
}

export const buildStyles = () => {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
};