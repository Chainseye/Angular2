const gulp = require("gulp");

//引入组件
const minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    sourcemaps = require('gulp-sourcemaps'),
    rev = require('gulp-rev'),
    revCollector = require('gulp-rev-collector'),
    clean = require('gulp-clean'),
    merge = require('gulp-merge-link'),
    notify = require("gulp-notify"),
    watch = require('gulp-watch');

function handleError() {

    var args = Array.prototype.slice.call(arguments);

    notify.onError({
        title: 'compile error',
        message: '<%=error.message %>'
    }).apply(this, args);//替换为当前对象

    this.emit();//提交
}

//gulp.task('bundle', function () {
//    browserify({
//        entries: ['./src/main/main.js'],
//        debug: true // 告知Browserify在运行同时生成内联sourcemap用于调试
//    })
//        .bundle()
//        .pipe(source('bundle.js'))
//        .pipe(buffer()) // 缓存文件内容
//        .pipe(uglify())
//        .on('error', handleError)
//        .pipe(gulp.dest('./build/js'))
//        .pipe(notify('JS 压缩成功'));
//});
//
//// 压缩并移动CSS
//gulp.task('miniMainCSS', function () {
//    return gulp.src([
//        './src/css/*.css'
//    ])
//        .pipe(minifycss())
//        .on('error', handleError)
//        .pipe(gulp.dest("./build/css"))
//        .pipe(notify("Css move success"));
//});
//
////移动 image
//gulp.task('moveImages', function () {
//    return gulp.src([
//        './src/images/*.*'
//    ])
//        .on('error', handleError)
//        .pipe(gulp.dest("./build/images"))
//        .pipe(notify("image move success"));
//});
//
//gulp.task('moveHtml', function () {
//    return gulp.src(
//        ['./src/**/**/**/**/*.html']
//    )
//        .pipe(merge({
//            'js/bundle.js': ['../systemjs.config.js'],
//            'js/shim.min.js': ['../node_modules/core-js/client/shim.min.js'],
//            'js/zone.js': ['../node_modules/zone.js/dist/zone.js'],
//            'js/Rx.js': ['../node_modules/rxjs/bundles/Rx.js'],
//            'js/polyfill.min.js': ['../node_modules/js-polyfills/polyfill.min.js'],
//            '': ['../node_modules/systemjs/dist/system.src.js']
//        }))
//        .on('error', handleError)
//        .pipe(gulp.dest("./build/"))
//        .pipe(notify("move html success"));
//});
//
//gulp.task("moveJS", function () {
//    return gulp.src(['./src/js/*.js', './node_modules/core-js/client/shim.min.js', './node_modules/zone.js/dist/zone.js', './node_modules/rxjs/bundles/Rx.js', './node_modules/js-polyfills/polyfill.min.js'])
//        .on('error', handleError)
//        .pipe(gulp.dest("./build/js"))
//        .pipe(notify('move js lib success'));
//});
//
//gulp.task("moveDatePicker", function () {
//    return gulp.src([
//        './src/datePicker/**/**/**'
//    ])
//        .pipe(gulp.dest('./build/datePicker'))
//});
//
//gulp.task("dev", ['bundle', 'miniMainCSS', "moveImages", "moveHtml", "moveJS", "moveDatePicker"], function () {
//
//});
//
//gulp.task("watch", function () {
//    watch(['./src/main/**/**/**/*.js'], function () {
//        gulp.start('bundle');
//    });
//    watch(['./src/main/**/**/**/*.html', './src/index.html'], function () {
//        gulp.start('moveHtml');
//    });
//    watch(['./src/images/*.*'], function () {
//        gulp.start('moveImages');
//    });
//    watch(['./src/css/*.css'], function () {
//        gulp.start('miniMainCSS');
//    });
//    watch(['./src/js/*.js'], function () {
//        gulp.start('moveJS')
//    });
//    watch(['./src/js/datePicker/**/**/**'], function () {
//        gulp.start('moveDatePicker')
//    });
//});
//
//gulp.task("clean", function () {
//    return gulp.src(['./build/*'])
//        .pipe(clean());
//});
//
//gulp.task('default', function () {
//    console.log("please input what you run");
//});

