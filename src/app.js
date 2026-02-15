// server creating 
const express = require('express');


const app = express();
app.use(express.json());

const notes = []

// note = {title, description}
//post , /notes



module.exports = app