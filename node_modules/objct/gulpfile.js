var gulp = require("gulp"),
    uglify = require('gulp-uglify'),
    browserify   = require('browserify'),
    source       = require('vinyl-source-stream'),
    buffer       = require('vinyl-buffer'),
    git = require('gulp-git'),
    qunit = require('gulp-qunit'),
    bump = require('gulp-bump');

///////////////////////////////////////////////////////////////////////////////

gulp.task('scripts', scripts);
gulp.task('test', ["scripts"], test);
gulp.task('watch', ["scripts"], watch);

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

function scripts() {

    browserify({
        debug: false,
        entries: ['./build_helper/objct.js']
    })
    .bundle()
    .pipe(source('objct.js'))
    .pipe(buffer())
    .pipe(uglify({
        "preserveComments" : "some"
    }))
    .pipe(gulp.dest('./dist/'))
    ;    

    browserify({
        debug: false,
        entries: ['./build_helper/objct.e.js']
    })
    .bundle()
    .pipe(source('objct.e.js'))
    .pipe(buffer())
    .pipe(uglify({
        "preserveComments" : "some"
    }))
    .pipe(gulp.dest('./dist/'))
    ;
}

///////////////////////////////////////////////////////////////////////////////

function test() {
    gulp.src('test/objct.html').
        pipe(qunit());
    gulp.src('test/objct.e.html').
        pipe(qunit());
}

///////////////////////////////////////////////////////////////////////////////

function watch(){
    gulp.watch(["./package.json", "./objct.js"], ['scripts']);
}

///////////////////////////////////////////////////////////////////////////////

/* Deploy - Test when next deploy ready*/

// gulp.task('bump', function () {
//   return gulp.src(['./package.json', './bower.json'])
//     .pipe(bump())
//     .pipe(gulp.dest('./'));
// });

// gulp.task('tag',["bump"], function () {
//   var pkg = require('./package.json');
//   var v = 'v' + pkg.version;
//   var message = 'Release ' + v;

//   return gulp.src('./')
//     .pipe(git.commit(message))
//     .pipe(git.tag(v, message))
//     .pipe(git.push('origin', 'Master', '--tags'))
//     .pipe(gulp.dest('./'));
// });

// gulp.task('deploy' ,["tag"], function (done) {
//   require('child_process').spawn('npm', ['publish'], { stdio: 'inherit' })
//     .on('close', done);
// });