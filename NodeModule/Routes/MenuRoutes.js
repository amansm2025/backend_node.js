const express = require('express');
const router = express.Router();
const Menu = require('../API Models/menu.js'); // Import the Menu model





//Post rout to add a person 2
router.post('/', async (req, res) => {

   try {const data = req.body;   //Assuming data is in the request body

    const newMenu = new Menu(data); // Create a new instance of the Person model


    const response = await newMenu.save(); // Save the new person to the database
    console.log('Menu added saved:');
    res.status(200).json( response ); // Send a success response with the saved person data
    } catch (error) {
    console.error('Error adding Menu:', error);
    res.status(500).json({ error: 'Server internal error' }); // Send an error response
    }
  })

  // Get method to get the person 2
router.get('/', async (req, res) => {
  try {
    const data = await Menu.find(); // Find all persons in the database
    console.log('Menu fetched successfully:');
    res.status(200).json(data); // Send the list of persons as a response
  } catch (error) {
    console.log('Error fetching Menu:');
    res.status(500).json({ error: 'Server internal error' }); // Send an error response
  }
})


// Export the router to use in the main server file

//Check our local repository update on github or  not

module.exports = router;