const express = require('express');
const app = express();
const router = require('./routes/people')
const port = 5000;

// is used when you get sent form data from a site and you need to parse it for appropriate use.
//app.use(express.urlencoded({extended: false}))

// Parse the data from the api to the website
//app.use(express.json())


// This can be used to separate out the code
app.use("/", router);



app.listen(port, () => {
    console.log(`Server has started on port ${port}`)
})