// src/layout/Header.tsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useUserStore from '@/store/UserStore';
import { toast } from 'react-toastify';

const Header: React.FC = () => {
  const {logout} = useUserStore();
  const navigate = useNavigate();

  function handleClick() {
    logout();
    toast.success('Logged out successfully!');
    navigate('/login');
  }
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <div>
          <Link to="/" className="navbar-brand">Home</Link>
          <Link to="/about" className="navbar-brand">About</Link>
        </div>
        <div>
        <button onClick={handleClick} className="btn btn-dark btn-sm navbar-btn">  
          <i className="fas fa-sign-out me-2"></i>
          Logout
        </button>  
        </div>
      </div>
    </nav>
  );
};

export default Header;
