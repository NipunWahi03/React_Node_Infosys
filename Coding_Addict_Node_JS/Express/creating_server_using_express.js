const express = require("express"); //To import the express
const app = express(); //Creating instance of express

// Express has many functions which can be used with the instance of the express created.
// app.get() –To get the data from the server-default behaviour of the browser
// app.post()--To insert the data
// app.put()--To update the data
// app.delete()--To delete the data
// app.all()--To do all the things which will be required if the particular request doesn’t matches
// app.use()--For middleware
//app.listen()--To listen to the server

app.get("/", (req, res) => {
  res.status(200).send("<h1>Home Page of the server created using Express</h1>");
});

app.get("/about", (req, res) => {
  res.status(200).send("<h1>About Page of the server created using Express</h1>");
});

app.all("*", (req, res) => {
  res.status(404).send("Page not found");
});

app.listen(5000, () => {
  console.log("Listening to the server at port 5000...");
});
