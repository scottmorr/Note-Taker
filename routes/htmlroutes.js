var path = require("path");
const router = require("express").Router();
const store = require("../db/store");


router.get('/notes', function (req, res) {
    console.log("notes");
    res.sendFile(path.join(__dirname , "../public/notes.html"))               
});

router.get('*', function (req, res) {
    console.log("htmlroutes *");
    res.sendFile(path.join(__dirname , "../public/index.html"))              
});

module.exports = router;


