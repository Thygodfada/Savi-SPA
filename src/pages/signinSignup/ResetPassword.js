import { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Input from "../../components/Input";
import {toast} from 'react-toastify';
import axios from "axios";



const ResetPassword = () => {
  const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleResetPassword = async (e) => {
      e.preventDefault();
      if(email==""){
        toast.error('Input your email');
        return;
      }
     
      try {
        const response = await axios.post('https://localhost:7226/api/Authentication/forgot-password', {
          email
        });
        
        const data = response.data;
        console.log(data);
        if(data.succeeded){
          toast.success('Success. '+data.message);
        }else{
          toast.error('Error. '+data.message);
        }
        //localStorage.setItem('token', token);
        //navigate('/user_dashboard'); // Redirect to your dashboard or desired route
      } catch (error) {
        console.error('Error', error);
        toast.error('Error. '+error);
      }
    };


  const onTextClick = useCallback(() => {
    // Please sync "Sign in" to the project
  }, []);

  return (
    <ResetPasswordRoot>
      <ForgetPasswordauthenticationParent>
        <ForgetPasswordauthentication>
          <TextParent>
            <Text1>Reset your password</Text1>
            <Text2>
              <EnterYourEmail>
                Enter your email below and we’ll send you
              </EnterYourEmail>
              <EnterYourEmail>
                instructions on how to reset your password.
              </EnterYourEmail>
            </Text2>
          </TextParent>
          <FrameParent>
            <FrameWrapper>
              <FrameGroup>
                <FrameWrapper>
                  <FrameWrapper>

                    
                    <Input value={email} onChange={(e)=>setEmail(e.target.value)} name="email" id="email"  label="Email Address" type="email" placeholder="Enter your email" />
                  </FrameWrapper>
                </FrameWrapper>
                <Ctadefault onClick={handleResetPassword}>
                  <Text4>Send reset instructions</Text4>
                </Ctadefault>
              </FrameGroup>
            </FrameWrapper>
            <Text5 onClick={onTextClick}>
              <GoBackTo>{`Go back to `}</GoBackTo>
              <Link to="/signin">
              <SignInHere>Sign in here</SignInHere>
              </Link>
              
            </Text5>
          </FrameParent>
        </ForgetPasswordauthentication>
        <PrivacyPolicyParent>
          <PrivacyPolicy>Privacy Policy</PrivacyPolicy>
          <PrivacyPolicy>Copyright 2022</PrivacyPolicy>
        </PrivacyPolicyParent>
      </ForgetPasswordauthenticationParent>
      <FrameParent1>
        <BoostYourSavingsParent>
          <BoostYourSavings>Boost Your Savings</BoostYourSavings>
          <SetGoalsAutomate>
            Set goals, automate transfers, and watch your personal savings grow
            effortlessly.
          </SetGoalsAutomate>
        </BoostYourSavingsParent>
        <Pagination>
          <PaginationChild />
          <PaginationChild />
          <PaginationInner />
          <PaginationChild />
        </Pagination>
      </FrameParent1>
      <SaviWrapper>
        <Savi1>Savi.</Savi1>
      </SaviWrapper>
    </ResetPasswordRoot>
  );
};

export default ResetPassword;


const Text1 = styled.b`
  position: relative;
  line-height: 140%;
`;
const EnterYourEmail = styled.p`
  margin: 0;
`;
const Text2 = styled.div`
  position: relative;
  font-size: var(--body-text-normal-16-size);
  letter-spacing: 0.15px;
  line-height: 140%;
  color: var(--grey-400);
  text-align: center;
`;
const TextParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const Text3 = styled.div`
  position: relative;
  letter-spacing: 0.15px;
  line-height: 140%;
  font-weight: 600;
`;
const Iconadd1 = styled.img`
  position: relative;
  width: 1.25rem;
  height: 1.25rem;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
`;
const Savi = styled.div`
  position: relative;
  letter-spacing: 0.15px;
  line-height: 140%;
`;
const Buttondefault = styled.div`
  border-radius: var(--br-5xs);
  background-color: var(--white);
  border: 1px solid var(--grey-300);
  box-sizing: border-box;
  width: 20rem;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-xs) var(--padding-base);
  gap: var(--gap-5xs);
  color: var(--grey-400);
`;
const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const FrameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Text4 = styled.div`
  position: relative;
  letter-spacing: 0.15px;
  line-height: 140%;
  font-weight: 500;
`;
const Ctadefault = styled.div`
  border-radius: var(--br-5xs);
  background-color: var(--primary-color);
  width: 20rem;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xs) var(--padding-base);
  box-sizing: border-box;
  gap: var(--gap-5xs);
  cursor: pointer;
  color: var(--white);
`;
const FrameGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.5rem;
`;
const GoBackTo = styled.span`
  letter-spacing: 0.15px;
  line-height: 140%;
`;
const SignInHere = styled.span`
  font-size: 0.88rem;
  text-decoration: underline;
  line-height: 1.25rem;
  font-weight: 600;
  color: var(--primary-color);
`;
const Text5 = styled.div`
  position: relative;
  cursor: pointer;
  color: var(--grey-400);
`;
const FrameParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  font-size: var(--body-text-normal-16-size);
`;
const ForgetPasswordauthentication = styled.div`
  border-radius: 16px;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem 2.5rem;
  gap: 2rem;
`;
const PrivacyPolicy = styled.div`
  position: relative;
  font-weight: 500;
`;
const PrivacyPolicyParent = styled.div`
  width: 40.94rem;
  height: 1.38rem;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  gap: 25rem;
  font-size: var(--font-size-lg);
  color: var(--color-black);
`;
const ForgetPasswordauthenticationParent = styled.div`
  position: absolute;
  top: calc(50% - 512px);
  left: calc(50% - 377px);
  background-color: var(--white);
  height: 64rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 5rem var(--padding-31xl);
  box-sizing: border-box;
`;
const BoostYourSavings = styled.div`
  position: relative;
  letter-spacing: 0.25px;
  line-height: 140%;
  font-weight: 600;
`;
const SetGoalsAutomate = styled.div`
  position: relative;
  font-size: var(--body-text-normal-16-size);
  letter-spacing: 0.15px;
  line-height: 140%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 29.75rem;
`;
const BoostYourSavingsParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1.88rem;
`;
const PaginationChild = styled.div`
  position: relative;
  border-radius: 50%;
  background-color: var(--color-gainsboro);
  width: 0.25rem;
  height: 0.25rem;
`;
const PaginationInner = styled.div`
  position: relative;
  border-radius: var(--br-81xl);
  background-color: var(--white);
  width: 1.25rem;
  height: 0.25rem;
  overflow: hidden;
  flex-shrink: 0;
`;
const Pagination = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--gap-9xs);
`;
const FrameParent1 = styled.div`
  position: absolute;
  top: 41.25rem;
  left: 6.56rem;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1.63rem;
  font-size: var(--headline-semi-bold-32-size);
  color: var(--white);
`;
const Savi1 = styled.b`
  position: relative;
  letter-spacing: 0.15px;
  line-height: 140%;
`;
const SaviWrapper = styled.div`
  position: absolute;
  top: 0rem;
  left: 0rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-31xl);
  text-align: center;
  color: var(--primary-color);
  font-family: var(--font-bodoni-moda);
`;
const ResetPasswordRoot = styled.div`
  position: relative;
  background-color: var(--white);
  width: 100%;
  height: 64rem;
  overflow: hidden;
  text-align: left;
  font-size: var(--headline-bold-24-size);
  color: var(--main-text);
  font-family: var(--body-text-normal-16);
`;