import logo from '../Images/Logo4.jpg'
import NavBar from "./NavBar";
import { Routes, Route } from 'react-router-dom';
import { lazy, useState, useEffect, useContext } from 'react';
const Home = lazy(() => import('../Home'));
const About = lazy(() => import('../About'));
const Posts = lazy(() => import('../Posts'));
const Events = lazy(() => import('../Events'));
const Sermons = lazy(() => import('../Sermons'));

export default function MainLayout() {
    // const [user, setUser] = useContext(UserContext)
    const [events, setEvents] = useState([]); // Consistent naming convention
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const isValidEvent = (event) => {
        return (
          typeof event.id === 'string' && 
          typeof event.text === 'string' && 
          typeof event.date === 'object' && 
          event.date.hasOwnProperty('date')
        )
    }
  
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
          <img src={logo} alt="img" className='logo'/>
          
          {/* <LefNav /> */}
          <NavBar />
        </header>
        <body>
          <main>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/posts' element={<Posts />} />
              <Route path='/events' element={<Events 
                    // user={user}
                    isLoading={isLoading}
                    handleClick={handleClick}
                    events={events}/>}
                     />
              <Route path='/sermons' element={<Sermons />} />
              <Route path='/about' element={<About />} />
            </Routes>
          </main>
        </body>
      </>
    )
  }
  