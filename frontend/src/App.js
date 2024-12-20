import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, CssBaseline } from '@mui/material';

import Navbar from './components/Navbar';
import Login from './components/Login';
import SignUp from './components/Signup';
import BlogList from './components/BlogList';

function App() {
  return (
   <Router>
    <CssBaseline />
    <Navbar />
    <Container>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/bloglist" element={<BlogList />} />

      </Routes>
    </Container>
   </Router>
    
  );
}

export default App;
