import './homepage.css'
import Hero from '../../components/Hero/Hero'
import Navigation from '../../components/navigation/Navigation'
import Blogcard_holder from '../../components/Blogcard_holder/BlogCardHolder'
import Footer from '../../components/footer/Footer.tsx'
function Homepage() {
  
  return (
    <div className="main_container">
        <Hero />
        <Blogcard_holder />
        <Footer />
    </div>
  )
}

export default Homepage