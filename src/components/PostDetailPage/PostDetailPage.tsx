import { useParams } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import './postdetailpage.css'

const PostDetailPage: React.FC = () => {
  const { id } = useParams();
  const { posts } = useAppContext();

  // Find the post with this ID
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return <h1>Post not found</h1>;
  }

  return (
    <main className="post-detail-container">
      <h1>{post.title}</h1>

      <p className="post-date">
        {new Date(post.createdAt).toLocaleDateString()}
      </p>

      <p className="post-description">{post.description}</p>
    </main>
  );
};

export default PostDetailPage;
