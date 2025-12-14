import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import PostsComponent from './components/PostsComponent'; // We'll create this next
import './App.css';

// Create a client instance
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>React Query Demo: Posts Fetching</h1>
        <PostsComponent />
      </div>
    </QueryClientProvider>
  );
}

export default App;