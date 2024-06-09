import { FC, useState, useEffect, useRef } from 'react'
import { Spinner } from 'react-bootstrap';
import { InfoCircleFill, ChevronUp, SlashCircle, CreditCard } from 'react-bootstrap-icons';
import CreateAccountPanel from './CreateAccountPanel'

type Accounts = {
  "account_id": string;
  "user_id": number;
  "account_type": string;
  "account_name": string;
  "account_number": string;
}[];

const DashboardAccounts: FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const [data, setData] = useState<Accounts>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const firstRender = useRef(true);
    useEffect(() => {
      if (firstRender.current) {
        firstRender.current = false;
        const fetchData = async () => {
          try {
            const response = await fetch('/api/accounts/' + localStorage.getItem('user_id'));
            const data = await response.json();
            setData(data);
          } catch (error) {
            console.error(error);
          } finally {
            setIsLoading(false);
          }
        };
        fetchData();
      }
    }, []);
  const accountList = data.map((account) => (
    <div key={account.account_id}>
      <h2>{account.account_name}</h2>
      <p>Account Number: {account.account_number}</p>
    </div>
  ));
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
          {accountList}
          {isLoading ? (
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              ) : (
          <div>
            <h3><SlashCircle color="#DC143C" size={32}/>No Registered Accounts</h3>
            <p>You don't have any registered accounts.</p>
            <p>Click below to create a new one.</p>
            <button onClick={toggleCreateAccount} className="create-account-btn flex-centered" type="button"><CreditCard color="#fff" size={18} style={{ minWidth: '18px'}} /> Create an Account</button>
          </div>
          )}
        </div>
      </div>
      {show && <CreateAccountPanel toggleCreateAccount={toggleCreateAccount} />}
    </>
  )
}

export default DashboardAccounts
