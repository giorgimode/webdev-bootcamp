var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/todo-api');

// this enables 'promise' chaining, instead of using function callbacks
mongoose.Promise = Promise;

module.exports.Todo = require("./todo");