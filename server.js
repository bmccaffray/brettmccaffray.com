'use strict';

var express = require('express');
var http = require('http');

var app = express();

app.use(express.static(__dirname + '/build'));

var server = http.createServer(app);

server.listen(3000, function(){
	console.log('server running...');
});