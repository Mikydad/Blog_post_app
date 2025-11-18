import { useAppContext } from "../../context/AppContext";
import { useNavigate, useParams } from "react-router-dom";

import "./postdetaipage.css";

const PostDetailPage: React.FC = () => {
  const { id } = useParams();
  const { posts, deletePost } = useAppContext();
  const navigate = useNavigate();

  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <main className="postdetail-page">
        <div className="postdetail-card">
          <h1 className="postdetail-title">Post not found</h1>
        </div>
      </main>
    );
  }

  const handleEdit = () => {
    navigate(`/posts/${post.id}/edit`);
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this post?");
    if (!confirmDelete) return;

    deletePost(post.id);
    navigate("/");
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <main className="postdetail-page">
      <div className="postdetail-card">
        <button className="postdetail-back" onClick={handleBack}>
          ← Back
        </button>

        <h1 className="postdetail-title">{post.title}</h1>

        <p className="postdetail-date">
          {new Date(post.createdAt).toLocaleDateString()}
        </p>

        <p className="postdetail-body">{post.description}</p>

        <div className="postdetail-actions">
          <button className="postdetail-btn postdetail-btn-edit" onClick={handleEdit}>
            Edit
          </button>
          <button className="postdetail-btn postdetail-btn-delete" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </main>
  );
};

export default PostDetailPage;
