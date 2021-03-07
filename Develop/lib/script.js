const fs = require("fs");
const path = require("path");


function createNewNote(body, notesArray)  {
    const note = body
    console.log(notesArray)
    notesArray.push(note)
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify( notesArray, null, 2)
    )
    return note;
}

function validateNote(note) {
    if (!note.title || typeof note.title !== 'string') {
        return false
    }
    if (!note.text || typeof note.text !== 'string') {
        return false
    }
    return true;
}

module.exports = {
    createNewNote,
    validateNote
};