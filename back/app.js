var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var usersRouter = require('./routes/users');

var auth = require('./mid/auth');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// login page
app.use('/api/users', usersRouter);
app.use('/login/activate/*', express.static(path.join(__dirname, 'pages/login')));
app.use('/login/new', express.static(path.join(__dirname, 'pages/login')));
app.use('/login/reset/*', express.static(path.join(__dirname, 'pages/login')));
app.use('/login/recover', express.static(path.join(__dirname, 'pages/login')));
app.use('/login', express.static(path.join(__dirname, 'pages/login')));

// delete cookie
app.use('/delete-cookie', function(req, res, next) {
  res.clearCookie('jwt');
  res.redirect('/login/');
});

// home page
app.use('/home', auth, express.static(path.join(__dirname, 'pages/home')));

// redirect everything else to home page
app.use('*', function(req, res, next) {
    res.redirect('/home');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.render('custom_error', {mes: [
    "We couldn't find what you were looking for.",
    "Are you sure you got the right link?"
  ]});
  res.status(400);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500).send();
});

module.exports = app;
