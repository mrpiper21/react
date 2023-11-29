import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />
);

function About () {
  return (
    <h1>About page</h1>
  )
}

function Home () {
  return (
    <h1>Home page</h1>
  )
}

function App() {
  return (
    <Router>
      <Link to={'/'}>home</Link> <br />
      <Link to={'/About'}>About</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  )
}

