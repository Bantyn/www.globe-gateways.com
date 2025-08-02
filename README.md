## Database Schema

### 1. Users
Stores information about registered users (travelers or customers).
- *user_id* (INT PRIMARY KEY)
- *name* (VARCHAR(100))
- *email* (VARCHAR(100) UNIQUE)
- *password* (VARCHAR(255))
- *phone* (VARCHAR(15))
- *role* (VARCHAR(10)) -- 'admin' or 'user'

### 2. Packages
Contains details of travel packages posted by the admin.
- *package_id* (INT PRIMARY KEY)
- *title* (VARCHAR(100))
- *location* (VARCHAR(100))
- *price* (DECIMAL(10,2))
- *duration* (VARCHAR(50))
- *description* (TEXT)
- *image_url* (TEXT)
- *created_by* (INT) -- FK from Users
- FOREIGN KEY (*created_by*) REFERENCES Users(*user_id*)

### 3. Bookings
Stores user bookings for travel packages.
- *booking_id* (INT PRIMARY KEY)
- *user_id* (INT)
- *package_id* (INT)
- *booking_date* (DATE)
- *status* (VARCHAR(20)) -- 'pending', 'confirmed', 'cancelled'
- FOREIGN KEY (*user_id*) REFERENCES Users(*user_id*)
- FOREIGN KEY (*package_id*) REFERENCES Packages(*package_id*)

### 4. Payments
Tracks payments made by users for bookings.
- *payment_id* (INT PRIMARY KEY)
- *booking_id* (INT)
- *amount* (DECIMAL(10,2))
- *payment_date* (DATE)
- *payment_method* (VARCHAR(50))
- *status* (VARCHAR(20)) -- 'success', 'failed'
- FOREIGN KEY (*booking_id*) REFERENCES Bookings(*booking_id*)

### 5. Reviews
Stores user feedback/reviews on packages.
- *review_id* (INT PRIMARY KEY)
- *user_id* (INT)
- *package_id* (INT)
- *rating* (INT CHECK (rating BETWEEN 1 AND 5))
- *comment* (TEXT)
- *review_date* (DATE)
- FOREIGN KEY (*user_id*) REFERENCES Users(*user_id*)
- FOREIGN KEY (*package_id*) REFERENCES Packages(*package_id*)

### 6. Contacts
Stores contact form submissions from users.
- *contact_id* (INT PRIMARY KEY)
- *name* (VARCHAR(100))
- *email* (VARCHAR(100))
- *message* (TEXT)
- *submitted_on* (DATE)



Here is the reformatted text:

# Designing an Image Storing and Retrieval System in MongoDB and Node.js

To design an image storing and retrieval system in MongoDB and Node.js that fits the JSON format, it's best to store file URLs instead of raw image data. This approach is scalable, efficient, and works well with React.

## Final Goal

The document in MongoDB will look like this:
{
  "title": "Goa",
  "subTitle": "Beaches, parties, and tropical breeze",
  "location": "Goa",
  "price": 8300,
  "duration": "4D/3N",
  "image": "http:                                  
  "subImages": [
    "http://localhost:5000/uploads/goa1.jpg",
    "http:                                  
  ],
  "video": "http://localhost:5000/uploads/goa.mp4",
  "packageType": "Group Tour",
  "transportation": ["Flight", "Train", "Bike Rentals"],
  "includes": ["Beach Stay", "Breakfast", "Sightseeing"],
  "description": "Golden beaches, Portuguese charm, and endless entertainment make Goa irresistible."
}

## Backend Setup with Multer

### Install Dependencies
npm install express mongoose multer cors

### Create Folder for Uploads
mkdir uploads

### server.js File
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Connect to MongoDB
mongoose.connect('mongodb:                             

                  
const PackageSchema = new mongoose.Schema({
  title: String,
  subTitle: String,
  location: String,
  price: Number,
  duration: String,
  image: String,
  subImages: [String],
  video: String,
  packageType: String,
  transportation: [String],
  includes: [String],
  description: String
});

const Package = mongoose.model('//localhost:27017/travelDB');

// Mongoose Schema
const PackageSchema = new mongoose.Schema({
  title: String,
  subTitle: String,
  location: String,
  price: Number,
  duration: String,
  image: String,
  subImages: [String],
  video: String,
  packageType: String,
  transportation: [String],
  includes: [String],
  description: String
});

const Package = mongoose.model('Package', PackageSchema);

                        
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, '// Multer Storage Config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});

const upload = multer({ storage });

                                                                     
app.post('// POST route to upload one main image, video, and multiple subImages
app.post('/upload', upload.fields([
  { name: 'image', maxCount: 1 },
  { name: 'video', maxCount: 1 },
  { name: 'subImages', maxCount: 10 }
]), async (req, res) => {
        
});

app.listen(5000, () => console.log('// ...
});

app.listen(5000, () => console.log('Server running on port 5000'));
## React Frontend (FormData Upload)
import React, { useState } from 'react';
import axios from 'axios';

const UploadForm = () => {
  // ...
};

export default UploadForm;
## Result

Once uploaded:

- Images/videos are saved in `/uploads/`
- URLs are stored in MongoDB
- You can use the URLs in React `<img src={package.image} />` or `<video src={package.video} />`

Would you like me to generate a full working GitHub-ready backend + frontend zip for you?
