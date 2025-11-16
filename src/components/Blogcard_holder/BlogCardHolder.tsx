import Blog_Card from '../Blog_Card/Blog_Card'
import './blogcardholder.css'
import { useAppContext } from '../../context/AppContext'

function Blogcard_holder() {
    const { posts } = useAppContext()

    return (
        <section className="blogcardholder_section">
            <header className="blogcardholder_header">
                <h2 className="blogcardholder_title">Check out the latest blogs</h2>
                <p className="blogcardholder_sub">Fresh posts from our community — read, learn, and share.</p>
            </header>

            <div className="blogcardholder_main_container">
                        {posts.map((item) => (
                            <Blog_Card key={String(item.id)} items={item} />
                        ))}
            </div>
        </section>
    )
}

export default Blogcard_holder