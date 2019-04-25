var http = require('http');
var url = require('url');
var root=__dirname;
var pathjoiner = require('path');
var fs = require('fs');

var myserver = http.createServer(function(request,response)
{
	var filepath = pathjoiner.join(root,request.url);
	console.log(filepath);

var filee = fs.createReadStream(filepath);
filee.on('data',function(chunk){
	response.write(chunk)
})
filee.on('end',function(){
	response.end();
})	
});

myserver.listen(3000);