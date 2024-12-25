import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthCard from '@/components/auth/AuthCard.tsx';
import Axios from '@/api/Axios'
import useUserStore from '@/store/UserStore';

const Login = () => {
    const {setUser} = useUserStore();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        
        setLoading(true);
    
        try {
          const response = await Axios.post(`login`, {
            email,
            password,
          });
          const token = response.data.token;
          const user = response.data.user;
          setUser(user, token);
          navigate('/');
        } catch (err: any) {
          console.error('Login error:', err);
        } finally {
          setLoading(false); 
        }
      };
    return (
        <AuthCard title="Login">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control border-0" id="email" placeholder="Enter your email" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control border-0" id="password" placeholder="Enter your password" required />
                </div>
                <div className="d-grid">
                    <button type="submit" disabled={loading} className="btn btn-outline-primary">
                        {loading ? <div className="spinner-border" role="status">
                            <span className="visually-hidden">Logging in...</span>
                        </div> : 'Login'}
                    </button>
                </div>
            </form>
            <div className="text-center mt-3">
                Don't have an account?<Link to="/register"> Register</Link>
            </div>
        </AuthCard>
    );
};

export default Login;
