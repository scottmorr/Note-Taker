const router = require("express").Router();
const store = require("../db/store");

router.get("/api/notes", function (req, res) {
    store
        .getNotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err))
});

router.post("/api/notes", (req, res) => {
    store 
    .addNotes(notes)
    var newNotes = req.body
    var noteTaker = req.params.notes
   
    notes.push(db.json);

    res.json(newNotes);
        
});


router.delete("/api/notes/:id", (req, res) => {
    store
    removeNote(id)
    let id = ObjectID(req.params.id);
    dbase.collection('note').deleteOne(id, (err, result) => {
       
        if(err) {
          throw err;
        }
  
        res.send('note deleted');

        
});

// app.delete('/name/delete/:id', (req, res, next) => {
//     let id = ObjectID(req.params.id);

//     dbase.collection('name').deleteOne(id, (err, result) => {
//       if(err) {
//         throw err;
//       }

//       res.send('user deleted');
    });








// app.post('/', function (req, res) {
//     res.send('POST request to the homepage')
//   })



// calling these functions
getNotes()
addNote(note)
removeNote(id)