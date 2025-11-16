import './navigation.css'
import { Link, NavLink } from 'react-router-dom'
function Navigation() {
return (
    <div className="main_navigation_container">
        <div className="right_side_container">
            <Link to="/">Blogify</Link>
        </div>
        <div className="left_side_container">
            <ul>
                <li><NavLink to="/posts">Posts</NavLink></li>
                <li><NavLink to="/create">Create Post</NavLink></li>
                <li><NavLink to="/about">About Us</NavLink></li>
            </ul>
        </div>
    </div>
)
}

export default Navigation