// src/components/ContactList.js
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, Button, Paper } from '@mui/material';

const ContactList = ({ contacts, handleSortRequest, sortBy, sortOrder, handleEdit, handleDelete }) => (
  <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>
            <TableSortLabel
              active={sortBy === 'firstName'}
              direction={sortBy === 'firstName' ? sortOrder : 'asc'}
              onClick={() => handleSortRequest('firstName')}
            >
              First Name
            </TableSortLabel>
          </TableCell>
          <TableCell>
            <TableSortLabel
              active={sortBy === 'lastName'}
              direction={sortBy === 'lastName' ? sortOrder : 'asc'}
              onClick={() => handleSortRequest('lastName')}
            >
              Last Name
            </TableSortLabel>
          </TableCell>
          <TableCell>
            <TableSortLabel
              active={sortBy === 'email'}
              direction={sortBy === 'email' ? sortOrder : 'asc'}
              onClick={() => handleSortRequest('email')}
            >
              Email
            </TableSortLabel>
          </TableCell>
          <TableCell>
            <TableSortLabel
              active={sortBy === 'phone'}
              direction={sortBy === 'phone' ? sortOrder : 'asc'}
              onClick={() => handleSortRequest('phone')}
            >
              Phone
            </TableSortLabel>
          </TableCell>
          <TableCell>
            <TableSortLabel
              active={sortBy === 'company'}
              direction={sortBy === 'company' ? sortOrder : 'asc'}
              onClick={() => handleSortRequest('company')}
            >
              Company
            </TableSortLabel>
          </TableCell>
          <TableCell>
            <TableSortLabel
              active={sortBy === 'jobTitle'}
              direction={sortBy === 'jobTitle' ? sortOrder : 'asc'}
              onClick={() => handleSortRequest('jobTitle')}
            >
              Job Title
            </TableSortLabel>
          </TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {contacts.map(contact => (
          <TableRow key={contact._id}>
            <TableCell>{contact.firstName}</TableCell>
            <TableCell>{contact.lastName}</TableCell>
            <TableCell>{contact.email}</TableCell>
            <TableCell>{contact.phone}</TableCell>
            <TableCell>{contact.company}</TableCell>
            <TableCell>{contact.jobTitle}</TableCell>
            <TableCell>
              <Button variant="outlined" color="primary" onClick={() => handleEdit(contact)}>Edit</Button>
              <Button variant="outlined" color="secondary" onClick={() => handleDelete(contact._id)}>Delete</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default ContactList;
