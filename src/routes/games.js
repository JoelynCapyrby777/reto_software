const express = require('express');
const router = express.Router();
const { createGame } = require('../controllers/gamesController');


router.post('/', createGame);

module.exports = router;