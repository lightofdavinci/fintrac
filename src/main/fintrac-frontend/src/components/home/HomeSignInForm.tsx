import { FC, FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { ChevronRight } from 'react-bootstrap-icons';

const HomeSignInForm: FC = () => {
   const navigate = useNavigate();
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const [loading, setLoading] = useState(false);
   const handleSubmit = async (e: FormEvent) => {
      e.preventDefault();
      setLoading(true);

      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify({ username, password }),
      });

      setLoading(false);

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        localStorage.setItem('user_id', data.message);
        navigate('/dashboard');
      } else {
        console.error('Login failed');
      }
   };

  return (
    <>
      <div className="home-sign-in-form-container fade-in">
        <h2>Welcome back</h2>
        <form onSubmit={handleSubmit} className="home-sign-in-form">
          <div className="form-group">
            <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" required/><label>Username</label>
          </div>
          <div className="form-group">
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required/><label>Password</label>
          </div>
          <button disabled={loading} className="flex-centered" type="submit">{loading ? 'Loading...' : 'Sign In'}</button>
          <div className="form-link-row">
            <a href="#">Forgot username/password?</a>
            <ChevronRight color="#015ab4" size={14} />
          </div>
          <div className="form-link-row">
            <Link to={`/enrollment`}>Not enrolled? Sign up now.</Link>
            <ChevronRight color="#015ab4" size={14} />
          </div>
        </form>
      </div>
    </>
  )
}

export default HomeSignInForm
