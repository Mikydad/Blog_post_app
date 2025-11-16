import Blog_Card from '../Blog_Card/Blog_Card'
import './blogcardholder.css'
import { useAppContext } from '../../context/AppContext'
function Blogcard_holder() {

    const CardContext = useAppContext();

    const { posts } = useAppContext();
    
  

  return (
    <div className="blogcardholder_main_container">
        {
            posts.map((item) => <Blog_Card key={item.id} items={item} />)
        }
    </div>
)
}

export default Blogcard_holder