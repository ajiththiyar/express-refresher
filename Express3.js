// 1. Express is usually used for two purposes : {API(Application Programming Interface), SSR(Server Side Rendering)}
// API uses res.json() and SSR used res.render()
// API sends json data and SSR sends HTML and CSS templates






const express = require('express')
const app = express();


app.use(express.static('./public'))


app.get('/', (req, res) =>{
    res.send("ola amigos")
})

app.all('*', (req, res) =>{
    res.status(404).send("<h1>Resource not found</h1>")
})




app.listen(5000, ()=>{
    console.log("Starting the server");
})