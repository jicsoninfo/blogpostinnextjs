import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
  } catch (error) {
    throw new Error("Connection failed!");
  }
};

console.log(connect);

export default connect;
