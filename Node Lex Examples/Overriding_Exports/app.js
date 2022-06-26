const https=require('http');
var greetings_module=require('./greetings');
var result=greetings_module.greetings();
const server=https.createServer(function(req,res){
    res.write(result);
    res.end();
})
console.log('Server Running');
server.listen(3000);