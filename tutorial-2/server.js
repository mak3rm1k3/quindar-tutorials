'use strict';
var express = require('express');
var fs = require('fs');
var ROOT_DIR = __dirname + '/';
ROOT_DIR = fs.realpathSync(ROOT_DIR);
if (!fs.existsSync(ROOT_DIR)) {
	console.log('Error: cannot find working directory: ' + ROOT_DIR);
	exit();
}
function handleRequest(req, res){
    response.end('It Works!! Path Hit: ' + request.url);
}
var app = express();
var securePort = process.env.SECUREPORT || 3001;
app.listen(securePort, function() {
	console.log('Node server started @ http://localhost:' + securePort);
	console.log('Press Ctrl + c for server termination');
});
