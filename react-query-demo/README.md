# React Query Demo: Advanced Data Handling

This project demonstrates integrating TanStack React Query (v5) into a React app to fetch, cache, and update data from the JSONPlaceholder API. It showcases efficient API interactions, loading/error states, caching, and on-demand refetching.

## Features
- **Data Fetching**: Uses `useQuery` to load posts from `https://jsonplaceholder.typicode.com/posts`.
- **Loading & Error Handling**: Displays spinners for loading and retry buttons for errors.
- **Caching**: Data is cached (staleTime: 5 minutes) to reduce API calls on remounts/refreshes.
- **Refetching**: Button to manually trigger data updates.
- **UI**: Simple list of post titles and bodies (first 10 posts).

## Tech Stack
- React 19 (Vite template)
- @tanstack/react-query (for data management)
- JSONPlaceholder (mock API)

## Setup & Run
1. Install dependencies: