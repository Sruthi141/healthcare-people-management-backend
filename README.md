# Node.js + MongoDB Backend - Person Management API

This application provides RESTful APIs for managing Person records (Name, Age, Gender, Mobile Number).

## Prerequisites
- Node.js
- MongoDB running locally on default port (27017)

## Setup
1. Run `npm install` to install dependencies.
2. Ensure your local MongoDB is running (`mongodb://127.0.0.1:27017/peopledb`).
3. Start the server with `npm start` or `node server.js`.

## API Endpoints
- `GET /person` - Retrieve all people
- `POST /person` - Create a new person
- `PUT /person/:id` - Update an existing person
- `DELETE /person/:id` - Delete a person

The API runs on `http://localhost:3000`.
