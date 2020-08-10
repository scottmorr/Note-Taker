const router = require("express").Router();
const Store = require("../db/store");
const store = new Store()

router.get("/notes", function (req, res) {
    store
        .getNotes()
        .then(data => res.json(data))
        .catch(err =>console.log(err))
});

router.post("/notes", (req, res) => {
    store
        .addNote(req.body)
        .then((note) => res.json(note))
        .catch(err => console.log(err))

});


router.delete("/notes/:id", (req, res) => {
    store
        .removeNote(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch(err => res.status(500).json(err))


});


module.exports = router;