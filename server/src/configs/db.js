// const mongoose = require("mongoose");
// require("dotenv").config();

// let connect = () => {
//   return mongoose.connect("mongodb://127.0.0.1:27017/newbus");
// };

// module.exports= connect;

const mongoose = require("mongoose");

let connect = () => {
  return mongoose.connect(
    "mongodb+srv://singhadhiraj792:123adhiraj@cluster0.tdlqrcj.mongodb.net/Tripzy?retryWrites=true&w=majority&appName=Cluster0",
    { useNewUrlParser: true }
  );
};

module.exports = connect;


