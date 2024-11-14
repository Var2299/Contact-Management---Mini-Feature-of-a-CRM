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

The backend uses **MongoDB** with a `Contact` model that consists of the following fields:

- **firstName** (String): The first name of the contact (required).
- **lastName** (String): The last name of the contact (required).
- **email** (String): The email address of the contact (required). Validated to ensure the email format is correct.
- **phone** (String): The phone number of the contact (required). Validated to ensure the phone number format is correct.
- **company** (String): The company associated with the contact (required).
- **jobTitle** (String): The job title of the contact (required).

### Validation

1. **Email Validation**: 
   - The email must follow the standard email format (e.g., `example@domain.com`).
   - Both the frontend (React) and backend (MongoDB) enforce this validation to ensure data integrity.

2. **Phone Validation**:
   - The phone number must follow the standard phone number format, allowing for various international formats (e.g., `+1 (123) 456-7890`).
   - This validation is implemented both on the frontend (React) and the backend (MongoDB) to prevent invalid phone numbers from being submitted.

3. **Other Fields**:
   - The `firstName`, `lastName`, `company`, and `jobTitle` fields are required but do not have additional specific formatting rules beyond being non-empty.

This ensures that all contacts are stored with proper data formats and prevents invalid data from entering the system.
