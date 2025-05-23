const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const authRoutes = require('./routes/auth.js');




dotenv.config();
const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('✅ MongoDB Connected'))
.catch((err) => console.error('❌ MongoDB Connection Error:', err));

app.use('/api/auth', authRoutes);

app.listen(5000, () => {
    console.log('🚀 Server running on port 5000');
});
