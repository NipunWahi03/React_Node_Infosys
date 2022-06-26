
var http=require('http');
var server=http.createServer(
    function(request,response){
        response.write("<html><body><h1>Hello, This is first ever server created using node http module</h1></body></html>");
        response.end();
    }
);
server.listen(3000);