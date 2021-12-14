const { application } = require('express');
const express = require('express')
const path = require('path')
const app = express()

// 2. So in express, to solve the problem 1. that occured to us
// we use express.static which usually exposes the public folder
// but can be any thing, where the dependencies which are static and not dynamic can be exposed to public
app.use(express.static('./public'))

// 1. When we use sendFile and send the html file 
// what happens is that the dependency style.css is not available to the browser
app.get('/', (req, res) =>{
res.status(200).sendFile(path.join(__dirname,'./Page/index.html'))
});


app.all('*', (req, res)=>{
    res.status(404).send('<h1>Resource not Found</h1>')
})

app.listen(5000, () =>{
    console.log("Server started")
})