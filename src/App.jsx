import React from 'react'
import About from './pages/About'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Project from './pages/Projects'
import Education from './pages/Education'
import Home from './pages/Home'
import NavBar from './components/NavBar'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App