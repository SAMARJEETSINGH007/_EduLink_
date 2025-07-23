const Joke = require('../models/Joke');

const getJokeByTopic = async (req, res) => {
  const topic = req.params.topic.toLowerCase();
  const joke = await Joke.findOne({ topic });

  if (joke) {
    res.json({ joke: joke.text });
  } else {
    res.json({ joke: 'No joke found for this topic 😅' });
  }
};

module.exports = { getJokeByTopic };