import gulp from 'gulp'
import babel from 'gulp-babel'
import del from 'del'
import runSequence from 'run-sequence'
import rename from 'gulp-rename'
import gulpif from 'gulp-if'
import uglify from 'gulp-uglify'

import htmlmin from 'gulp-htmlmin'
import imagemin from 'gulp-imagemin'
import postcss from 'gulp-postcss'
import autoprefixer from 'autoprefixer'

import notify from 'gulp-notify'
import plumber from 'gulp-plumber'
import less from 'gulp-less'


const isBuild = () =>{
  process.env.NODE_ENV === 'production'
}

const processes = [
  autoprefixer({ browsers: ['iOS >= 8','last 7 versions'] })
]

gulp.task('clean',() => {
  return del(['dist/**/*'])
})

gulp.task('js', () =>
  gulp.src(['src/**/*.js'])
  .pipe(babel())
  .pipe(gulpif(isBuild, uglify()))
  .pipe(gulp.dest('dist'))
);

gulp.task('image', () =>
  gulp.src(['src/**/*.{jpg,jpeg,png}'])
  .pipe(gulpif(isBuild, imagemin()))
  .pipe(gulp.dest('dist'))
);


gulp.task('css', () =>
  gulp.src(['src/**/*.{wxss,css,less}'])
  .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
  .pipe(less())
  .pipe(postcss(processes))
  .pipe(rename({ extname: '.wxss' }))
  .pipe(gulp.dest('dist'))
);

gulp.task('json', () =>
  gulp.src(['src/**/*.json']).pipe(gulp.dest('dist'))
);
gulp.task('html', () =>{
    gulp.src(['src/**/*.{wxml,xml,html}'])
    .pipe(rename({ extname: '.wxml' }))
    .pipe(gulp.dest('dist'))
  }
);

gulp.task('build', () => runSequence('clean', ['js','json','html','css','image']));

gulp.task('watch', ['build'], () => {
  gulp.watch('src/**/*.js', ['js']);
  gulp.watch('src/**/*.json', ['json']);
  gulp.watch('src/**/*.{wxml,html}', ['html']);
  gulp.watch('src/**/*.{wxss,css,less}', ['css']);
  gulp.watch('src/**/*.{jpg,jpeg,png}', ['image']);
});

gulp.task('default', ['watch']);
