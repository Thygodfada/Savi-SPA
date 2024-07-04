import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Footer from './Footer';

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

const SubmitButton = styled.div`
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
`;

const GoBackLink = styled.div`
  letter-spacing: 0.15px;
  align-self: center;
  margin-top: 16px;
  white-space: nowrap;
  font: 400 14px/20px Inter, sans-serif;
`;

const RegSuccessBody = (props) => {
  return (
    <Container>
      <img src='reg_success.png' alt='' style={{width:'100px'}} />
      <Title>Registration Successful</Title>
      <Description>
        A confirmation link has been sent to your email. Please click on that link to confirm your email.
      </Description>
      
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
          >Homepage
           
          </span>
        </Link>
      </GoBackLink>
      <Footer />
    </Container>
  );
};

export default RegSuccessBody;
