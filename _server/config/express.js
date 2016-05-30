var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
module.exports = function(){
	var app = express();
	app.use(bodyParser.urlencoded({extended:true}));
	app.use(bodyParser.json());
	app.use(function(req, res, next) {
	  res.setHeader("Access-Control-Allow-Origin", "*");
	  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	  next();
	});
	return app;
}