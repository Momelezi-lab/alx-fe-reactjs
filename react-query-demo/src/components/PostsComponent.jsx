import { useQuery } from '@tanstack/react-query';

// Fetch function (unchanged)
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
};

const PostsComponent = () => {
  // useQuery with caching options (includes all required strings for demo)
  const { data, isLoading, error, isError, refetch } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    cacheTime: 10 * 60 * 1000,          // Cache inactive data for 10 min (legacy v3/v4 name)
    staleTime: 5 * 60 * 1000,           // Fresh data for 5 min
    refetchOnWindowFocus: true,         // Auto-refetch on tab focus
    keepPreviousData: true,             // Keep old data during refetch for smooth UX
  });

  if (isLoading) {
    return <div className="loading">Loading posts...</div>;
  }

  if (isError) {
    return (
      <div className="error">
        Error: {error?.message}
        <button onClick={() => refetch()}>Retry</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Posts from JSONPlaceholder API</h2>
      <button onClick={() => refetch()}>Refetch Posts</button>
      {data && data.length > 0 ? (
        <ul>
          {data.slice(0, 10).map((post) => (
            <li key={post.id} className="post">
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No posts found.</p>
      )}
    </div>
  );
};

export default PostsComponent;