require("dotenv").config();

const mongoose = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/myapp");
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  image: String,
});

module.exports = mongoose.model("user", userSchema);
