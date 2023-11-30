import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../src/pages/Home'
import About from '../src/pages/About'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />
);

function App() {
  return (
    <Router>
        <Link to='/'>{Home}</Link>
        <Link to='/About'>{About}</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  )
}

