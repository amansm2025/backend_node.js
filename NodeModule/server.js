const express = require('express')
const app = express();
const db = require('./db');

require('dotenv').config();

const bodyParser = require('body-parser'); 
app.use(bodyParser.json()); // req.body
const PORT = process.env.PORT || 3000;

// Middleware Function

app.get('/', function (req, res) {
    res.send('Welcome to our Hotel');
})

// Import the router files
const personRoutes = require('./Routes/personRoutes');
const menuRoutes = require('./Routes/MenuRoutes');

// Use the routers
app.use('/person', personRoutes);
app.use('/menu', menuRoutes);
 // listening on port 3000
app.listen(PORT, ()=>{
    console.log('listening on port 3000');
})
