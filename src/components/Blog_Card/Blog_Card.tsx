import './blog_card.css'
import { useNavigate } from 'react-router-dom'
function Blog_Card({ items }: { items: any }) {
    const navigate = useNavigate();

    const handleReadMore = () => {
    navigate(`/posts/${items.id}`);
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
        </div>
        </div>
    </div>
  )
}

export default Blog_Card