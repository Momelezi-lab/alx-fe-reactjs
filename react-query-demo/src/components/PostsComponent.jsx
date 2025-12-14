import { useQuery } from 'react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
};

const PostsComponent = () => {
  const { data, isLoading, error, isError, refetch } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
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