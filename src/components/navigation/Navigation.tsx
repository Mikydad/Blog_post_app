import './navigation.css'
function Navigation() {
  return (
    <div className="main_navigation_container">
        <div className="right_side_container">
            <a href='#'>Blogify</a>
        </div>
        <div className="left_side_container">
            <ul>
                <a href='#'><li>Posts</li></a>
                <a href='#'><li>Create Post</li></a>
                <a href='#'><li>About Us</li></a>
            </ul>
        </div>
    </div>
  )
}

export default Navigation