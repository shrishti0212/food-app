const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const authMiddleware = require('./middleware/authMiddleware');

dotenv.config();
const app = express();

const allowedOrigins = [
  'https://nomnomnow-shrishti-mishras-projects.vercel.app',
  'http://localhost:3000',
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is live and working 🚀");
});

app.use('/auth', authRoutes);

app.get('/auth/protected', authMiddleware, (req, res) => {
  res.json({ msg: `Welcome, ${req.user.name}` });
});

mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log(`Server running on port ${process.env.PORT}`)
    );
  })
  .catch((err) => console.log('MongoDB connection error:', err));
