import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css';
import Nav from './Components/Nav/Nav'
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Modal from './Components/Modal/Modal'
import Footer from './Components/Footer/Footer';
import Contact from './pages/Contact/Contact';
function App() {
  return (
    <BrowserRouter>

      {/* <Modal /> */}
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/projects" element={<Projects />} ></Route>
        <Route path="/contact" element={<Contact />} ></Route>

      </Routes>
      <Footer />

    </BrowserRouter>
  );
}

export default App;
