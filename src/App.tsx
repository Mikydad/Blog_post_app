import './App.css'
import Homepage from './pages/homepage/Homepage'
import { Routes, Route } from 'react-router-dom'
import Create_page from './pages/createpages/Create_page'
import PostDetailPage from './components/PostDetailPage/PostDetailPage'
import Navigation from './components/navigation/Navigation'
function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/create_page' element={<Create_page />} />
        <Route path="/posts/:id" element={<PostDetailPage />} />
      </Routes>
    </>
  )
}

export default App
