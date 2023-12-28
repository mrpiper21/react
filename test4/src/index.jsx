import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { UserProvider} from './pages/features/usercontext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import { useState, useEffect } from 'react'
import MainLayout from './pages/components/MainLayout'

const Admin = lazy(() => import('./pages/Admin'));
const AdminPanel = lazy(() => import('./pages/AdminPanel'))

ReactDOM.render(<App />, document.getElementById('root'));

function App() {
  const [user, setUser] = useState(null)

  //Loadi usrdata from localStorage when app starts
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
  }, [])

  // Save userdata to localStorage whenever it changes
  useEffect (() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user))
    } else {
      localStorage.removeItem('user')
    }
  }, [user])
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
            <Route path="/admin" element={<Admin />} />
            <Route path="admin-panel" element={<AdminPanel />} />
            <Route path="/*" element={<MainLayout />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

// function LefNav() {
//   return (
//     <div className='left-nav'>
//       <img src={logo2} alt="img" className='logo2'/>
//     </div>
//   )
// }
export default App;