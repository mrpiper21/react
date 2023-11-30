import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../src/pages/Home'
import About from '../src/pages/About'
import Posts from './pages/Posts';
import Events from './pages/Events';
import Sermons from './pages/Sermons';
import Nav from './pages/Nav';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />
);

function App() {
  return (
    <Router>
      <header>
        <nav >
          <Link to='/' className='prop'>Home</Link>
          <Link to='/Posts' className='prop'>Posts</Link>
          <Link to='/events' className='prop'>Events</Link>
          <Link to='/sermons' className='prop'>Sermons</Link>
          <Link to='/about' className='prop'>About</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/events" element={<Events />} />
        <Route path="/sermons" element={<Sermons />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  )
}

