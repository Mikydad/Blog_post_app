import './App.css'
import Homepage from './pages/homepage/Homepage'
import { Routes, Route } from 'react-router-dom'
import Create_page from './pages/createpages/Create_page'
import PostDetailPage from './components/PostDetailPage/PostDetailPage'
import Navigation from './components/navigation/Navigation'
import EditPage from './pages/editpage/EditPage'
function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/create_page' element={<Create_page />} />
        <Route path="/posts/:id" element={<PostDetailPage />} />
        <Route path="/posts/:id/edit" element={<EditPage />} />
      </Routes>
    </>
  )
}

export default App
