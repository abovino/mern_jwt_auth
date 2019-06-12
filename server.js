const express = require('express');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 3000;
const app = express();

// Connect db
// connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API'))

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));


app.listen(PORT, (req, res) => console.log(`Listening on localhost:${PORT}`))
