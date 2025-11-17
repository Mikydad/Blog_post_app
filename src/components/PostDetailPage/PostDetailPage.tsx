import { useAppContext } from "../../context/AppContext";
import { useNavigate, useParams } from "react-router-dom";
import './postdetailpage.css'

const PostDetailPage: React.FC = () => {
  const { id } = useParams();
  const { posts } = useAppContext();   // ✔ only call once

  const navigate = useNavigate();

  // Find the post with this ID
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return <h1>Post not found</h1>;
  }

  const handleEdit = () => {
    navigate(`/posts/${post.id}/edit`);
  };

  return (
    <main className="post-detail-container">
      <h1>{post.title}</h1>

      <p className="post-date">
        {new Date(post.createdAt).toLocaleDateString()}
      </p>

      <p className="post-description">{post.description}</p>

      <button onClick={handleEdit}>Edit</button>
    </main>
  );
};

export default PostDetailPage;
