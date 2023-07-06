const app= require("./app.js");
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://sumeet291102:sumsam291102@cluster0.upqzwrq.mongodb.net/notes?retryWrites=true&w=majority", {
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

connectDB();

app.listen(8000, "0.0.0.0" ,() => {
    console.log("listening on port 8000");
})