import Blog_Card from '../Blog_Card/Blog_Card'
import './blogcardholder.css'
function Blogcard_holder() {
    const firstCard = {
    title : "How I Improved My Productivity as a Developer.",
    description : "A quick breakdown of the habits, tools, and routines that helped me stay focused and ship projects faster.",
    button : "See More."  
  }

  return (
    <div className="blogcardholder_main_container">
        <Blog_Card items={firstCard} />
        <Blog_Card items={firstCard} />
        <Blog_Card items={firstCard} />
        <Blog_Card items={firstCard} />
        <Blog_Card items={firstCard} />
        <Blog_Card items={firstCard} />

    </div>
)
}

export default Blogcard_holder