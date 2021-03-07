const express = require('express');
const app = express();
const { notes } = require('./Develop/db/db');

const PORT = process.env.PORT || 3001;
const apiRoutes = require('./Develop/routes/apiRoutes/index');
const htmlRoutes = require("./Develop/routes/htmlRoutes/index");
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Server is live on PORT ${PORT}`)
})