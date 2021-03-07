const express = require('express');
const app = express();
const { notes } = require('./Develop/db/db');
const PORT = process.env.PORT || 3001;
const htmlRoutes = require("./Develop/routes/htmlRoutes/index");
app.use('/', htmlRoutes);
// const apiRoutes = require('./Develop/routes/apiRoutes/index');
// app.use('/api', apiRoutes);
const fs = require('fs');
const path = require('path');




function createNewNote(body, notesArray)  {
    const note = body
    notesArray.push(note)
    fs.writeFileSync(
        path.join(__dirname, './Develop/db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
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

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.listen(3001, () => {
    console.log(`Server is live on PORT ${PORT}`)
})