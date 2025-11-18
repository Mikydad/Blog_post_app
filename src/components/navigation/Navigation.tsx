import './navigation.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function Navigation() {
  const location = useLocation()
  const navigate = useNavigate()

  const handlePostsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If we're already on the homepage, just scroll to the section
    if (location.pathname === '/') {
      e.preventDefault()
      const postsSection = document.getElementById('blog-posts')
      if (postsSection) {
        postsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    } else {
      // If we're on another page, navigate first, then scroll after a brief delay
      e.preventDefault()
      navigate('/')
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const postsSection = document.getElementById('blog-posts')
        if (postsSection) {
          postsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    }
  }

  return (
    <nav className="navigation_wrapper" aria-label="Main navigation">
      <div className="main_navigation_container">
        <div className="right_side_container">
          <Link to="/" className="brand">Blogify</Link>
        </div>

        <div className="left_side_container">
          <ul>
            <li><Link to="/" onClick={handlePostsClick}>Posts</Link></li>
            <li><Link to="/create_page">Create Post</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation