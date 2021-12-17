const logger = (req, res, next) =>{
    const reqe = req.method;
    const path = req.url;
    const dated = new Date().getFullYear();

    console.log(reqe + " :" + path + " :" + dated)
    next()
}

module.exports = logger;