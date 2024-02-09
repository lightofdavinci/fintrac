import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './VerifyEmail.css';

interface VerifyEmailData {
  message: string | null;
  statusCode: number;
}

const VerifyEmail: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<VerifyEmailData | null>(null);
  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/email/verification/' + token);
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
        const redirectTimeout = setTimeout(() => {
          navigate('/');
        }, 3000);
        return () => {
          clearTimeout(redirectTimeout);
        };
      } catch (error) {
        setLoading(false);
      }
    };
    fetchData();
  }, [navigate]);

  return (
    <div>
      {loading ? (
        <div className="verify-email-container">
          <h3>Please wait</h3>
          <h2>Processing verification of the email</h2>
          <div className="verify-email-loading-spinner-wrap --relative">
            <div className="verify-email-loading-spinner"></div>
          </div>
        </div>
      ) : (
      <div className="verify-email-container">{
        data && <div>
          {data.statusCode === 200 ? (
            <>
              <h3>Success!</h3>
              <h2>Redirecting to login page...</h2>
              <p>{data.message}</p>
            </>
          ) : (
            <>
              <h3>Failure!</h3>
              <h2>Please try again</h2>
              <p>{data.message}</p>
            </>
          )}
        </div>
      }</div>
      )}
    </div>
  );
};

export default VerifyEmail;