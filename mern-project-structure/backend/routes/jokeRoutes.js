const express = require('express');
const router = express.Router();


const { getJokeByTopic } = require('../controllers/jokeController');

router.get('/:topic', getJokeByTopic);



module.exports = router;
