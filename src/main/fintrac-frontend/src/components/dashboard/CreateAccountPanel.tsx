import React, {useState, useEffect, useRef, ChangeEvent, FormEvent } from 'react';
import { Form, FormSelect } from 'react-bootstrap';
import { XLg } from 'react-bootstrap-icons';
import CommonModal from '../common/CommonModal'

interface Props {
  toggleCreateAccount: () => void;
}

const CreateAccountPanel: React.FC<Props> = ({ toggleCreateAccount }) => {
  const [animate, setAnimate] = useState(false);
  const [accountName, setAccountName] = useState('');
  const [accountType, setAccountType] = useState('savings');
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({
    heading: "",
    title: "",
    content: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      setAnimate(true);
    }
  }, []);
  const hidePanel = () => {
    setAnimate(false);
    setTimeout(() => {toggleCreateAccount();}, 300);
  };
  const onAccountNameChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setAccountName(e.target.value);
    if (!e.target.value) { setError('Please enter account name'); }
    else { setError(''); }
  }
  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
    if (modalData.heading === 'Success!') {
//       navigate('/');
    }
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!accountName) { setError('Please enter account name'); }
    else {
      setError('');
      fetch('/api/account', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            account_name: accountName,
            account_type: accountType
          }),
        })
        .then((response) => {
          if (!response.ok) {
             throw new Error('Network response was not ok. Status: ' + response.status);
          }
          setModalData({
             heading: 'Success!',
             title: 'Success details',
             content: 'New account was successfully created.'
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
    }
  };
  return (
    <>
    <div className={'account-slide-panel '  + (animate ? 'show' : '')}>
      <div onClick={hidePanel} className="account-slide-panel-overlay"></div>
      <div className="account-slide-panel-content"
        style={{
           transform: animate ? 'translateX(0)' : 'translateX(100%)',
           transition: 'transform 0.3s ease-in-out',
         }}
       >
        <div className="account-slide-panel-header">
           <h3>Create an Account</h3>
           <button onClick={hidePanel}><XLg color="#07212a" size={28}/></button>
        </div>
        <Form onSubmit={handleSubmit} className="account-create-form">
           <h4 className="account-create-form-header">New Account Info</h4>
           <hr/>
           <div className="account-create-form-body">
            <Form.Group controlId="accountName">
              <Form.Label>Account Name</Form.Label>
              <Form.Control type="text" placeholder="Enter account name" value={accountName} onChange={ (e) => onAccountNameChange(e)} isInvalid={!!error} />
              <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="accountType">
              <Form.Label>Account Type</Form.Label>
              <FormSelect value={accountType} onChange={(e) => setAccountType(e.target.value)}>
                <option value="savings">Savings</option>
                <option value="checking">Checking</option>
                <option value="business">Business</option>
              </FormSelect>
            </Form.Group>
           </div>
           <hr/>
           <div className="account-create-form-footer">
             <button disabled={isLoading} type="submit">{isLoading ? 'Loading...' : 'Create'}</button>
           </div>
        </Form>
      </div>
    </div>
    <CommonModal show={showModal} onHide={handleCloseModal} heading={modalData.heading} title={modalData.title} content={modalData.content} />
    </>
  );
};

export default CreateAccountPanel;