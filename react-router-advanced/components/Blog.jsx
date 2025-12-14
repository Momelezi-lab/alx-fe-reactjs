import { useParams } from 'react-router-dom';

const Blog = () => {
  const { postId } = useParams();  // Extracts :postId from URL
  return (
    <div>
      <h1>Blog Post</h1>
      <p>Viewing post ID: {postId}</p>
      <p>Dynamic content for post #{postId} would load here.</p>
    </div>
  );
};

export default Blog;