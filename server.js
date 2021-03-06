const express = require('express');
const app = express();
const { notes } = require('./Develop/db/db')


app.get('/api/notes', (req, res) => {
    res.json(notes);
})

app.listen(3001, () => {
    console.log('API server live')
})