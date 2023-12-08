import { FaSignInAlt } from 'react-icons/fa'
import logo from './pages/Images/Logo4.jpg'
import logo2 from './pages/Images/19_Psa.jpg'
import Calender from './pages/Calender';
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
      <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/admin" element={<Admin />} />
            <Route path="/*" element={<MainLayout />} />
          </Routes>
      </Suspense>
    </Router>
  )
}

function MainLayout() {
  return (
    <>
      <header className='nav-bar'>
        <img src={logo} alt="img" className='logo'/>
        <LefNav />
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/events' element={<Events />} />
          <Route path='/sermons' element={<Sermons />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </main>
    </>
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

function LefNav() {
  return (
    <div className='left-nav'>
      <img src={logo2} alt="img" className='logo2'/>
    </div>
  )
}
export default App;