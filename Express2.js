const { application } = require('express');
const express = require('express')
const path = require('path')
const app = express()

// 2. So in express, to solve the problem 1. that occured to us
// we use express.static which usually exposes the public folder
// but can be any thing, where the dependencies which are static and not dynamic can be exposed to public
// app.use is used for middleware
//app.use(express.static('./public'))

// 1. When we use sendFile and send the html file 
// what happens is that the dependency style.css is not available to the browser
app.get('/', (req, res) =>{
//res.status(200).sendFile('./index1.html')
res.status(200).sendFile(path.resolve(__dirname,'./public/index1.html'))
// uncomment this(16) and comment line no(10) to see how this works.
});
// 3. Technically index1.html is also a static file so it should also go into the public directory
// 4. one more thing to learn is that if you put index.html in public it get called automatically
// and the code you put in here wont work, so rename it to index1 or something else in public folder


app.all('*', (req, res)=>{
    res.status(404).send('<h1>Resource not Found</h1>')
})

app.listen(5000, () =>{
    console.log("Server started")
})