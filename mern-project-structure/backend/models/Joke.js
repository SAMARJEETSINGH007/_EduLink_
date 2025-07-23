const mongoose = require('mongoose');


const jokeSchema = new mongoose.Schema({
  topic: String,
  text: String,
});


module.exports = mongoose.model('Joke', jokeSchema);
