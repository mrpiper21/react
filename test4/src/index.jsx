import React from 'react';
import ReactDOM from 'react-dom';
import { FaSignInAlt } from 'react-icons/fa'
import logo from './pages/Images/logo1.jpg'
import './index.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Posts from './pages/Posts';
import Events from './pages/Events';
import Sermons from './pages/Sermons';
import Admin from './pages/Admin';

ReactDOM.render(<App />, document.getElementById('root'));

function App() {
  return (
    <Router>
      <header className="nav-bar">
        <nav>
          <img src={logo} alt="img" className='logo'/>
          <Link to="/admin" className='admin-panel'><FaSignInAlt /></Link>
          <Link to="/" className="prop">Home</Link>
          <Link to="/posts" className="prop">Posts</Link>
          <Link to="/events" className="prop">Events</Link>
          <Link to="/sermons" className="prop">Sermons</Link>
          <Link to="/about" className="prop">About</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/events" element={<Events />} />
          <Route path="/sermons" element={<Sermons />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App;