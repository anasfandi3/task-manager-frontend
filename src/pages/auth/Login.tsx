import React from 'react';
import { Link } from 'react-router-dom';
import AuthCard from '@/components/auth/AuthCard.tsx';

const Login = () => {
    
  return (
    <AuthCard title="Login">
        <form>
            <div className="mb-3">
                <label for="email" className="form-label">Email</label>
                <input type="email" className="form-control border-0" id="email" placeholder="Enter your email" required />
            </div>
            <div className="mb-3">
                <label for="password" className="form-label">Password</label>
                <input type="password" className="form-control border-0" id="password" placeholder="Enter your password" required />
            </div>
            <div className="d-grid">
                <button type="submit" className="btn btn-outline-primary">Login</button>
            </div>
        </form>
        <div className="text-center mt-3">
            Don't have an account?<Link to="/register"> Register</Link>
        </div>
    </AuthCard>
  );
};

export default Login;
