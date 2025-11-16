import './App.css'
import Homepage from './pages/homepage/Homepage'
import { Routes, Route } from 'react-router-dom'
import Create_page from './pages/createpages/Create_page'
function App() {

  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/create_page' element={<Create_page />} />
    </Routes>
  )
}

export default App
