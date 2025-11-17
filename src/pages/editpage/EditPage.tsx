import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import "./editpage.css";

const EditPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { posts, updatePost } = useAppContext();

  // Find the post that should be edited
  const post = posts.find((p) => p.id === id);

  // Local state for the form fields
  const [title, setTitle] = useState<string>(post?.title || "");
  const [description, setDescription] = useState<string>(post?.description || "");

  // If the post loads later or id changes, sync state
  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setDescription(post.description);
    }
  }, [post]);

  // If no post was found for this id
  if (!post) {
    return (
      <main className="editpage_main_container">
        <h1>Post not found</h1>
      </main>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      alert("Please fill out all fields");
      return;
    }

    // Call context update function
    updatePost(post.id, { title, description });

    // Go back to detail page
    navigate(`/posts/${post.id}`);
  };

  const handleCancel = () => {
    navigate(-1); // go back one page in history
  };

  return (
    <main className="editpage_main_container">
      <div className="headline">
        <h1>Edit your blog</h1>
        <p className="headline-sub">Update your post and save your changes.</p>
      </div>

      <form className="detail" onSubmit={handleSubmit}>
        <label htmlFor="title" className="label">
          Title
        </label>
        <input
          id="title"
          value={title}
          placeholder="Update your title"
          onChange={(e) => setTitle(e.target.value)}
          className="text-input"
        />

        <label htmlFor="description" className="label">
          Body
        </label>
        <p className="helper">Edit the content of your post below</p>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={12}
          className="text-area"
        />

        <div className="buttons">
          <button type="submit" className="btn primary">
            Save changes
          </button>
          <button type="button" className="btn" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </main>
  );
};

export default EditPage;
