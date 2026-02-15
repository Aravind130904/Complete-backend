const mongoose = require('mongoose'); 


async function connectDB() {

    await mongoose.connect("your mongodb cluster connection")

    console.log("DB connected successfully")

}

module.exports = connectDB;

