var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose')
mongoose.set("debug", true);
mongoose.set("strictQuery", false);
var cors = require('cors')


var contactRouter = require('./routes/contactRoute');
var userRouter = require('./routes/userRoute');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());


//TXfa4IUVIqzJ2bz3
mongoose.connect("mongodb+srv://adarsh28dixit:TXfa4IUVIqzJ2bz3@cluster0.2egmpuu.mongodb.net/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   
},console.log('connected with mongodb'))

app.use('/contacts',  contactRouter);
app.use('/users', userRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
