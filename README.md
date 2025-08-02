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
