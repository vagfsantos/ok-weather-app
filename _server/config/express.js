var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
module.exports = function(){
	var app = express();
	app.use(bodyParser.urlencoded({extended:true}));
	app.use(bodyParser.json());
	app.use(function(req, res, next) {
	  	res.header('Access-Control-Allow-Origin', '*');
  	    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  	    res.header('Access-Control-Allow-Headers', 'Content-Type');
	  	next();
	});
	return app;
}