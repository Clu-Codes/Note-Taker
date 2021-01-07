const express = require('express');
const PORT = process.env.PORT || 3100;
const { db } = require('./Develop/db/db.json');
const fs = require('fs');
const app = express();
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.static('Develop'));

app.use('/', htmlRoutes);


// app.get('/api/db', (req, res) => {
//    res.send('Hello!');
// });

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
