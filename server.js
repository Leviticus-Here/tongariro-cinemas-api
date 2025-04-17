require('dotenv').config({ path: 'environment.env' });
const express = require('express');
const connectDB = require('./config');
const helmet = require('helmet');
const cors = require('cors');

const app = express();

// Security Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

connectDB();

app.use('/movies', require('./routes/movies'));
app.use('/bookings', require('./routes/bookings'));
app.use('/users', require('./routes/users'));

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});