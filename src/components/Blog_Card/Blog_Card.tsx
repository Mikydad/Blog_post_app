import './blog_card.css'

function Blog_Card({ items }: { items: any }) {
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
            See More.
        </div>
        </div>
    </div>
  )
}

export default Blog_Card