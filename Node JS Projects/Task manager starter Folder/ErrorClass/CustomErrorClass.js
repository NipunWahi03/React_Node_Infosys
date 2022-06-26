class CustomErrorClass extends Error {
  constructor(message, statuscode) {
    super(message);
    this.statuscode = statuscode;
  }
}

const CreateNewCustomErrorObject = (msg, status) => {
  return new CustomErrorClass(msg, status);
};

module.exports = { CustomErrorClass, CreateNewCustomErrorObject };
