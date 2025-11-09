import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuth(null);
    localStorage.removeItem('auth');
    navigate('/login');
  };

  return (
    <header>
      <div className="container header-container">
        <Link to="/" className="logo">
          Trail<span>Makers</span>
        </Link>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><a href="/#treks">Popular Treks</a></li>
            <li><a href="/#discover">Discover</a></li>
            <li><a href="/#about">About Us</a></li>
            <li><a href="/#packages">Packages</a></li>
            <li><a href="/#reviews">Reviews</a></li>
            <li><a href="/#contact">Contact</a></li>
            {auth ? (
              <>
                <li><Link to="/cart">Cart</Link></li>
                <li><button onClick={handleLogout} className="btn">Logout</button></li>
              </>
            ) : (
              <>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
              </>
            )}
          </ul>
        </nav>
        <div className="mobile-menu">
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </header>
  );
};

export default Navbar;