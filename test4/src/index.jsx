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

const handleClick = () =>{
  console.log('clicked')
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
  const API_URL = 'localhost:5000/api/events/:id'
  const [dueEvent, SetdueEvent] = useEffect([])

  useEffect(() => {
    const fetchevent = async() => {
      try {
        const response = await fetch(API_URL)
        const data = await response.json()
        SetdueEvent(data)
      } catch (err){
        console.log(err)
      }
    }

    fetchevent()
  }, [dueEvent])
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
                  handleClick={handleClick}
                  dueEvent={dueEvent}/>} />
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