# nodejs-book-api


A RESTful API for managing books using Node.js, Express, and MongoDB.

## Features

- **CRUD Operations**: Create, Read, Update, and Delete books.
- **Database Integration**: Uses MongoDB for persistent storage.
- **Error Handling**: Handles errors and returns appropriate status codes.

## Prerequisites

- Node.js
- npm
- MongoDB

## Installation

1. **Clone the repository:**

   ```bash
   git clone <your-repo-url>

2. **Navigate to the project directory:**
   ```bash
    cd book-api

3. **Install dependencies:**
    ```bash
    npm install

4. **Set up environment variables:**
    ```bash
     MONGO_URI=YOUR_URL
5. **Start the server:**
    ```bash
      npm start


## API Endpoints
# GET /books
  Fetches a list of all books.

 # Response:

200 OK - List of books in JSON format.
GET /books/
Fetches a specific book by ID.

Parameters:

id - The ID of the book to fetch.
Response:

200 OK - The book details in JSON format.
404 Not Found - If the book is not found.

 # POST /books
Creates a new book.

  Request Body:
    
          {
            "title": "New Book Title",
            "author": "Book Author"
          }
Response:

# 201 Created - The newly created book in JSON format.
# 400 Bad Request - If there is a validation error.
PUT /books/
Updates a book by ID.

#Parameters:

id - The ID of the book to update.
Request Body:


    {
      "title": "Updated Book Title",
      "author": "Updated Author"
    }
Response:

    200 OK - The updated book in JSON format.
    404 Not Found - If the book is not found.
    DELETE /books/
    Deletes a book by ID.

Parameters:

    id - The ID of the book to delete.
Response:

    204 No Content - Successfully deleted.
    404 Not Found - If the book is not found.
# Error Handling:
          500 Internal Server Error: Indicates an unexpected error occurred on the server.
          404 Not Found: Indicates the requested resource could not be found.
          400 Bad Request: Indicates a validation error.
# Deployment:
          To deploy the API, follow the steps provided for platforms such as Heroku or Vercel.

# Contributing
    Feel free to fork the repository, make changes, and submit a pull request.

# License
    This project is licensed under the MIT License - see the LICENSE file for details.
  
