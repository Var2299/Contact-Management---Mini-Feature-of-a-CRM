// src/controllers/contactController.js
const Contact = require('../models/contact');

// Create a new contact
const createContact = async (req, res) => {
  const { firstName, lastName, email, phone, company, jobTitle } = req.body;
  
  if (!firstName || !lastName || !email || !phone || !company || !jobTitle) {
    return res.status(400).json({ error: 'Please provide all fields.' });
  }

  try {
    const newContact = new Contact({ firstName, lastName, email, phone, company, jobTitle });
    await newContact.save();
    res.status(201).json(newContact);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create contact' });
  }
};

// Get all contacts
const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve contacts' });
  }
};

// Update a contact
const updateContact = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  try {
    const contact = await Contact.findByIdAndUpdate(id, updatedData, { new: true });
    if (!contact) return res.status(404).json({ error: 'Contact not found' });
    res.status(200).json(contact);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update contact' });
  }
};

// Delete a contact
const deleteContact = async (req, res) => {
  const { id } = req.params;

  try {
    const contact = await Contact.findByIdAndDelete(id);
    if (!contact) return res.status(404).json({ error: 'Contact not found' });
    res.status(200).json({ message: 'Contact deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete contact' });
  }
};

module.exports = {
  createContact,
  getAllContacts,
  updateContact,
  deleteContact
};
