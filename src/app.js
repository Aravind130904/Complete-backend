// server creating 
const express = require('express');
const noteModel = require('./models/note.model')

const app = express();
app.use(express.json());

const notes = []

// note = {title, description}
//post , /notes



module.exports = app