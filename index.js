const express = require("express")
const app = express();
const multer = require("multer");
const upload = multer();

app.listen(3000,(()=>{
    console.log("runing server")
}));

app.post('/pdf',upload.single('image'),(req,res)=>{
    if (req.file) {
        console.log("Image received:", req.file);
        res.send("Image received successfully!");
    } else {
        res.status(400).send("No image received!");
    }
})