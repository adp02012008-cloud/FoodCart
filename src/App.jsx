import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './Pages/Home.jsx'
import Sucess from './Pages/Sucess.jsx'

function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sucess" element={<Sucess/>} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
