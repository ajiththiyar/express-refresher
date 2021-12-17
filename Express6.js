// 1. Express is usually used for two purposes : {API(Application Programming Interface), SSR(Server Side Rendering)}
// API uses res.json() and SSR used res.render()
// API sends json data and SSR sends HTML and CSS templates

const express = require('express')
const app = express();
const {products, people} = require('./data');

// Adding an anchor tag that has the url of '/api/products/query' and
// send some in url params as well
app.get('/', (req, res) =>{
    res.send(`<h1>Home Page</h1> <br/> <a href='/api/products/query?name="Ola amigo"&Id="itsAllGood"'>In url params</a>
    <br/> <a href='/api/v1?search="albany"&limit="3"'>In url params 2</a>`)

})

// An endpoint that shows the req.query which is an actual object
// that show the sent params in url
app.get('/api/products/query', (req, res)=>{
    console.log(req.query);
    res.send(`Hello World ${req.query.name} ${req.query.Id}`);
})

app.get('/api/v1', (req, res)=>{
    const { search, limit } = req.query
  let sortedProducts = [...products]
  console.log(search + " " + limit)
  

//  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
        console.log(product.name)
      return product.name.startsWith(String(search))
   })
   console.log(sortedProducts)
//  }
//   if (limit) {
//     sortedProducts = sortedProducts.slice(0, Number(limit))
//   }
//   if (sortedProducts.length < 1) {
//     // res.status(200).send('no products matched your search');
//     return res.status(200).json({ sucess: true, data: [] })
//   }
  res.status(200).json(sortedProducts)
})

app.all('*', (req, res) =>{
    res.status(404).send("<h1>Resource not found</h1>")
})




app.listen(5000, ()=>{
    console.log("Server is listening on port 5000....");
})