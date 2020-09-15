var express = require("express")
var router = express.Router();

//* GET homepage
router.get("/", (req, res, next) => {
    res.render("about", {
        title: "About"
    })
})

module.exports = router