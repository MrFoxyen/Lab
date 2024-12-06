import gulp from 'gulp';
import * as sass from 'sass'; // Importing SASS
import gulpSass from 'gulp-sass'; // Importing gulp-sass
import browserSync from 'browser-sync';
import imagemin from 'gulp-imagemin';

const sassCompiler = gulpSass(sass); // Initializing SASS

// Task for CSS
gulp.task('css', function () {
    return gulp.src('app/css/**/*.css') // Source path for CSS files
        .pipe(sassCompiler().on('error', sassCompiler.logError))
        .pipe(gulp.dest('dist/css')) // Destination folder for compiled CSS files
        .pipe(browserSync.stream());
});

// Task for HTML
gulp.task('html', function () {
    return gulp.src('app/**/*.html') // Source path for HTML files
        .pipe(gulp.dest('dist')) // Destination folder for HTML files
        .pipe(browserSync.stream());
});

// Task for JS
gulp.task('js', function () {
    return gulp.src('app/js/**/*.js') // Source path for JS files
        .pipe(gulp.dest('dist/js')) // Destination folder for JS files
        .pipe(browserSync.stream());
});

// Task for Images
gulp.task('images', function () {
    return gulp.src('app/images/**/*', { encoding: false }) // Source path for images
        .pipe(imagemin()) // Using imagemin for optimization
        .pipe(gulp.dest('dist/images')); // Destination folder for images
});

gulp.task('copy-json', function () {
    return gulp.src('app//data/**/*.json') // Шлях до JSON-файлів
      .pipe(gulp.dest('dist/data')) // Копіювання в dist
      .pipe(browserSync.stream()); // Оновлення сторінки
  });
  

// Task for BrowserSync Server
gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: 'dist' // Вказати кореневу папку
        },
        port: 8080 // Встановити порт 8080
    });

    // Watch for changes and run the respective tasks
    gulp.watch('app/css/**/*.css', gulp.series('css')); // Watch CSS files
    gulp.watch('app/**/*.html', gulp.series('html')); // Watch HTML files
    gulp.watch('app/js/**/*.js', gulp.series('js')); // Watch JS files
    gulp.watch('app/data/**/*.json', gulp.series('copy-json', function (done) {
        browserSync.reload();
        done();
    }));
});


// Default Task
gulp.task('default', gulp.series(
    gulp.parallel('html', 'css', 'js', 'images', 'copy-json'), // Run all tasks
    'serve' // Start the server
));
