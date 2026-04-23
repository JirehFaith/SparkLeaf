import { useState } from 'react'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './pages/home'
import Login from "./pages/login"
import Booking from "./pages/book"
import SignUp from "./pages/register"



function App() {
  return (
    <>
      <Router>
          <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          
          
         
          
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
