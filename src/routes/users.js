// Urls donde se puede autenticar

const express = require('express');
const { route } = require('.');
const router = express.Router();

router.get('/users/singin', (req, res) =>{
    res.send('Ingresando a la app');
});

router.get('/users/singup', (req, res) =>{
    res.send("Formulario de autenticacion");
});

module.exports = router;