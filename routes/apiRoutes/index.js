const router = require('express').Router();
const path = require('path');
const db = require('../../db/db.json');
const fs = require('fs');
// import { v4 as uuidv4 } from 'uuid';
const { v4: uuidv4 } = require('uuid');

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

// I will also need to create a push so that i can pass any notes taken 

module.exports = router;