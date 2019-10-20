let createError = require('http-errors');
let express = require('express');
let path = require('path');
//var cookieParser = require('cookie-parser');
let logger = require('morgan');
let bodyParser = require('body-parser');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

let app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

app.use(logger('dev'));
// app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);


require('./bootstrap/init')(app);
require('./routes')(app);
require('./services/errorHandler')(app);


module.exports = app;
