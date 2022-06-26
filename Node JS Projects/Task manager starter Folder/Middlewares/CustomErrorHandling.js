const { CustomErrorClass } = require("../ErrorClass/CustomErrorClass");
const CustomErrorHandling = (err, req, res, next) => {
  if (err instanceof CustomErrorClass) {
    console.log(err.statuscode, err.message);
    return res.status(err.statuscode).json({ msg: err.message });
  }
  res
    .status(500)
    .json({ msg: "Something went wrong, Please try again later...." });
};
module.exports = CustomErrorHandling;
