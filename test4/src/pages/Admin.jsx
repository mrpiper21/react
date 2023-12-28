import logo from '../pages/Images/logo3.png'
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import AdminPanel from './AdminPanel';

const Admin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch('http://localhost:5000/api/user/login', {
            method: 'POST',
            headers: {
                'content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password },)
        })

        const data = await response.json();

        //if login is successful, redirect to home page
        if (response.status === 200 && data.token) {
            localStorage.setItem('token', data.token);
            navigate('/');
            // navigate('/admin-panel');
        } else {
            throw new Error('Attempt failed, Please try again')
        }
    }
    return (
      <div className="admindiv">
        <form onSubmit={handleSubmit} className='addmin-login-form'>
          <img src={logo} alt="img" className="adminlogo" />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Enter your email" />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Enter your password" />
          <button type='submit' className="bwit admin-btn">Login</button>
          <p className="add">Admins Only!</p>
        </form>
      </div>
    );
  };
  
  export default Admin;
