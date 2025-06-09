import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please Enter Your Username"],
    unique: true,
    min: 5,
  },
  name: {
    type: String,
    required: [true, "Please Enter Your Name"],
    min: 3,
  },
  address: {
    type: String,
    required: [true, "Please Enter Your Address"],
    min: 7,
  },
  password: {
    type: String,
    required: [true, "Please Enter Your Password"],
    min: 5,
  },
  designation: {
    enum: ["manager", "chef", "server", "customer"],
  },
});

const User = new mongoose.model("user", userSchema);

export default User;
