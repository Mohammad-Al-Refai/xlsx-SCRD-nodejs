const express = require('express');
const ef = require('express-fileupload');
const app=express()
const fs=require("fs")
const bp=require("body-parser")
app.use(bp.json())
app.use(ef())



app.post("/upload",(req,res)=>{

    let file=req.files.file
    file.mv("file.mp4",(err)=>{
        console.log(err)
    })
    // file.mv('filename.jpg', function(err) {
    //     if (err)
    //       return res.status(500).send(err);
    
    //     res.send('File uploaded!');
    //   });
})

app.listen(3000)