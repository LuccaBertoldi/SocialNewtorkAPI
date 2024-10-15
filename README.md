# Social-Newtork-API

## Description

This is a API for a social network application built using Express.js, Mongoose, and MongoDB. The API allows users to create accounts, share thoughts, react to thoughts, and manage a friend list. The application is designed to handle large amounts of unstructured data efficiently.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Example Requests](#example-requests)
- [Testing the API](#testing-the-api)
- [License](#license)

## Installation

    1. npm install
    2. mongod
    .node server.js

## Usage
    Once the server is running, you can interact with the API using a tool like Insomnia. The server will be accessible at http://localhost:3001.

## API Endpoints

**Users**
    GET /api/users: Retrieve all users.
    GET /api/users/ : Retrieve a single user by ID.
    POST /api/users: Create a new user.
    PUT /api/users/ : Update a user by ID.
    DELETE /api/users/ : Delete a user by ID.
    POST /api/users//friends/  : Add a friend.
    DELETE /api/users//friends/ : Remove a friend.

**Thoughts**
    GET /api/thoughts: Retrieve all thoughts.
    GET /api/thoughts/ : Retrieve a single thought by ID.
    POST /api/thoughts: Create a new thought.
    PUT /api/thoughts/ : Update a thought by ID.
    DELETE /api/thoughts/ : Delete a thought.

## Walkthrough Video
    This is a walkthrough video explaining how to use and that is working correctly the application: https://drive.google.com/file/d/1f1qjsdHwAAnACjDOUlI0ryFvD29jRyhI/view

## License
    This project is licensed under the MIT License.