// const fs = require("fs");
// const util = require("util")

// const { v1: uuidv1 } = require("uuid");

// const readFileAsync = util.promisify(fs.readFile);
// const writeFileAsync = util.promisify(fs.writeFile);

// class Store {
//     read() {
//         try {
//             const response = readFileAsync("db/db.json", "utf-8");
//             console.log(response)
//             return response
//         } catch (error) {
//             console.log(error)
//         }

//     }
//     write() {
//         return writeFileAsync("db/db.json", JSON.stringify(notes));
//     }
//     getNotes() {
//         return this.read().then(notes => {
//             return JSON.parse(notes);
//         });
//     }
//     addNote(note) {
//         const { title, text } = note;

//         //if statement to check if  empty
//         if (!title || !text) {
//             throw new Error("Note cannot be blank")
//         }



//         // return emptyNotes;

//         const newNote = { title, text, id: uuidv1() };

//         return this.getNotes()
//             .then(notes => [...notes, newNote])
//             .then(updatedNotes => this.write(updatedNotes))
//             .then(() => newNote)
//     }
//     removeNote(id) {
//         return this.getNotes()
//             .then(notes => notes.filter(note => note.id !== id))
//             .then(filterNotes => this.write(filterNotes));
//     }
// }

// module.exports = Store;
