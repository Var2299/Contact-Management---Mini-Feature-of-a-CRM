// src/components/ContactForm.js
import React from 'react';
import { TextField, Button } from '@mui/material';

const ContactForm = ({ formData, handleInputChange, handleFormSubmit, formError, isEditing }) => (
  <form onSubmit={handleFormSubmit}>
    <TextField
      label="First Name"
      name="firstName"
      value={formData.firstName}
      onChange={handleInputChange}
      fullWidth
      margin="normal"
    />
    {formError && formError.includes('First Name') && <div style={{ color: 'red' }}>{formError}</div>}

    <TextField
      label="Last Name"
      name="lastName"
      value={formData.lastName}
      onChange={handleInputChange}
      fullWidth
      margin="normal"
    />
    {formError && formError.includes('Last Name') && <div style={{ color: 'red' }}>{formError}</div>}

    <TextField
      label="Email"
      name="email"
      value={formData.email}
      onChange={handleInputChange}
      fullWidth
      margin="normal"
    />
    {formError && formError.includes('email') && <div style={{ color: 'red' }}>{formError}</div>}

    <TextField
      label="Phone"
      name="phone"
      value={formData.phone}
      onChange={handleInputChange}
      fullWidth
      margin="normal"
    />
    {formError && formError.includes('phone') && <div style={{ color: 'red' }}>{formError}</div>}

    <TextField
      label="Company"
      name="company"
      value={formData.company}
      onChange={handleInputChange}
      fullWidth
      margin="normal"
    />

    <TextField
      label="Job Title"
      name="jobTitle"
      value={formData.jobTitle}
      onChange={handleInputChange}
      fullWidth
      margin="normal"
    />

    <Button type="submit" variant="contained" color="primary">
      {isEditing ? 'Update Contact' : 'Add Contact'}
    </Button>
  </form>
);

export default ContactForm;
