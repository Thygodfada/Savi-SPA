import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Footer from './components/Footer';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ResetPassword = (props) => {
  const location = useLocation();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleResetSubmit = async () => {
   
    const searchParams = new URLSearchParams(location.search);
      const email = searchParams.get('email');
      const token = searchParams.get('token');

      if(newPassword !== confirmPassword){
        toast.error("New password and confirm password do not match");
        return;
      }
      setLoading(true);
    await axios.post(
      'https://localhost:7226/api/Authentication/reset-password',
      {          
        email,
          token,
          newPassword,
          confirmPassword
      }
    ).then(response => {
      console.log("data",response.data);
      if(response.data.succeeded){
        Swal.fire('Successful',response.data.message,'success').then(() => {
          navigate('/signin');
        });
       
      }else{
        toast.error(""+response.data.message);
      }
      
    }).catch(error => {
      if (error.response) {
        toast.error("a "+error.response.data.title);
        console.log('Server responded with error status:', error.response);
      } else if (error.request) {
        console.log('No response received from server:', error.request);
      } else {
        console.log('Error setting up request:', error.message);
      }
    });
    setLoading(false);
  }

  return (
    <MainContainer>
      <Link style={{ textDecoration: 'none' }} to="/">
        <Logo>Savi.</Logo>
      </Link>
      <Container>
        <ContentWrapper>
          <Title>Reset your password</Title>
          <SubTitle>New Password</SubTitle>
          <PasswordInput value={newPassword} onChange={(e)=>setNewPassword(e.target.value)} type="password" placeholder="Enter new password" />
          <SubTitle>Confirm New Password</SubTitle>
          <PasswordInput type="password" onChange={(e)=>setConfirmPassword(e.target.value)}  value={confirmPassword} placeholder="Confirm new password" />
          <ResetButton disabled={loading} onClick={handleResetSubmit}>{loading?'Resetting...':'Reset Password'}</ResetButton>
          <Footer />
        </ContentWrapper>
      </Container>
    </MainContainer>
  );
};

export default ResetPassword;

const MainContainer = styled.span`
  align-items: start;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 0 80px 0 50px;
  @media (max-width: 991px) {
    flex-wrap: wrap;
    padding: 0 20px;
  }
`;
const Container = styled.div`
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  align-self: stretch;
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
  padding: 50px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;
const Logo = styled.div`
  color: var(--primary-color, #b5179e);
  text-align: center;
  letter-spacing: 0.15px;
  margin-top: 50px;
  font: 700 24px/140% Bodoni Moda, sans-serif;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const ContentWrapper = styled.div`
  align-items: center;
  border-radius: 16px;
  background-color: var(--White, #fff);
  display: flex;
  margin-top: 30px;
  width: 100%;
  max-width: 400px;
  flex-direction: column;
  padding: 32px;

  @media (max-width: 991px) {
    padding: 20px;
  }
`;

const Title = styled.div`
  color: var(--Main-Text, #101828);
  align-self: center;
  white-space: nowrap;
  font: 700 24px/140% Inter, sans-serif;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const SubTitle = styled.div`
  color: var(--Main-Text, #101828);
  letter-spacing: 0.15px;
  align-self: stretch;
  margin-top: 32px;
  font: 600 16px/140% Inter, sans-serif;
`;

const PasswordInput = styled.input`
  color: var(--Main-Text, #101828);
  white-space: nowrap;
  align-items: start;
  border-radius: 8px;
  border: 1px solid var(--Grey-300, #d0d5dd);
  background-color: var(--White, #fff);
  align-self: stretch;
  margin-top: 8px;
  padding: 12px 16px;
  font: 400 14px/143% Inter, sans-serif;

  @media (max-width: 991px) {
    padding: 12px;
  }
`;

const ResetButton = styled.button`
  color: var(--White, #fff);
  letter-spacing: 0.15px;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: var(--Primary-Color, #b5179e);
  align-self: stretch;
  margin-top: 24px;
  padding: 12px;
  font: 500 16px/140% Inter, sans-serif;
border:none;
  @media (max-width: 991px) {
    padding: 12px;
  }
`;

const PrivacyPolicy = styled.div`
  color: #000;
  font: 500 18px Inter, sans-serif;
`;

const CopyrightText = styled.div`
  color: #000;
  font: 500 18px Inter, sans-serif;
`;
