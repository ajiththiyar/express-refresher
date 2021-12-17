const express = require('express');
const app = express();
const logger = require('./utils/logger');
const port = 5000;

// Uncomment to use logger on all of the apis and run them before 
//app.use(logger);


app.get('/', logger,  (req, res, next)=>{
    res.send("como estas");
})


app.get('/api', (req, res)=>{
    res.send("Get API")
})

app.listen(port, () => {
    console.log(`Server has started on port ${port}`)
})