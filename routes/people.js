const express = require('express');
const router = express.Router();
// Express router is used to decouple the code and make it reusable in multiple apis if needed
router.get("/", (req, res) => {
    res.send("ola amigo vendo?")
})

router.get("/vendo", (req, res) => {
    res.send("como estas, vendo amigo?")
})

module.exports = router;