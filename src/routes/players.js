const express = require('express');
const router = express.Router();
const { createPlayer} = require('../controllers/playersController');


router.post('/', createPlayer);

module.exports = router;