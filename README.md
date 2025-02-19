# UserRecords  

**UserRecords** is a Node.js-based web application for managing user information. It allows adding, viewing, editing, and deleting user records, using **MongoDB**, **Express.js**, and **EJS** for templating.  

## Features  
✅ Add new users with details like name, email, phone, and more  
✅ View a list of all registered users  
✅ Edit or delete user information  
✅ Uses **MongoDB** for data storage  
✅ Express.js-based backend with **EJS** templating  

## Installation  

1. Clone the repository:  
   ```bash
   git clone https://github.com/AmirMohammedi/userRecords-nodejs.git
   cd UserRecords
   ```

2. Install dependencies:  
   ```bash
   npm install
   ```

3. Set up the database connection in `app.js`:  
   ```javascript
   mongoose.connect("your-mongodb-connection-string", { useNewUrlParser: true, useUnifiedTopology: true });
   ```

4. Start the application:  
   ```bash
   npm start
   ```

5. Open `http://localhost:3001` in your browser.  

## File Structure  

```
UserRecords/
│── controllers/         # Handles user-related requests
│── models/              # MongoDB schema for users
│── public/              # Static files (CSS, images)
│── views/               # EJS templates for UI
│── routes/              # Route definitions
│── app.js               # Main server file
│── package.json         # Dependencies and scripts
```

## Technologies Used  
- **Node.js**  
- **Express.js**  
- **MongoDB** (via **Mongoose**)  
- **EJS** for templating  
- **Bootstrap** for styling  

## API Endpoints  

| Method | Endpoint       | Description |
|--------|--------------|-------------|
| GET    | `/`          | Display all users |
| GET    | `/user/add`  | Show add user form |
| POST   | `/user/add`  | Add a new user |
| GET    | `/user/:id`  | View user details |
| GET    | `/user/:id/edit` | Edit user form |
| PUT    | `/user/:id`  | Update user info |
| DELETE | `/user/:id`  | Delete user |
