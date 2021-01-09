const router = require('express').Router();
const path = require('path');
const db = require('../../db/db.json');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const { findById, deleteId } = require('../../lib/halp.js');

router.get('/notes', (req, res) => {
    // console.log(req);
    // console.log(db);
    res.json(db);
});
router.post('/notes', (req, res) => {
    console.log(req.body);

    db.push(req.body);
    req.body.id = uuidv4();
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        
        JSON.stringify(db , null, 2)
    );

    res.json(req.body);
});
router.delete('/notes/:id', (req, res) => {    
    const note = findById(req.params.id, db);

    if (note) {
        deleteId(note, db);
        fs.writeFileSync(
            path.join(__dirname, '../../db/db.json'),
            JSON.stringify(db, null, 2)
        );
    } else {
        res.sendStatus(404);
    };
});

// I will also need to create a push so that i can pass any notes taken 

module.exports = router;