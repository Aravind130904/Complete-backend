const mongoose = require('mongoose'); 


async function connectDB() {

    await mongoose.connect("mongodb+srv://backend:1309@backend.cqbntnj.mongodb.net/hello")

    console.log("DB connected successfully")

}

module.exports = connectDB;

