const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const usersRouter = require('./routes/users');

const auth = require('./mid/auth');

const app = express();

// const cors = require('cors');
// app.use(cors());

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
app.use('/login/verify/*', express.static(path.join(__dirname, 'pages/login')));
app.use('/login/new', express.static(path.join(__dirname, 'pages/login')));
app.use('/login/reset/*', express.static(path.join(__dirname, 'pages/login')));
app.use('/login/recover', express.static(path.join(__dirname, 'pages/login')));
app.use('/login', express.static(path.join(__dirname, 'pages/login')));

// delete cookie, used for logging out of the current session
app.use('/delete-cookie', function(req, res, next) {
  res.clearCookie('jwt');
  res.redirect('/login/');
});

// home page
app.use('/home', auth, express.static(path.join(__dirname, 'pages/home')));

// redirect the home route to /home
app.get('/', function(req, res, next) {
    res.redirect('/home');
});

// catch 404s and display the 404 error page
app.use('*', function(req, res, next) {
  res.render('custom_error', {
    title: "Page not found | Sign",
    header: [
      "Snap! ",
      "It\'s ",
      "a ",
      "404 ",
      ":("
    ],
    message: "The page you\'re looking for doesn\'t seem to exist, or some other error may have occurred. Make sure you put in the correct URL.",
    link: {
      text: "Go back home",
      url: "/home/"
    }
  });
  res.status(404);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  console.log(err);

  // render the error page
  res.status(err.status || 500).send();
});

module.exports = app;
