// server creating 
const express = require('express');
const noteModel = require('./models/note.model')
const multer = require('multer')




const app = express();
app.use(express.json());

const notes = []


const upload = multer({
    storage: multer.memoryStorage()
})

// note = {title, description}
//post , /notes



app.post('/notes', async (req, res) => {

    const data = req.body;
    await noteModel.create({
        title: data.title,
        description: data.description

    })
    res.status(201).json({
        message: "Note created successfully"
    })
})

app.get('/notes', async (req, res) => {

    const notes = await noteModel.find()  // give data in array format 

    res.status(200).json({
        message: "Notes fetched successfully",
        notes: notes
    })

})


app.delete('/notes/:id', async (req, res) => {

    const id = req.params.id;

    await noteModel.findByIdAndDelete({
        _id: id
    })
    res.status(200).json({
        message: "Note deleted successfully"
    })

})


app.patch('/notes/:id', async (req, res) => {

    const id = req.params.id;
    const describtion = req.body.describtion;

    await noteModel.findOneAndUpdate({
        _id: id
    }, {
        description: describtion
    })
     res.status(200).json({
        message: "Note updated successfully"
    })

})


app.post('/create-post', upload.single("image"), async (req, res) => {

    console.log(req.body)
    console.log(req.file)

})

module.exports = app