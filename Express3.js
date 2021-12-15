// 1. Express is usually used for two purposes : {API(Application Programming Interface), SSR(Server Side Rendering)}
// API uses res.json() and SSR used res.render()
// API sends json data and SSR sends HTML and CSS templates

const express = require('express')
const app = express();


app.get('/', (req, res) =>{
    // res.json is used in API's to send javascript object notation.
    res.json([{kkonaW: "Allo Kkomrade"}, {name: "Jugni"}])
})

app.all('*', (req, res) =>{
    res.status(404).send("<h1>Resource not found</h1>")
})




app.listen(5000, ()=>{
    console.log("Server is listening on port 5000....");
})