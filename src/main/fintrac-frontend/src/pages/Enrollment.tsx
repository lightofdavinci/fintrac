// import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'react-bootstrap-icons';
import enrollmentBg from '../assets/images/enrollment.jpg';
import './Enrollment.css'

function Enrollment() {
//   const [count, setCount] = useState(0)
  return (
    <>
      <img className="enrollment-bg" src={enrollmentBg} alt="crowd"/>
      <div className="enrollment-container">
        <Link to={`/`} className="enrollment-btn-back"><ArrowLeft color="#333" size={24} /></Link>
        <h1>Thanks for enrolling</h1>
        <h2>We need a bit more info to verify your identity.</h2>
        <form className="enrollment-form">
          <div className="form-group">
            <input type="text" required/><label>Username</label>
          </div>
          <div className="form-row">
            <div className="form-group">
              <input type="text" required/><label>First name</label>
            </div>
            <div className="form-group">
              <input type="text" required/><label>Last name</label>
            </div>
          </div>
          <div className="form-group">
            <input type="email" required/><label>Email</label>
          </div>
          <div className="form-group">
            <input type="password" required/><label>Password</label>
          </div>
          <button className="flex-centered" type="submit">Register</button>
          <Link to={`/`}>Already Registered User? Click here to login</Link>
        </form>
      </div>
    </>
  )
}

export default Enrollment
