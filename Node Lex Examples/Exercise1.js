var https=require('http'); //Require is used to use the module named as http with the object named as https,it can be any name
var server=https.createServer(
    function(request,response){
        response.write("<html><h1>Hello! Welcome to Node JS</h1></html>");
        response.end();
    }
);
server.listen(3000);