import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const EmailConfirmedBody = (props) => {
  const [confirmed, setConfirmed] = useState(false);
  const [FailedMessage, setFailedMessage] = useState('');
   const [failed, setFailed] = useState(false);
  // const [token , setToken] = useState(null);

  const location = useLocation();
 

  useEffect(() => { 
    const searchParams = new URLSearchParams(location.search);
  const userid = searchParams.get('UserId');
  //setuserid(userid);
  const token = searchParams.get('token');
  //setToken(token);

    axios
      .get(`https://localhost:7226/api/Authentication/confirm-email?userid=${userid}&token=${token}`)
      .then((response) => {
        console.log('data1', response.data);
        if (response.data.succeeded) {
          setConfirmed(true);
          setFailed(false);
          console.log('success');
        } else {
          setConfirmed(false);
          setFailed(true);
          console.log('failed');
          setFailedMessage(response.data.message);
        }
      })
      .catch((error) => {
        // Handle error
        console.error('Error fetching data:', error);
        setFailed(true);
      });
  }, []);

  return (
    <Container>
      {confirmed ? (
        <>
          <img src="reg_success.png" alt="" style={{ width: '90px' }} />
          <Title>Email address confirmed successfully</Title>
        </>
      ) : failed?(<>
       <img src="bad.png" alt="" style={{ width: '60px' }} />
          <Title2>Failed to confirm email address.</Title2>
          <p>{FailedMessage}</p>
      </>)
      : (
        <>
          {' '}
         
          <p>Verifying... Please wait</p>
        </>
      )}

      <GoBackLink>
        <span
          style={{
            color: 'var(--Grey-400, #98a2b3)',
            fontSize: '16px',
            lineHeight: '22.399999618530273px',
            letterSpacing: '0.15px',
          }}
        >
          Go to{' '}
        </span>
        <Link to="/signin">
          <span
            style={{
              fontWeight: 600,
              textDecoration: 'underline',
              color: 'rgba(181,23,158,1)',
            }}
          >
            Login
          </span>
        </Link>
      </GoBackLink>
      {/* <Footer /> */}
    </Container>
  );
};

export default EmailConfirmedBody;

const Container = styled.div`
  align-items: center;
  border-radius: 16px;
  background-color: var(--White, #fff);
  display: flex;
  max-width: 418px;
  flex-direction: column;
  padding: 32px 40px;
`;

const Title = styled.div`
  color: var(--Main-Text, #101828);
  align-self: center;
  white-space: nowrap;
  font: 700 24px/140% Inter, sans-serif;
`;

const Title2 = styled.div`
  color: red;
  align-self: center;
  white-space: nowrap;
  font: 700 24px/140% Inter, sans-serif;
`;

const Label = styled.div`
  color: var(--Main-Text, #101828);
  letter-spacing: 0.15px;
  align-self: stretch;
  margin-top: 32px;
  font: 600 16px/140% Inter, sans-serif;
`;

const InputField = styled.input`
  color: #000;
  letter-spacing: 0.15px;
  white-space: nowrap;
  align-items: start;
  border-radius: 8px;
  border: 1px solid var(--Grey-300, #d0d5dd);
  background-color: var(--White, #fff);
  align-self: stretch;
  margin-top: 8px;
  justify-content: center;
  padding: 12px 60px 12px 16px;
  font: 400 16px/140% Inter, sans-serif;
`;

const GoBackLink = styled.div`
  letter-spacing: 0.15px;
  align-self: center;
  margin-top: 16px;
  white-space: nowrap;
  font: 400 14px/20px Inter, sans-serif;
`;
