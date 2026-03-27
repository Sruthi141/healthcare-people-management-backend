require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const personRoutes = require('./routes/person.routes');

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/person', personRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
