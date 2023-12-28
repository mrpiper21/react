import { FaSignInAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom';

export default function NavBar() {
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