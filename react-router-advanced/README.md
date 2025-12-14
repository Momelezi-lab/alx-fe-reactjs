# Advanced React Router Demo

Implements nested, dynamic, and protected routes with React Router v6.

## Features
- **Nested**: /profile > details/settings.
- **Dynamic**: /blog/:postId.
- **Protected**: Auth guard for /profile (simulated login).

## Setup
npm install
npm run dev

## Routes
- / : Home
- /login : Auth toggle
- /profile/* : Protected dashboard (needs login)
- /blog/:postId : Dynamic post

## Testing
Toggle auth via /login; check redirects and params.