const notes = require("../../db/db.json");
const fs = require("fs");
const path = require("path");




app.get('/api/notes', (req, res) => {
    res.json(notes);
})

app.post('/api/notes', (req, res) => {
    req.body.id = notes.length.toString();

    if (!validateNote(req.body)) {
        res.status(400).send('Please provide a proper title and text for your note!');
    }
    else {
        const note = createNewNote(req.body, notes)
        res.json(note)
    }

})