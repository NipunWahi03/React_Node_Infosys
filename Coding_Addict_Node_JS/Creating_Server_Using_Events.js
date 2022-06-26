//Creating a Server without using event
// const http = require("http");
// const server = http.createServer((req, res) => {
//   res.write("We are in the Server created without using Events");
//   res.end();
// });
// server.listen(5000, () => {
//   console.log("Listening to the server at the port 5000......");
// });

//Creating server using events
const http = require("http");
const server = http.createServer();

//Using the on() method to listen for the event
server.on("request", (request, response) => {
  response.write("Welcome to the server created using events");
  response.end();
});

//Server method will listen for the request event and when the request event triggers
server.listen(5000, () => {
  console.log("Listening to the server at the port 5000.....");
});
