import gulp from 'gulp'
import babel from 'gulp-babel'
import concat from 'gulp-concat'
import uglify from 'gulp-uglify'
import rename from 'gulp-rename'
import cleanCSS from 'gulp-clean-css'
import {
  deleteAsync
} from 'del'
import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import sourcemaps from 'gulp-sourcemaps'
import minifyHtml from 'gulp-htmlmin'
import svgSprite from 'gulp-svg-sprite'
import browserSync from 'browser-sync'

browserSync.create()
const sass = gulpSass(dartSass)

export const clean = async () => {
  await deleteAsync(['dist', 'build'])
}

export const replaceNormalize = () => {
  return gulp.src('./src/*.css')
    .pipe(gulp.dest('./build'))
    .pipe(minifyHtml({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('./dist'))
}

export const css = () => {
  return gulp.src('./src/sass/**/*.sass')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('main.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist'))
    .pipe(cleanCSS({
      level: 2,
    }))
    .pipe(gulp.dest('./build'))
    .pipe(browserSync.stream())
}

export const html = () => {
  return gulp.src('./src/*.html')
    .pipe(gulp.dest('./dist'))
    .pipe(minifyHtml({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('./build'))
    .pipe(browserSync.stream())
}

export const svgSprites = () => {
  return gulp.src('src/svg/**/*.svg')
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: '../sprite.svg',
        }
      }
    }))
    .pipe(gulp.dest('./build'))
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream())
}

const watchFiles = () => {
  browserSync.init({
    server: {
      baseDir: 'dist/',
    }
  })
}

gulp.watch('src/**/*.html', html)
gulp.watch('src/**/*.sass', css)
gulp.watch('src/**/*.svg', svgSprites)

export default gulp.series(clean, html, css, svgSprites, replaceNormalize, watchFiles)