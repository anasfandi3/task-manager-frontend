import React from 'react';
import { Link } from 'react-router-dom';
import AuthCard from '@/components/auth/AuthCard.tsx';

const Register = () => {
    
  return (
    <AuthCard title="Register">
        <form>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control border-0 bg-dark text-white border-secondary"
                id="username"
                placeholder="Enter your username"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control border-0 bg-dark text-white border-secondary"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control border-0 bg-dark text-white border-secondary"
                id="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password_confirmation" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control border-0 bg-dark text-white border-secondary"
                id="password_confirmation"
                placeholder="Confirm your password"
                required
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-outline-success">
                Register
              </button>
            </div>
          </form>
          <div className="text-center mt-3">
            Already have an account? <Link to="/login" >Login</Link>
          </div>
    </AuthCard>
  );
};

export default Register;
