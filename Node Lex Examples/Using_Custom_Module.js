const https=require('http'); //To Use the module whether it is pre defined or the custom,we need to use the method as require and pass the name of the module to be imported 
var module=require('./Custom_Module_Folder'); //To Use the module whether it is pre defined or the custom,we need to use the method as require and pass the name of the module to be imported 
const result=module.authenticateUser("nipun","admin"); //Calling the function of the Custom Module 
const server=https.createServer(function(request,response){ //Creating a server
    response.writeHead(200,{"Content-type":"text/html"}); //Type of content and the header information to be passed if required.
    response.write("<html><body><h1>Hi"+result+"<h1></body></html>");// To display the content on the web browser
    response.end()//This is used to sending the response to the browser that the response process has been completed.
})
console.log('Request Received');
server.listen(3000); //Listen to the server on port 3000