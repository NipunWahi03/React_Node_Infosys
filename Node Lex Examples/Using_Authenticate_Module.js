const https=require('http');//Creating the objetc of the inbuilt module http
var module=require('./AuthenticateModule');
const result=module.authenticate_user('admin','admin');
const server=https.createServer(function(req,res){
    res.writeHead(200, {"Content-type":"text/html"});
    res.write(result);
    res.end();

});
console.log('Request Received');
server.listen(3000);