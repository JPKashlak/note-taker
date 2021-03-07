
const router = require('express').Router();
const { createNewNote, validateNote } = require('../../lib/script');
const notes = require("../../db/db.json");


router.get('/api/notes', (req, res) => {
    res.json(notes);
})

router.get('/notes', (req, res) => {
    res.json(notes);
})

router.post('/api/notes', (req, res) => {
    req.body.id = notes.length.toString();

    if (!validateNote(req.body)) {
        res.status(400).send('Please provide a proper title and text for your note!');
    }
    else {
        const note = createNewNote(req.body, notes)
        res.json(note)
    }

})

module.exports = router