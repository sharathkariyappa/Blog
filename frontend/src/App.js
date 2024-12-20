import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, CssBaseline } from '@mui/material';

import Navbar from './components/Navbar';
import Login from './components/Login';

function App() {
  return (
   <Router>
    <CssBaseline />
    <Navbar />
    <Container>
      <Routes>
        <Route path="/login" element={<Login />} />

      </Routes>
    </Container>
   </Router>
    
  );
}

export default App;
