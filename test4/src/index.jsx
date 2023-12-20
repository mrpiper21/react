import { FaSignInAlt } from 'react-icons/fa'
import logo from './pages/Images/Logo4.jpg'
import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import { useState, useEffect } from 'react'


const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Posts = lazy(() => import('./pages/Posts'));
const Events = lazy(() => import('./pages/Events'));
const Sermons = lazy(() => import('./pages/Sermons'));
const Admin = lazy(() => import('./pages/Admin'));

ReactDOM.render(<App />, document.getElementById('root'));

const isValidEvent = (event) => {
  return (
    typeof event.id === 'string' && 
    typeof event.text === 'string' && 
    typeof event.date === 'object' && 
    event.date.hasOwnProperty('date')
  )
}

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
  const [events, setEvents] = useState([]); // Consistent naming convention
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch('http://localhost:5000/api/events');

        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }

        const data = await response.json();
        setEvents(data); // Update events state
        
        // Validate fetched data
        if (!Array.isArray(data) || data.some(item => !isValidEvent(item))) {
          throw new Error('Invalid event data received');
        }
      } catch (err) {
        setError(err); // Handle errors gracefully
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, []);// Runing effect when id or API_URL changes

  const handleClick = () =>{
    console.log('clicked')
  }
  return (
    <>
      <header className='nav-bar'>
        <div className='logo-div'>
          <img src={logo} alt="img" className='logo'/>
        </div>
        
        {/* <LefNav /> */}
        <NavBar />
      </header>
      <body>
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/posts' element={<Posts />} />
            <Route path='/events' element={<Events 
                  isLoading={isLoading}
                  handleClick={handleClick}
                  events={events}/>} />
            <Route path='/sermons' element={<Sermons />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </main>
      </body>
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

// function LefNav() {
//   return (
//     <div className='left-nav'>
//       <img src={logo2} alt="img" className='logo2'/>
//     </div>
//   )
// }
export default App;