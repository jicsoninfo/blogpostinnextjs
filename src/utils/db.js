import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/nextblog'); //mongodb://localhost:27017
  } catch (error) {
    throw new Error("Connection failed!");
  }
};

console.log(connect);

export default connect;
