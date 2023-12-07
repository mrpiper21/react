import { FaSignInAlt } from 'react-icons/fa'
import logo from './pages/Images/Logo4.jpg'
import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Posts = lazy(() => import('./pages/Posts'));
const Events = lazy(() => import('./pages/Events'));
const Sermons = lazy(() => import('./pages/Sermons'));
const Admin = lazy(() => import('./pages/Admin'));

ReactDOM.render(<App />, document.getElementById('root'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <header className="nav-bar">
          <img src={logo} alt="img" className='logo'/>
          <div className='left-nav'>
            <h2>Left Nav</h2>
            <h2>Left Nav</h2>
            <h2>Left Nav</h2>
          </div>
          <NavBar />
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
      </Suspense>
    </Router>
  )
}

function NavBar() {
  return (
    <nav className='top-nav'>
      <Link to="/admin" className='admin-panel'><FaSignInAlt /></Link>
      <Link to="/" className="prop">Home</Link>
      <Link to="/posts" className="prop">Posts</Link>
      <Link to="/events" className="prop">Events</Link>
      <Link to="/sermons" className="prop">Sermons</Link>
      <Link to="/about" className="prop">About</Link>
    </nav>
  );
}

export default App;