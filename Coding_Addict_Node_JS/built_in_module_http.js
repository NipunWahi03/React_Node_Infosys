const http = require("http");
const server = http.createServer((req, res) => {
  //console.log(req)
  if (req.url === "/") {
    res.write(
      "Welcome to our first ever created server. You are on the home page of the project."
    );
    res.end();
  } else if (req.url === "/about") {
    res.write("You are on to the about page of the project.");
    res.end();
  } else {
    res.write(`<h1>OOPS!!!</h1>
        <p>You are on the page which does not exist. Please click on below to go to the home page.</p>
        <a href='/'>Click Here!!</a>`);
  }
});
server.listen(8000);
