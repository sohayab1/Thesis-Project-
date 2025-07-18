import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
// import Registration from './pages/Registration';
// import Login from './pages/Login';
// import About from './pages/About';
// import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      {/* TODO: add a shared Header/Nav component here */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/report" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
