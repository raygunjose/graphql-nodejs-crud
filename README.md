# graphql-nodejs-crud

Project Title
    GraphQL API with MongoDB

Description
    A Node.js-based GraphQL API that connects to MongoDB to perform CRUD operations on the orders collection.

Prerequisites
    Node.js (v16+ recommended)
    MongoDB (local or hosted, e.g., MongoDB Atlas)

Setup
    1. Clone the repository:
	git clone https://github.com/your-repo-name.git
	cd your-repo-name

    2. Install dependencies:
	npm init -y
	npm install express apollo-server-express mongoose graphql dotenv

    3. Configure MongoDB connection:
	Update the MongoDB URI in the .env file or directly in the code:
	MONGODB_URI=mongodb://localhost:27017/menuApp

    4. Start the server:
	npm start

GraphQL Endpoints
	Query: Fetch orders
	Mutation: Create, update, delete orders

Testing
    Use a tool like:-
	https://github.com/graphql/graphql-playground
	https://www.postman.com/

Folder Structure
src/
├── models/         # Mongoose models
├── resolvers/      # GraphQL resolvers
├── schema/         # GraphQL schema
├── utils/          # Utility functions (e.g., database connection)
app.js              # Main entry point
.env

