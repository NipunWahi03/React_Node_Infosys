const https=require('http');
const url=require('url');
const querystring=require('querystring');
var module=require('./Authenticate_User');
const server=https.createServer(function(req,res){
    var query=url.parse('http://localhost:3000/?').query;
    var name=querystring.parse(query)['username'];
    var password=querystring.parse(query)['password'];

    result=module.authenticateUser(name,password);
    res.writeHead(200,{'content-type':'text/html'});
    res.write(result);
    res.end();
})
console.log('Server run successfully');
server.listen(3000);