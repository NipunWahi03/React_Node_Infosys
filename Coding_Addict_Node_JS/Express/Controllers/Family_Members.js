const { product_data, family_members } = require("../data");
const getFamilyMembers = (request, response) => {
  response.status(200).json({ success: true, data: family_members });
};

const insertFamilyMembers = (request, response) => {
  //Using the Middleware app.use(express.json());, we can have data in the body property of the request object
  const new_data = request.body;
  if (!new_data.id || !new_data.name || !new_data.age || !new_data.occupation) {
    return response.status(400).json({
      success: false,
      message: "Please Provide all the details, some details are missing",
    });
  }

  return response.status(200).json({ success: true, data: new_data });
};

const updateFamilyMembers = (request, response) => {
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
};

const deleteFamilyMembers = (request, response) => {
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
};

module.exports = {
  getFamilyMembers,
  insertFamilyMembers,
  updateFamilyMembers,
  deleteFamilyMembers,
};
