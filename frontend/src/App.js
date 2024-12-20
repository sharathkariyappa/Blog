import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, CssBaseline } from '@mui/material';

import Navbar from './components/Navbar';

function App() {
  return (
   <Router>
    <CssBaseline />
    <Navbar />
   </Router>
    
  );
}

export default App;
