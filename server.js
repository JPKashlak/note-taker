const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const { notes } = require('./Develop/db/db')

function createNewNote(body, notesArray)  {
    const note = body
    notesArray.push(note)
    fs.writeFileSync(
        path.join(__dirname, './Develop/db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    )

    return note;
}

app.get('/api/notes', (req, res) => {
    res.json(notes);
})

app.post('/api/notes', (req, res) => {
    req.body.id = notes.length.toString();

    const note = createNewNote(req.body, notes)

    res.json(note)
})

app.listen(3001, () => {
    console.log('API server live')
})