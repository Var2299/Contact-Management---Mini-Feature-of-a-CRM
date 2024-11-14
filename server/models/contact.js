// src/models/contact.js
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { 
    type: String, 
    required: true,
    validate: {
      validator: function(v) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(v);
      },
      message: props => `${props.value} is not a valid email address!`,
    },
  },
  phone: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        const phonePattern = /^[+]?[\d\s\-()]{7,15}$/;
        return phonePattern.test(v);
      },
      message: props => `${props.value} is not a valid phone number!`,
    },
  },
  company: { type: String, required: true },
  jobTitle: { type: String, required: true }
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
