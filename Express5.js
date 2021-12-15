// 1. Express is usually used for two purposes : {API(Application Programming Interface), SSR(Server Side Rendering)}
// API uses res.json() and SSR used res.render()
// API sends json data and SSR sends HTML and CSS templates

const express = require('express')
const app = express();
const {products, people} = require('./data');


app.get('/', (req, res) =>{
    i=1
    res.send(`<h1>Home Page</h1> <br/> <a href='/api/products/${i}'>Products ${i}</a>`)

})
// Filtering and sending the requesting object using request parameters
app.get('/api/products/:productId', (req, res) => {
    const {productId} = req.params;
    const Product = products.filter((product) => product.id===Number(productId))
    if(Product.length===0){
        return res.status(404).send('Product Does Not Exist');
    }
    res.json(Product);
})


app.get('/api/products/:productId/review/:reviewId',(req, res) => {
    console.log(req.params);
    const {reviewId, productId} = req.params;
    res.send('Hello World'+reviewId+ productId)

})

app.all('*', (req, res) =>{
    res.status(404).send("<h1>Resource not found</h1>")
})




app.listen(5000, ()=>{
    console.log("Server is listening on port 5000....");
})