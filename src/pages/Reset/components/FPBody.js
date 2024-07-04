import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import axios from 'axios';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

const Body = (props) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const emailInputRef = useRef(null);

  const handleClick = async (e) => {
    const emailInput = emailInputRef.current;

    if (emailInput && !emailInput.checkValidity()) {
      emailInput.reportValidity();
      return;
    }
    if (email === '') {
      return;
    }

    setLoading(true);
    await axios.post(
      'https://localhost:7226/api/Authentication/forgot-password',
      {          
        email,
      }
    ).then(response => {
      console.log("data",response.data);
      if(response.data.succeeded){
        Swal.fire('Successful',response.data.message,'success');
        setEmail("");
      }else{
        toast.error(response.data.message);
      }
      setLoading(false);
    }).catch(error => {
      setLoading(false);
      if (error.response) {
        toast.error( error.response.data.title);
        console.error('Server responded with error status:', error.response.data.title);
      } else if (error.request) {
        console.error('No response received from server:', error.request);
      } else {
        console.error('Error setting up request:', error.message);
      }
    });

  };
  const setEmailText = (e) => {
    setEmail(e);
  };

  return (
    <Container>
      <Title>Reset your password</Title>
      <Description>
        Enter your email below and we’ll send you
        <br />
        instructions on how to reset your password.
      </Description>
      <Label>Email Address</Label>
      <InputField
        type="email"
        ref={emailInputRef}
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmailText(e.target.value)}
      />
      <SubmitButton onClick={handleClick} type="submit" disabled={loading}>
        {loading?'Sending...':'Send reset instructions'}
      </SubmitButton>
      <GoBackLink>
        <span
          style={{
            color: 'var(--Grey-400, #98a2b3)',
            fontSize: '16px',
            lineHeight: '22.399999618530273px',
            letterSpacing: '0.15px',
          }}
        >
          Go back to{' '}
        </span>
        <Link to="/">
          <span
            style={{
              fontWeight: 600,
              textDecoration: 'underline',
              color: 'rgba(181,23,158,1)',
            }}
          >
            Homepage
          </span>
        </Link>
      </GoBackLink>
      <Footer />
    </Container>
  );
};

export default Body;

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

const Description = styled.div`
  color: var(--Grey-400, #98a2b3);
  text-align: center;
  letter-spacing: 0.15px;
  align-self: stretch;
  margin-top: 8px;
  font: 400 16px/22px Inter, sans-serif;
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

const SubmitButton = styled.button`
  color: var(--White, #fff);
  letter-spacing: 0.15px;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: var(--Primary-Color, #b5179e);
  align-self: stretch;
  margin-top: 24px;
  padding: 12px 60px;
  font: 500 16px/140% Inter, sans-serif;
  border:none;
`;

const GoBackLink = styled.div`
  letter-spacing: 0.15px;
  align-self: center;
  margin-top: 16px;
  white-space: nowrap;
  font: 400 14px/20px Inter, sans-serif;
`;
