const mongoose = require("mongoose");

const connection_database=(url)=>{
   return mongoose
  .connect(url)
}

module.exports=connection_database