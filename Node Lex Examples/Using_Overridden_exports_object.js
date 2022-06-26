const https=require('http');
var overidden_module=require('./Overriding_Exports');
var result=overidden_module('admin','password');
var server=https.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/html'});
    res.write(result);
    res.end();
})
console.log('Request Received');
server.listen(3000);