// server creating 
const express = require('express');
const noteModel = require('./models/note.model')
const multer = require('multer')
const uploadFile = require('./services/storage.service')
const postModel = require('./models/post.model')
const authRoutes = require('./routes/auth.routes')
const postroutes = require('./routes/post.routes')
const cookiesParser = require('cookie-parser') 




const app = express();
app.use(express.json());
app.use(cookiesParser());




/*
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

    

    const result = await uploadFile(req.file.buffer)
    
    const post = await postModel.create({
        image: result.url,
        caption: req.body.caption
    })
    return res.status(201).json({
        message: "Post created successfully",
        post
    })

})
*/


app.use("/api/auth", authRoutes)
app.use("/api/posts", postroutes)

module.exports = app