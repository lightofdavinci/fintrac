// import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'react-bootstrap-icons';

function HomeSignInForm() {
//   const [count, setCount] = useState(0)
  return (
    <>
      <div className="home-sign-in-form-container fade-in">
        <h2>Welcome back</h2>
        <form className="home-sign-in-form">
          <div className="form-group">
            <input type="text" required/><label>Username</label>
          </div>
          <div className="form-group">
            <input type="password" required/><label>Password</label>
          </div>
          <button className="flex-centered" type="submit">Sign in</button>
          <div className="form-link-row">
            <a href="#">Forgot username/password?</a>
            <ChevronRight color="#015ab4" size={14} />
          </div>
          <div className="form-link-row">
            <Link to={`/enrollment`}>Not enrolled? Sign up now.</Link>
            <ChevronRight color="#015ab4" size={14} />
          </div>
        </form>
{/*        <button onClick={() => setCount((count) => count + 1)}>
           count is {count}
         </button> */}
      </div>
    </>
  )
}

export default HomeSignInForm
