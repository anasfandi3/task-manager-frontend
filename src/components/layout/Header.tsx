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
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
};

export default Header;
