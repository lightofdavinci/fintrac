import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'react-bootstrap-icons'
import enrollmentBg from '../assets/images/enrollment.jpg'
import CommonModal from '../components/common/CommonModal'
import './Enrollment.css'

const Enrollment: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  });
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({
    heading: "",
    title: "",
    content: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
    if (modalData.heading === 'Success!') {
      navigate('/');
    }
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.username && formData.first_name && formData.last_name && formData.email && formData.password) {
      setIsLoading(true);
      fetch('/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      .then((response) => {
        if (!response.ok) {
           throw new Error('Network response was not ok. Status: ' + response.status);
        }
        setModalData({
           heading: 'Success!',
           title: 'Success details',
           content: 'User was successfully registered. Please check and verify your email'
        })
        handleShowModal();
        setIsLoading(false);
      })
      .catch((error) => {
        setModalData({
          heading: 'Failure!',
          title: 'Failure details',
          content: error.message
        })
        handleShowModal();
        setIsLoading(false);
      });
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <>
      <img className="enrollment-bg" src={enrollmentBg} alt="crowd"/>
      <div className="enrollment-container">
        <Link to={`/`} className="enrollment-btn-back"><ArrowLeft color="#333" size={24} /></Link>
        <h1>Thanks for enrolling</h1>
        <h2>We need a bit more info to verify your identity.</h2>
        <form onSubmit={handleSubmit} className="enrollment-form">
          <div className="form-group">
            <input name="username"
              value={formData.username}
              onChange={handleChange}
              type="text" required/>
            <label>Username</label>
          </div>
          <div className="form-row">
            <div className="form-group">
              <input name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                type="text" required/>
               <label>First name</label>
            </div>
            <div className="form-group">
              <input name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                type="text" required/>
              <label>Last name</label>
            </div>
          </div>
          <div className="form-group">
            <input name="email"
              value={formData.email}
              onChange={handleChange}
              type="email" required/>
            <label>Email</label>
          </div>
          <div className="form-group">
            <input name="password"
              value={formData.password}
              onChange={handleChange}
              type="password" required/><label>Password</label>
          </div>
          <button className="flex-centered" type="submit" disabled={isLoading}>{isLoading ? 'Loading...' : 'Register'}</button>
          <Link to={`/`}>Already Registered User? Click here to login</Link>
        </form>
      </div>
      <CommonModal show={showModal} onHide={handleCloseModal} heading={modalData.heading} title={modalData.title} content={modalData.content} />
    </>
  )
}

export default Enrollment
