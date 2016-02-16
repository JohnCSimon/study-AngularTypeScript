var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');

// var tscCompile = tsc({
//         module: '',
//         target: 'ES6',
//         sourcemap: true,
//         logErrors: true,
//         noEmitOnError: false
//     });
var reporter =  ts.reporter.fullReporter();

var tsProject = ts.createProject({
    declaration: true,
            target: 'ES6',
        sourcemap: true,
        logErrors: true,
        noEmitOnError: false
});

var tsComp = ts(tsProject);

var path = 'app/**/*.ts';
gulp.task('default', function () {
    console.log('Default!')
  return gulp.src(path).pipe(tsComp).pipe(gulp.dest('app'));
});


gulp.task('watch', ['default'], function() {
    gulp.watch(path, ['default']);
});
