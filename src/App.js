import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home'
import About from './pages/About/About'
// import Service from './pages/Service/Service'
import Course from './pages/Course/Course'
import Contact from './pages/Contact/Contact'
import Footer from './components/Footer/Footer';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/course' element={<Course />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App