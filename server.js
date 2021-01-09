const express = require('express');
const PORT = process.env.PORT || 3100;
const db = require('./db/db.json');
const fs = require('fs');
const app = express();
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');
const path = require('path');

console.log(__dirname);
app.use(express.static(__dirname + '/public'));

// required to parse post data
app.use(express.urlencoded({ extend: true }));
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);



// app.get('/api/db', (req, res) => {
//    res.send('Hello!');
// });

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
