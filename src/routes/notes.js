// urls de las rutas de mi servidor, para manejar uss notas

const express = require('express');
const router = express.Router();

router.get("/notes", (req, res)=> {
    res.send('Notes from database');
});

module.exports = router;