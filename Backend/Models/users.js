var mongodb = require("mongoose");

var Schema = mongodb.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String
});

var user_schema = mongodb.model("users", Schema);

module.exports = user_schema;
