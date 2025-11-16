import './hero.css'
import { useNavigate } from 'react-router-dom'
function Hero() {
    const navigate = useNavigate()
    const CreatePage = () => navigate('/create_page')
  return (
  <div className="hero_main_container">
    <div className="title">
    <h1>Write. Share. Inspire.</h1>
    </div>
    <div className="description">
    <p>A simple publishing platform where your ideas become stories. Create, edit, and manage your posts with ease.</p>
    </div>
    <div className="buttons">
        <button onClick={CreatePage}>Create Post.</button>
        <button>Sign in.</button>
    </div>
  </div>
    )
}

export default Hero