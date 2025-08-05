import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, Container } from '@mui/material';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Blogs from './pages/Blogs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <Navbar />
        <Container sx={{ mt: { xs: 8, md: 10 }, minHeight: '80vh' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blogs" element={<Blogs />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </>
  );
}