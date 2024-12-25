// src/layout/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <div>
          <Link to="/" className="navbar-brand">Home</Link>
          <Link to="/about" className="navbar-brand">About</Link>
        </div>
        <div>
        <button className="btn btn-dark btn-sm navbar-btn">  
          <i className="fas fa-sign-out me-2"></i>
          Logout
        </button>  
        </div>
      </div>
    </nav>
  );
};

export default Header;
