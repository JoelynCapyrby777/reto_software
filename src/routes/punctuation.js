const express = require('express');
const router = express.Router();
const { createPuntuacion} = require('../controllers/punctuationController');


router.post('/', createPuntuacion);

module.exports = router;