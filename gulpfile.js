let gulp = require('gulp');

// run by "gulp message"
gulp.task('message', function () {
    return console.log('gulp is running')
});

// run by "gulp"
gulp.task('default', function () {
    return console.log('default task')
});