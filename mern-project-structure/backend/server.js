const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const jokeRoutes = require('./routes/jokeRoutes');

const app = express();
app.use(cors());

// Only allow React app running at localhost:5173
// app.use(cors({
//   origin: 'http://localhost:5173'
// }));

app.use(express.json());

connectDB();

app.use('/joke', jokeRoutes);




app.listen(3001, () => console.log('Server running on http://localhost:3001'));