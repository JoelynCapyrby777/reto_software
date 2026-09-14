const express = require('express');
const router = express.Router();
const { getPlayers , createPlayer} = require('../controllers/playersController');

router.get('/', getPlayers);
router.post('/', createPlayer);

module.exports = router;