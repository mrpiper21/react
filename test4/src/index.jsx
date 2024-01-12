import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import { useState, useEffect } from 'react'
import UserContext from './pages/features/usercontext';
import MainLayout from './pages/components/MainLayout'

const Admin = lazy(() => import('./pages/Admin'));
const AdminPanel = lazy(() => import('./pages/AdminPanel'))

ReactDOM.render(<App />, document.getElementById('root'));

function App() {
  const [user, setUser] = useState(null)

  // const token = localStorage.getItem('token')
  useEffect(() => {
    const savedUser = localStorage.getItem('token');
    if (savedUser) {
      setUser(savedUser)
      console.log(user)
    }
  }, [user])

  // Save userdata to localStorage whenever it changes
  useEffect (() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user))
    } else {
      localStorage.removeItem('user')
    }
  }, [user])
  return (
    <UserContext.Provider value={{ user, setUser}}>
      <Router>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/admin" element={<Admin />} />
            <Route path="admin-panel" element={<AdminPanel />} />
            <Route path="/*" element={<MainLayout />} />
          </Routes>
        </Suspense>
      </Router>
    </UserContext.Provider>
  )
}

export default App;