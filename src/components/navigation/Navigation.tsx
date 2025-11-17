import './navigation.css'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <nav className="main_navigation_container" aria-label="Main navigation">
      <div className="right_side_container">
        <Link to="/" className="brand">Blogify</Link>
      </div>

      <div className="left_side_container">
        <ul>
          <li><Link to="/">Posts</Link></li>
          <li><Link to="/create_page">Create Post</Link></li>
          <li><Link to="/about">About Us</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation