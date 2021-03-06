const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const { notes } = require('./Develop/db/db')


app.get('/api/notes', (req, res) => {
    res.json(notes);
})

app.post('/api/notes', (req, res) => {
    console.log(req.body)
    res.json(req.body)
})

app.listen(3001, () => {
    console.log('API server live')
})