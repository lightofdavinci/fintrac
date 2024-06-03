import { FC, useState  } from 'react'
import { InfoCircleFill, ChevronUp, SlashCircle, CreditCard } from 'react-bootstrap-icons';
import CreateAccountPanel from './CreateAccountPanel'
const DashboardAccounts: FC = () => {
  const [show, setShow] = useState(false);
  const toggleCreateAccount = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="accounts-container">
        <div className="accounts-header">
          <h4>Bank accounts</h4>
          <div>
            <InfoCircleFill color="#07212a" size={18} style={{ minWidth: '18px'}} />
            <ChevronUp color="#07212a" size={18} style={{ minWidth: '18px'}} />
          </div>
        </div>
        <hr/>
        <div className="accounts-body">
          <h3><SlashCircle color="#DC143C" size={32}/>No Registered Accounts</h3>
          <p>You don't have any registered accounts.</p>
          <p>Click below to create a new one.</p>
          <button onClick={toggleCreateAccount} className="create-account-btn flex-centered" type="button"><CreditCard color="#fff" size={18} style={{ minWidth: '18px'}} /> Create an Account</button>
        </div>
      </div>
      {show && <CreateAccountPanel toggleCreateAccount={toggleCreateAccount} />}
    </>
  )
}

export default DashboardAccounts
