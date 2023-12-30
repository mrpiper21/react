import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom';

export default function NavBar({ user }) {
    const navigate = useNavigate()
    const handleLogout = async() => {
        try {
          const response = await fetch('http://localhost:5000/api/user/login')
          const data = response.json()
    
          if (data) {
            localStorage.removeItem('token', data.token)
            navigate('/')
          }
        } catch (err) {
          throw new Error(err);
        }
    }
    if (user) {
        return (
            <nav className='top-nav'>
              <Link to="/" className="prop">Home</Link>
              <Link to="/posts" className="prop">Posts</Link>
              <Link to="/events" className="prop">Events</Link>
              <Link to="/sermons" className="prop">Sermons</Link>
              <Link to="/about" className="prop">About</Link> 
              <button onClick={handleLogout} className="logout-btn"><FaSignOutAlt />Logout</button>
            </nav>
        )
    } else {
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
    
}