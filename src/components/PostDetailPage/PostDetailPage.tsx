import { useAppContext } from "../../context/AppContext";
import { useNavigate, useParams } from "react-router-dom";
import './postdetailpage.css'

const PostDetailPage: React.FC = () => {
  const { id } = useParams();
  const { posts, deletePost } = useAppContext();   // ✔ only call once

  const navigate = useNavigate();

  // Find the post with this ID
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return <h1>Post not found</h1>;
  }

  const handleEdit = () => {
    navigate(`/posts/${post.id}/edit`);
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm("Are you sure you wanna to delete?")
    if(!confirmDelete) return;
    deletePost(post.id);
    navigate("/")
  }

  return (
    <main className="post-detail-container">
      <h1>{post.title}</h1>

      <p className="post-date">
        {new Date(post.createdAt).toLocaleDateString()}
      </p>

      <p className="post-description">{post.description}</p>

      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </main>
  );
};

export default PostDetailPage;
