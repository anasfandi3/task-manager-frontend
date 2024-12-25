import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import AuthCard from '@/components/auth/AuthCard.tsx';
import Axios from '@/api/Axios';

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    setLoading(true);

    try {
      const response = await Axios.post(`register`, {
        username,
        email,
        password,
        password_confirmation: passwordConfirmation,
      });
      if (response.status === 201){
        navigate('/login');
      }
    } catch (err: any) {
      console.error('error:', err);
    } finally {
      setLoading(false); 
    }
  };
  return (
    <AuthCard title="Register">
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
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
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
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
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
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
                value={passwordConfirmation} 
                onChange={(e) => setPasswordConfirmation(e.target.value)} 
                type="password"
                className="form-control border-0 bg-dark text-white border-secondary"
                id="password_confirmation"
                placeholder="Confirm your password"
                required
              />
            </div>
            <div className="d-grid">
              <button type="submit" disabled={loading} className="btn btn-outline-success">
                  {loading ? <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                  </div> : 'Register'}
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
