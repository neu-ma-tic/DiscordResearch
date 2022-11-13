const mongoose = require("mongoose");
const config = require("./config");

mongoose.connect("mongodb+srv://PelerKambing:tgMF@3#q*t7tFBc@cluster0.qidft.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("[✅ DataBase] Connected!");
});
module.exports = mongoose;
