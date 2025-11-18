import './blog_card.css'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext';


function Blog_Card({ items }: { items: any }) {
    const navigate = useNavigate();

    const {posts, deletePost} = useAppContext();

    const handleReadMore = () => {
    navigate(`/posts/${items.id}`);
    }


    const handleDelete = () => {
      const confirmDelete = window.confirm("are you sure you wanna delete this post?")
      if(!confirmDelete) return;

      deletePost(items.id);
      navigate("/")
    }

  return (
    <div className="blog_card_main_container">
        <div className="headline">
            <h1>{items.title}</h1>
        </div>
        <div className="center">
            <p>
         {items.description}        </p>
        </div>
        <div className="card_footer">
        <div className="button">
            <button onClick={handleReadMore}>See More.</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
        </div>
    </div>
  )
}

export default Blog_Card