// 1. Express is usually used for two purposes : {API(Application Programming Interface), SSR(Server Side Rendering)}
// API uses res.json() and SSR used res.render()
// API sends json data and SSR sends HTML and CSS templates

const express = require('express')
const app = express();
const {products, people} = require('./data');


app.get('/', (req, res) =>{
   
    res.send("<h1>Home Page</h1> <br/> <a href='/api/products'>Products</a>")
})
// trying to send the product object without the description.
app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
       const {id, name , image} = product;
       return {id, name, image}
    })
    res.json(newProducts);
})

app.all('*', (req, res) =>{
    res.status(404).send("<h1>Resource not found</h1>")
})




app.listen(5000, ()=>{
    console.log("Server is listening on port 5000....");
})