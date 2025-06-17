const mongoose = require('mongoose');
// Define the schema for a person
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
        },
    age: {
        type: Number,
        required: true
        }, 
        work:{
        type: String,
        enum: ['chef', 'waiter', 'manager'],
        required: true
        },
             
    email: {
        type: String,
        required: true,
        unique: true
        },
    
    phone: {
        type: String,
        required: true
        }
   

})
// Create a model from the schema
const Person = mongoose.model('Person', personSchema);
// Export the model for use in other files
module.exports = Person; // Export the Person model for use in other files
