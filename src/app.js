const express = require('express');
const path = require('path');

// App
const app = express();

// Load routes
// const indexRoutes = require('./routes/index');
// app.use('/', indexRoutes);

app.use(express.static(path.join(__dirname, '/../public')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/../public/index.html'))
});

module.exports = app;