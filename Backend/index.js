var express = require("express");
var path = require("path");
var mongodb = require("mongoose");
var user_schema = require("./Models/users");

const PORT = 5001;

app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongodb
  .connect("mongodb://localhost:27017/KEC")
  .then(() => {
    console.log("MongoDB Connection Successful");
  })
  .catch((err) => {
    console.log("Check Your Connection String");
  });

// app.get("/", (req, res) => {
//   res.send("WELCOME");
// });

// app.get("/js", (req, res) => {
//   res.json({ server: "welcome", url: "localhost", port: 3001 });
// });

// app.get("/page1", (req, res) => {
//   console.log(path.join(__dirname, "/public/index.html"));
//   res.sendFile(path.join(__dirname, "/public/index.html"));
// });

// app.get("/page2", (req, res) => {
//   res.sendFile(path.join(__dirname, "/public/new.html"));
// });

app.post("/user", (req, res) => {
  // var {firstName , lastName, email} = req.body
  try {
    // var newUser = new user_schema({
    //   firstName: req.body.firstName,
    //   lastName: req.body.lastName,                this is another type
    //   email: req.body.email,
    // });

    var newUser = new user_schema(req.body);
    newUser.save();
    console.log(`User ${req.body.firstName} added successfully`);
    res.status(200).send(`User ${req.body.firstName} added successfully`);
  } catch (err) {
    console.log(err);
  }
});

app.get("/getuser", async (req, res) => {
  try {
    var allSignUpRecord = await user_schema.find();
    res.json(allSignUpRecord);
    console.log(allSignUpRecord);
  } catch (err) {
    console.log("canot ablr to read the records");
  }
});

app.post("/login", async (req, res) => {
  try {
    var { email, password } = req.body;
    console.log(email, password);
    var existinguser = await user_schema.findOne({ email: email });
    console.log(existinguser);
    if (existinguser) {
      if (existinguser.password != password) {
        console.log("Invalid Credentials");
        res.send("Invalid Credentials");
      } else {
        console.log("Login Succesful");
        res.status(200).json({ message: "Login Succesful", login: true });
      }
    } else {
      console.log("No UserId is Found , Create an Accound");
      res.send("No UserId is Found , Create an Accound");
    }
  } catch (err) {
    console.log(err);
  }
});

app.listen(PORT, () => {
  console.log("server started");
});
