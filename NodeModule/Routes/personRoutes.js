const express = require('express');
const router = express.Router();
const Person = require('../API Models/person.js');// Import the Person model


//Post rout to add a person 1
router.post('/', async (req, res) => {

   try {const data = req.body;   //Assuming data is in the request body

    const newPerson = new Person(data); // Create a new instance of the Person model


    const response = await newPerson.save(); // Save the new person to the database
    console.log('Person added saved:');
    res.status(200).json( response ); // Send a success response with the saved person data
    } catch (error) {
    console.error('Error adding person:', error);
    res.status(500).json({ error: 'Server internal error' }); // Send an error response
    }
  })  
  // Get method to get the person 1
router.get('/', async (req, res) => {
  try {
    const data = await Person.find(); // Find all persons in the database
    console.log('Persons fetched successfully:');
    res.status(200).json(data); // Send the list of persons as a response
  } catch (error) {
    console.log('Error fetching persons:');
    res.status(500).json({ error: 'Server internal error' }); // Send an error response
  }
})

router.get('/:workType', async (req, res) => {
  try {
    const workType = req.params.workType;  //Extract the work type from the url parameters
    if(workType == 'chef' || workType == 'waiter' || workType == 'manager') {
    const response = await Person.find({ work: workType }); // Find persons by work type
  
    console.log(`Persons work  fetched successfully:`);
    res.status(200).json(response); // Send the list of persons as a response
     } else {
      res.status(400).json({ error: 'Invalid work type' }); // Send an error response for invalid work type
    } 
  }
  catch (error) {
    console.log('Error fetching persons by work type:');
    res.status(500).json({ error: 'Server internal error' }); // Send an error response
  }
});

// Update Method to update a person by ID
// This method allows updating a person's details by their ID

router.put('/:id', async (req, res) => {
    try {
        const personId = req.params.id; // Extract the person ID from the URL parameters
        const updatedPersonData = req.body; // Get the updated data from the request body

        const response = await Person.findByIdAndUpdate(personId, updatedPersonData,
            { new: true,  // Return the updated document
            runValidators: true // Validate the update against the schema
        }) // Update the person in the database
        if (!response) {
            return res.status(404).json({ error: 'Person not found' }); // If no person is found, send a 404 response
        }
        console.log('Person updated successfully:');
        res.status(200).json(response); // Send the updated person data as a response
    } catch (error) {
        console.error('Error updating person:');
        res.status(500).json({ error: 'Server internal error' }); // Send an error response
    }

}); 

// Delete Method to delete a person by ID
// This method allows deleting a person from the database by their ID
router.delete('/:id', async (req, res) => {
    try {
        const personId = req.params.id; // Extract the person ID from the URL parameters
        const response = await Person.findByIdAndDelete(personId); // Delete the person from the database
        if (!response) {

            return res.status(404).json({ error: 'Person not found' }); // If no person is found, send a 404 response
        }
        console.log('Person deleted successfully:');
        res.status(200).json({ message: 'Person deleted successfully' }); // Send a success response
    } catch (error) {
        console.error('Error deleting person:');
        res.status(500).json({ error: 'Server internal error' }); // Send an error response
    }
});

// Export the router to use in the main server file
module.exports = router;