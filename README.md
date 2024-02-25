# Ecommerce API

This project is a simple Node.js and MongoDB-powered API designed for managing product inventory in an ecommerce platform.

## Prerequisites

Before you begin, ensure you have the following installed on your local system:

- [Node.js](https://nodejs.org/) (version 12.0 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) installed and running on your local machine
- [Postman](https://www.postman.com/downloads/) for testing API endpoints

## Getting Started

Follow these steps to set up the project on your local system:

1. **Clone the Repository:**

2. **Install Dependencies:**
    npm install

3. **Set Up MongoDB:**
    -Create a directory for MongoDB data

4. **Configure MongoDB Connection:**
    -Open models/product.js.
    -If needed, update the MongoDB connection URL to match your local setup

5. **Run the Server:**
    -node index.js

6. **Test the Endpoints:**
    -test the /products/create, /products, /products/:id/update_quantity, and /products/:id endpoints.

## API Endpoints
### Create a Product
**URL: POST http://localhost:4000/products/create**

**Request Body Example:**
json
Copy code
{
    "name": "Laptop",
    "quantity": 10
}

### List Products
URL: GET http://localhost:4000/products

### Delete a Product
URL: DELETE http://localhost:4000/products/:id

### Update Quantity of a Product
URL: POST http://localhost:4000/products/:id/update_quantity/?number=10

## Additional Information
Well Commented Code: The codebase is well-commented for better understanding.
Project Structure: The project follows a scalable folder structure with separate folders for models, controllers, and routes.
