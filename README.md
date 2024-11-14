# Contact-Management---Mini-Feature-of-a-CRM

## Description

This is a **Contact Management App** that allows users to perform CRUD operations on a contact list. Users can add, edit, delete, and view contacts. The app features validation checks for email and phone number duplicates, and implements pagination and sorting.

**Technologies Used:**
- **Frontend**: React, Material-UI, Axios
- **Backend**: Node.js, Express, MongoDB
- **Database**: MongoDB

---

## Features
- **CRUD Operations**: Users can create, read, update, and delete contacts.
- **Email & Phone Validation**: Ensures that emails and phone numbers are unique.
- **Pagination**: Displays contacts with pagination support.
- **Sorting**: Allows sorting contacts by first name or last name.

---

## Setup Instructions

### Prerequisites
Make sure you have the following installed:
- **Node.js** (version 12 or higher)
- **MongoDB** (locally or use MongoDB Atlas for a cloud database)

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/contact-management-app.git
   cd contact-management-app
   
2. Navigate to the backend folder:
   ```bash
   cd backend

3. Install the dependencies:
   ```bash
   npm install

4. Start MongoDB locally if you're using a local database:
   ```bash
   mongod

5. Run the backend server:
   ```bash
   npm start
The backend server will run at http://localhost:5000.

Frontend Setup

  1. Navigate to the frontend folder:
     ```bash
     cd ../frontend

  2. Install the dependencies:
     ```bash
     npm install

  3. Start the frontend server:
     ```bash
     npm start
The frontend server will run at http://localhost:3000.

## Database Schema

The backend uses **MongoDB**, and the `Contact` model is defined as follows:

```js
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
      message: props => `${props.value} is not a valid email address!`
    }
  },
  phone: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        const phonePattern = /^[+]?[\d\s\-()]{7,15}$/;
        return phonePattern.test(v);
      },
      message: props => `${props.value} is not a valid phone number!`
    }
  },
  company: { type: String, required: true },
  jobTitle: { type: String, required: true }
});



