# Airbnb Clone - Major Project

A full-stack web application that replicates the core functionality of Airbnb, allowing users to list properties, search for accommodations, make bookings, and leave reviews.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [Author](#author)
- [Acknowledgments](#acknowledgments)
- [License](#license)

## Features

- **User Authentication:** Sign up, login, and logout functionality using Passport.js.
- **Property Listings:** Create, read, update, and delete property listings.
- **Image Upload:** Upload and manage property images using Cloudinary.
- **Reviews and Ratings:** Allow users to submit reviews and ratings for properties.
- **Interactive Maps:** Display property locations using Mapbox.
- **Search and Filter:** Search properties by location and other criteria.
- **Responsive Design:** Mobile-friendly user interface.
- **Flash Messages:** Display feedback messages for successful actions and errors.
- **Session Management:** Secure session handling with MongoDB session storage.

## Tech Stack

### Backend

- **Node.js** - JavaScript runtime environment.
- **Express.js** - Web application framework.
- **MongoDB** - NoSQL database.
- **Mongoose** - ODM for MongoDB.
- **Passport.js** - Authentication middleware.

### Frontend

- **EJS** - Embedded JavaScript templating engine.
- **Bootstrap** - CSS framework.
- **JavaScript** - Client-side scripting.

### Services and APIs

- **Cloudinary** - Image storage and management.
- **Mapbox** - Maps and location services.
- **MongoDB Atlas** - Cloud-hosted database.

### Additional Tools

- **Joi** - Data validation.
- **Multer** - File upload handling.
- **Method Override** - HTTP method override support.
- **Connect Flash** - Flash messaging functionality.

## Prerequisites

Before running this application, make sure you have the following installed or configured:

- Node.js (v20.17.0 or higher).
- MongoDB Atlas account.
- Cloudinary account.
- Mapbox account.

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/PrinceYadav001/My-Major-Project.git
cd My-Major-Project
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory and configure the required environment variables. Refer to the Environment Variables section below.

### 4. Start the Application

```bash
node app.js
```

The application will be available at:

```text
http://localhost:8080
```

## Environment Variables

Create a `.env` file in the root directory and add the following configuration:

```env
NODE_ENV=development
ATLASDB_URL=your_mongodb_atlas_connection_string
SESSION_SECRET=your_session_secret_key

# Cloudinary Configuration
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

# Mapbox Configuration
MAP_TOKEN=your_mapbox_access_token
```

Replace the placeholder values with your actual credentials.

## Usage

1. **Registration:** Create a new account through the signup page.
2. **Login:** Access your account using your registered credentials.
3. **Browse Listings:** Explore available properties on the homepage.
4. **Create Listing:** Add your own property listing to the platform.
5. **Property Details:** View detailed information about individual properties.
6. **Reviews:** Submit reviews and ratings for properties.
7. **Profile Management:** Manage your listings and account information.

## Project Structure

```text
├── app.js                 # Main application file
├── package.json           # Dependencies and scripts
├── cloudConfig.js         # Cloudinary configuration
├── middleware.js          # Custom middleware functions
├── schema.js              # Joi validation schemas
├── controllers/           # Route handlers
│   ├── listings.js
│   ├── reviews.js
│   └── users.js
├── models/                # Database models
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── routes/                # Express routes
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── views/                 # EJS templates
│   ├── includes/          # Partial templates
│   ├── layouts/           # Layout templates
│   ├── listings/          # Listing-related views
│   └── Users/             # User-related views
├── public/                # Static assets
│   ├── CSS/               # Stylesheets
│   └── js/                # Client-side JavaScript
├── utils/                 # Utility functions
│   ├── ExpressError.js
│   └── wrapAsync.js
└── init/                  # Database initialization
    ├── data.js
    └── index.js
```

## API Endpoints

### Listings

| Method | Endpoint | Description |
|---|---|---|
| GET | `/listings` | Get all listings |
| GET | `/listings/new` | Display the create listing form |
| POST | `/listings` | Create a new listing |
| GET | `/listings/:id` | Get a specific listing |
| GET | `/listings/:id/edit` | Display the edit listing form |
| PUT | `/listings/:id` | Update a listing |
| DELETE | `/listings/:id` | Delete a listing |

### Reviews

| Method | Endpoint | Description |
|---|---|---|
| POST | `/listings/:id/reviews` | Create a review |
| DELETE | `/listings/:id/reviews/:reviewId` | Delete a review |

### Users

| Method | Endpoint | Description |
|---|---|---|
| GET | `/signup` | Display the signup form |
| POST | `/signup` | Register a new user |
| GET | `/login` | Display the login form |
| POST | `/login` | Authenticate a user |
| POST | `/logout` | Log out the current user |

## Contributing

Contributions are welcome. To contribute to this project:

1. Fork the repository.
2. Create a feature branch:

   ```bash
   git checkout -b feature/AmazingFeature
   ```

3. Commit your changes:

   ```bash
   git commit -m "Add some AmazingFeature"
   ```

4. Push your changes:

   ```bash
   git push origin feature/AmazingFeature
   ```

5. Open a Pull Request.

## Author

**Prince Yadav**

- **GitHub:** [@PrinceYadav001](https://github.com/PrinceYadav001)

## Acknowledgments

- Inspired by Airbnb's user interface and functionality.
- Developed as a learning project to explore and understand full-stack web development.
- Special thanks to the open-source community for providing excellent tools, frameworks, and libraries.

## License

This project is a learning project and is not intended for commercial use. Please ensure compliance with the terms of service of all external APIs and services used in this application.
