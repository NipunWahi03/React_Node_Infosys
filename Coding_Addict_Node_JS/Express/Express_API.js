const express = require("express");
const app = new express();

app.get("/api/v1/data", (request, response) => {
    response.type('json')
  response.json([
    { name: "Nipun", age: 21 },
    { name: "Palak", age: 20 },
  ]);
});
app.listen(5000, () => {
  console.log("Listening to the server at port 5000....");
});
