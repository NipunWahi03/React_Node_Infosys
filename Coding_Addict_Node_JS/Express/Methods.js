const express = require("express");
const app = new express();
const { product_data, family_members } = require("./data");
app.use(express.urlencoded({ extended: false })); //Parsing the form data
app.use(express.json()); //Parsing the JSON

//Get Method To fetch the data from the server
app.get("/api/getFamilyMembers", (request, response) => {
  response.status(200).json({ success: true, data: family_members });
});

//POST Method to add/insert the data to the server
app.post("/api/getFamilyMembers", (request, response) => {
  //Using the Middleware app.use(express.json());, we can have data in the body property of the request object
  const new_data = request.body;
  console.log(new_data);
  if (!new_data.id || !new_data.name || !new_data.age || !new_data.occupation) {
    return response.status(400).json({
      success: false,
      message: "Please Provide all the details, some details are missing",
    });
  }

  return response.status(200).json({ success: true, data: new_data });
  // return response.json('Hello World')
});

//PUT Method is used to update the value of the data in the server
app.put("/api/getFamilyMembers/:id", (request, response) => {
  const { id } = request.params;
  const { name } = request.body;
  const member = family_members.find((data) => data.id === Number(id));
  if (!member) {
    return response.status(404).json({
      success: false,
      msg: "No Family Member is there of the mentioned id",
    });
  }
  const new_family_members = family_members.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  return response.json({ success: true, data: new_family_members });
});

//Delete Method is used to delete the Data from the Server
app.delete("/api/getFamilyMembers/:id", (request, response) => {
  const { id } = request.params;
  const member = family_members.find((data) => data.id === Number(id));
  if (!member) {
    return response.status(404).json({
      success: false,
      msg: "No Family Member is there of the mentioned id",
    });
  }
  const new_family_members = family_members.filter(
    (member) => member.id !== Number(id)
  );
  return response.status(200).json({ success: true, data: new_family_members });
});
app.listen(5000, (request, response) => {
  console.log("Listening to the server at port 5000....");
});
