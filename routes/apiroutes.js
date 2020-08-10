const router = require("express").Router();
// const Store = require("../db/store");
// const store = new Store()

router.get("/api/notes", function (req, res) {
    // console.log('here')
    // store
    //     .read()
    //     .then(data => console.log(data))
});

router.post("/notes", (req, res) => {
    // store
    //     .addNotes(req.body)
    //     .then((note) => res.json(note))
    //     .catch(err => res.status(500).json(err))

});


router.delete("/api/notes/:id", (req, res) => {
    // store
    //     .removeNote(req.params.id)
    //     .then(() => res.json({ ok: true }))
    //     .catch(err => res.status(500).json(err))


});


module.exports = router;