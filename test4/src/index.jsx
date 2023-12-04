import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../src/pages/Home'
import About from '../src/pages/About'
import Posts from './pages/Posts';
import Events from './pages/Events';
import Sermons from './pages/Sermons';
// import Nav from './pages/Nav'
import  logo from './pages/Images/Welcome1a.jpg'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />
);

function App() {

  return (
    <Router>
      <header>
        <nav >
          <img src={logo} alt="images " className='logo'/>
          {/* <h2 className='banner-font'>Prebytarian Church of Ghana</h2>
          <p className='logo-font'>Logos Congregation</p> */}
          <div className='prop'>
            <Link to='/'>Home</Link>
            <Link to='/Posts'>Posts</Link>
            <Link to='/events'>Events</Link>
            <Link to='/sermons'>Sermons</Link>
            <Link to='/about'>About</Link>
          </div>
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

