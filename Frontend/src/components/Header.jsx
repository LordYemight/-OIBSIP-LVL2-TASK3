import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/userContext'; // Assuming you have your UserContext defined in a separate file
import '../styles/Header.css';

const Header = () => {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();
  const loggedOut = () => {
    logout()
    if(logout) {
      navigate('/')
    }
  }
  return (
    <div>
      <nav className='nav'>
        <Link className='head' to="/">Home</Link>
        {user ? (
          <div className='loggedInHeader'>
            <span className='userName'>Welcome, {user.username}</span>
            <button onClick={loggedOut} className='logoutButton'>Logout</button>
          </div>
        ) : (
          <div className='reg'>
            <Link className='head' to="/login">Login</Link>
            <Link className='head' to="register">Register</Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
