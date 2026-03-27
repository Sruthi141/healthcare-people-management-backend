const Person = require('../models/person.model');

// Get all persons
exports.getPersons = async (req, res) => {
  try {
    const persons = await Person.find();
    res.status(200).json(persons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single person by ID
exports.getPersonById = async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);
    if (!person) return res.status(404).json({ message: 'Person not found' });
    res.status(200).json(person);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new person
exports.createPerson = async (req, res) => {
  try {
    const { Name, Age, Gender, MobileNumber } = req.body;
    // Allow standard JSON properties matching the exact requirements
    const newPerson = new Person({
      Name: Name || req.body.name,
      Age: Age || req.body.age,
      Gender: Gender || req.body.gender,
      MobileNumber: MobileNumber || req.body['Mobile Number'] || req.body.mobileNumber
    });
    const savedPerson = await newPerson.save();
    res.status(201).json(savedPerson);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a person
exports.updatePerson = async (req, res) => {
  try {
    const { id } = req.params;
    const body = {
      Name: req.body.Name || req.body.name,
      Age: req.body.Age || req.body.age,
      Gender: req.body.Gender || req.body.gender,
      MobileNumber: req.body.MobileNumber || req.body['Mobile Number'] || req.body.mobileNumber
    };
    
    // Clean up undefined properties
    Object.keys(body).forEach(key => body[key] === undefined && delete body[key]);

    const updatedPerson = await Person.findByIdAndUpdate(id, body, { new: true, runValidators: true });
    if (!updatedPerson) return res.status(404).json({ message: 'Person not found' });
    res.status(200).json(updatedPerson);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a person
exports.deletePerson = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPerson = await Person.findByIdAndDelete(id);
    if (!deletedPerson) return res.status(404).json({ message: 'Person not found' });
    res.status(200).json({ message: 'Person deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
