const mongoose = require("mongoose");
const User = require("../db/index.js");

const mongoUrl = "mongodb+srv://downlodemaster2:eAGmRemCcdSQB6LO@cluster0.1d21wvg.mongodb.net/auth_bacnkend";

async function main() {
  await mongoose.connect(mongoUrl);
}
main()
  .then(() => console.log(`Connected to Database`))
  .catch((err) => console.error("Error connecting to database", err));

const initDb = async () => {
  const newUser = new User({
    username: "ashutosh",
    email: "ashu@gmail.com",
    password: "ashu123123",
    gender: "male",
  });
  await newUser.save();

};
initDb();
