# Postaway API

Postaway API is a simple social media-like backend service that supports user authentication, post creation, commenting, and liking posts.

## Features
- User registration and login with JWT-based authentication
- CRUD operations for posts
- Add comments to posts
- Toggle likes on posts

## Tech Stack
- Node.js
- Express.js
- In-memory data structures for models
- JWT for authentication

## Setup
1. Clone the repository.
2. Install dependencies:
3. Create a `.env` file and add a `JWT_SECRET` key.
4. Run the app:



## Routes
- **Auth**:
- POST `/api/auth/register`
- POST `/api/auth/login`

- **Posts**:
- GET `/api/posts/`
- POST `/api/posts/` (Protected)
- GET `/api/posts/:id`
- PUT `/api/posts/:id` (Protected)
- DELETE `/api/posts/:id` (Protected)

- **Comments**:
- GET `/api/posts/:id/comments`
- POST `/api/posts/:id/comments` (Protected)
- PUT `/api/posts/comments/:id` (Protected)
- DELETE `/api/posts/comments/:id` (Protected)

- **Likes**:
- GET `/api/posts/:postId/likes`
- POST `/api/posts/:postId/like` (Protected)
