const fs = require("fs");
const utils = require("utils")
const uuidv1 = require("uuid/v1");

const readFileAsync = utils.promisify(fs.readFile);
const writeFileAsync = utils.promisify(fs.writeFile);

class Store {
    read() {
        return readFileAsync("db/db.json", "utf-8");
    }
    write() {
        return writeFileAsync("db/db.json", JSON.stringify(notes));
    }
    getNotes() {
        return this.read().then(notes => {
            let parsedNotes;
            try {
                parsedNotes = [].concat(JSON.parse(notes))
            } catch (err) {
                parsedNotes = [];
            }

            return parsedNotes;
        });
    }
    addNote(note) {
        const { title, text } = note;

        //if statement to check if  empty
        const newNote = { title, text, id: uuidv1() };

        return this.getNotes()
        .then(notes => [...notes, newNote])
        .then(updatedNotes => this.write(updatedNotes))
        .then(() => newNote)
    }
    removeNote(id) {
        return this.getNotes()
        .then(notes => notes.filter(note => note.id !== id))
        .then(filterNotes => this.write(filterNotes));
    }
}

module.exports = new Store;
