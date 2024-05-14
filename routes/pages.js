const pr = require('express').Router();
const path = require('path');

pr.get('/',(req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

pr.get('/notes',(req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

module.exports = pr;