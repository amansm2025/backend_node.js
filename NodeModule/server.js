const express = require('express');
const app = express();
const db=  require('./db.js');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.get('/', function (req, res)  {
  res.send('Hello welcome to my server!')
})


// import the router files
const personRoutes = require('./routes/personRoutes.js');
const menuRoutes = require('./routes/MenuRoutes.js');

// Use the person routes 
app.use('/person', personRoutes);
app.use('/menu', menuRoutes);





app.listen(3000 , () => {
  console.log('Server is running on port 3000');
})



