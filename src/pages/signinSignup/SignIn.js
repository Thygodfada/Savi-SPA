import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import SignInInput from '../../components/SignInInput';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [signInAttempted, setSignInAttempted] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );
    return JSON.parse(jsonPayload);
  }

  const responseGoogleSuccess = async (response) => {
    console.log(response);
    setSignInAttempted(true);
    axios
      .post(
        `https://localhost:7226/api/Authentication/signin-google/${response.credential}`
      )
      .then((backendResponse) => {
        if (backendResponse.data.succeeded) {
          let val = backendResponse.data;
          localStorage.setItem('email', val.data[0]);
          localStorage.setItem('userId', val.data[3]);
          localStorage.setItem('fullname', val.data[2]);
          localStorage.setItem('walletNumber', val.data[1]);
          toast.success(backendResponse.data.message);
          if(val.data[0]==="admin@gmail.com"){
            localStorage.setItem('userRole', "Admin");
          }else{
            localStorage.setItem('userRole', "User");
          }
          navigate('/dashboard');
        } else {
          toast.error(backendResponse.data.message);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const responseGoogleFailure = (error) => {
    setSignInAttempted(true);
    setLoginError('Google Sign-In failed. Please try again.');
    console.error('Google Sign-In failed. Please try again.', error);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      alert('Input your email and password');
      toast.error('Input your email and password');
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(
        'https://localhost:7226/api/Authentication/Login',
        {
          email,
          password,
        }
      );

      const data = response.data;

      if (data.succeeded) {
        
        const payload = parseJwt(data.data.jwToken);

        const role =
          payload[
            'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
          ];

          if(role==="User"){
            const response = await fetch(
              `https://localhost:7226/api/Wallet/GetWalletByUserId?userId=${payload.sub}`
            );
            const result = await response.json();
            
            if (result.succeeded) {
              //toast.success(data.message);
              console.log('WN', result);
              localStorage.setItem('walletNumber', result.data.walletNumber);
              localStorage.setItem('email', email);
              localStorage.setItem('userId', payload.sub);
              localStorage.setItem('fullname', payload.given_name);
              localStorage.setItem('userRole', role);
              navigate('/dashboard');
            } else {
              toast.error('Error retriving wallet');
            }
          }else{
            localStorage.setItem('email', email);
              localStorage.setItem('userId', payload.sub);
              localStorage.setItem('fullname', payload.given_name);
              localStorage.setItem('userRole', role);
              navigate('/dashboard');
          }

        
      } else {
        toast.error('' + data.message);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error('Error. ' + error);
    }
  };

  return (
    <SignInRoot>
      <FrameContainer1>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          {' '}
          <Savi>Savi.</Savi>
        </Link>

        <LoginAuthenticationFrameWrapper>
          <LoginAuthenticationFrame>
            <EasyGroupSavings>Easy Group Savings</EasyGroupSavings>
            <SaveCollectivelyWith>
              Save collectively with rotating lump sum payouts, eliminating
              risks of traditional methods.
            </SaveCollectivelyWith>
            <Pagination>
              <EllipsePlaceholder />
              <FrameContainer />
              <EllipsePlaceholder />
              <EllipsePlaceholder />
            </Pagination>
          </LoginAuthenticationFrame>
        </LoginAuthenticationFrameWrapper>
      </FrameContainer1>
      <LoginauthenticationParent>
        <Loginauthentication>
          <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/">
            <Savi1>Savi.</Savi1>
          </Link>
          <Text1>Welcome back to Savi.</Text1>
          <FrameContainer2>
            <FrameParent>
              <ButtondefaultParent>
                <GoogleContainer>
                  <GoogleLogin
                    onSuccess={responseGoogleSuccess}
                    onError={responseGoogleFailure}
                  />
                </GoogleContainer>
                <DividerParent>
                  <DividerIcon loading="eager" alt="" src="/divider.svg" />
                  <Text3>OR</Text3>
                  <DividerIcon loading="eager" alt="" src="/divider.svg" />
                </DividerParent>
              </ButtondefaultParent>
              <FrameGroup>
                <ButtondefaultParent>
                  <ButtondefaultParent>
                    <SignInInput
                      id="email"
                      label="Email Address"
                      placeholder="Enter your email"
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />

                    <SignInInput
                      id="password"
                      label="Password"
                      placeholder="***********************"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </ButtondefaultParent>
                  <Link to="/reset-password">
                    <CTA>Forgot password</CTA>
                  </Link>
                </ButtondefaultParent>
                <Ctadefault onClick={handleSignIn}>
                  <Text7 disabled={loading}>
                    {loading ? 'Login in...' : 'Login'}
                  </Text7>
                </Ctadefault>
              </FrameGroup>
            </FrameParent>
            <FooterFrame>
              <DontHaveAn>{`Don’t have an account ? `}</DontHaveAn>
              <Link to="/signup">
                <SignUpHere>Sign Up here</SignUpHere>
              </Link>
            </FooterFrame>
          </FrameContainer2>
        </Loginauthentication>
        <PrivacyPolicyParent>
          <PrivacyPolicy>Privacy Policy</PrivacyPolicy>
          <PrivacyPolicy>Copyright {new Date().getFullYear()}</PrivacyPolicy>
        </PrivacyPolicyParent>
      </LoginauthenticationParent>
    </SignInRoot>
  );
};

export default SignIn;

const Savi = styled.h3`
  margin: 0;
  position: relative;
  font-size: inherit;
  letter-spacing: 0.15px;
  line-height: 140%;
  font-weight: 700;
  text-decoration: none;
  color: white;
  font-family: inherit;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
    line-height: 1.69rem;
  }
`;
const GoogleContainer = styled.div`
  margin: auto;
  text-align: center;
`;
const EasyGroupSavings = styled.h1`
  margin: 0;
  position: relative;
  font-size: inherit;
  letter-spacing: 0.25px;
  line-height: 140%;
  font-weight: 600;
  font-family: inherit;
  @media screen and (max-width: 950px) {
    font-size: 1.63rem;
    line-height: 2.25rem;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
    line-height: 1.69rem;
  }
`;
const SaveCollectivelyWith = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--body-textmedium-16-size);
  letter-spacing: 0.15px;
  line-height: 140%;
  font-weight: 600;
  text-align: center;
`;
const EllipsePlaceholder = styled.div`
  position: relative;
  border-radius: 50%;
  background-color: var(--color-gainsboro);
  width: 0.25rem;
  height: 0.25rem;
`;
const FrameContainer = styled.div`
  position: relative;
  border-radius: 100px;
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
const LoginAuthenticationFrame = styled.div`
  width: 25.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1.75rem;
  max-width: 100%;
`;
const LoginAuthenticationFrameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0rem 1.88rem 0rem 1.44rem;
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: var(--headline-semi-bold-32-size);
  font-family: var(--body-textmedium-16);
  @media screen and (max-width: 750px) {
    padding-left: var(--padding-8xl);
    padding-right: 0.44rem;
    box-sizing: border-box;
  }
`;
const FrameContainer1 = styled.div`
  background-color: rgba(0, 0, 0, 0.25);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-31xl) 3.38rem 13.44rem;
  box-sizing: border-box;
  gap: 16rem;
  min-width: 42.81rem;
  max-width: 100%;
  z-index: 1;
  @media screen and (max-width: 1125px) {
    flex: 1;
  }
  @media screen and (max-width: 1050px) {
    padding-top: var(--padding-13xl);
    padding-bottom: 8.75rem;
    box-sizing: border-box;
  }
  @media screen and (max-width: 750px) {
    gap: 18rem;
    padding-left: var(--padding-8xl);
    padding-right: var(--padding-8xl);
    box-sizing: border-box;
    min-width: 100%;
  }
  @media screen and (max-width: 450px) {
    gap: 9rem;
    padding-top: var(--padding-2xl);
    padding-bottom: 5.69rem;
    box-sizing: border-box;
  }
`;
const Savi1 = styled.h1`
  margin: 0;
  position: relative;
  font-size: 2.5rem;
  letter-spacing: 0.15px;
  line-height: 10%;
  font-weight: 700;
  font-family: var(--font-bodoni-moda);
  text-align: center;
  @media screen and (max-width: 1050px) {
    font-size: var(--headline-semi-bold-32-size);
    line-height: 2.81rem;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-5xl);
    line-height: 2.13rem;
  }
`;
const Text1 = styled.div`
  position: relative;
  letter-spacing: 0.15px;
  line-height: 140%;
  font-weight: 600;
  color: var(--main-text);
`;

const DividerIcon = styled.img`
  position: relative;
  width: 8.75rem;
  height: 0.06rem;
`;
const Text3 = styled.div`
  position: relative;
  font-size: var(--button-normal-14-size);
  line-height: 1.25rem;
  font-family: var(--body-textmedium-16);
  color: var(--grey-400);
  text-align: left;
`;
const DividerParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.63rem;
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const ButtondefaultParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base);
`;

const CTA = styled.div`
  position: relative;
  font-size: var(--body-textmedium-16-size);
  text-decoration: underline;
  letter-spacing: 0.15px;
  line-height: 140%;
  font-family: var(--body-textmedium-16);
  color: var(--blue-600);
  text-align: left;
  cursor: pointer;
`;
const Text7 = styled.div`
  position: relative;
  font-size: var(--body-textmedium-16-size);
  letter-spacing: 0.15px;
  line-height: 140%;
  font-weight: 500;
  font-family: var(--body-textmedium-16);
  color: var(--white);
  text-align: left;
`;
const Ctadefault = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-xs) var(--padding-base);
  background-color: var(--primary-color);
  align-self: stretch;
  border-radius: var(--br-5xs);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--gap-5xs);
`;
const FrameGroup = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
`;
const FrameParent = styled.form`
  margin: 0;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
`;
const DontHaveAn = styled.span`
  letter-spacing: 0.15px;
  line-height: 140%;
`;
const SignUpHere = styled.span`
  font-size: var(--button-normal-14-size);
  text-decoration: underline;
  line-height: 1.25rem;
  font-weight: 600;
  color: var(--primary-color);
`;
const FooterFrame = styled.div`
  position: relative;
  cursor: pointer;
`;
const FrameContainer2 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-base);
  color: var(--grey-400);
`;
const Loginauthentication = styled.div`
  border-radius: 16px;
  background-color: var(--white);
  width: 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  // padding: var(--padding-13xl) 2.5rem;
  box-sizing: border-box;
  gap: 2rem;
  max-width: 100%;
  @media screen and (max-width: 750px) {
    padding-top: var(--padding-2xl);
    padding-bottom: var(--padding-2xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-base);
  }
`;
const PrivacyPolicy = styled.div`
  position: relative;
  font-weight: 500;
`;
const PrivacyPolicyParent = styled.div`
  align-self: stretch;
  overflow: hidden;
  margin-top: 3em;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  gap: var(--gap-xl);
  font-size: var(--font-size-lg);
  color: var(--color-black);
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const LoginauthenticationParent = styled.div`
  flex: 1;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 4.5rem var(--padding-31xl);
  box-sizing: border-box;
  gap: 4.55rem;
  width: 100%;
  min-width: 30.69rem;
  max-width: 100%;
  text-align: left;
  font-size: var(--body-textmedium-16-size);
  color: var(--primary-color);
  font-family: var(--body-textmedium-16);
  @media screen and (max-width: 1050px) {
    gap: 6.63rem;
    padding: 3.25rem 1.56rem;
    box-sizing: border-box;
  }
  @media screen and (max-width: 750px) {
    min-width: 100%;
  }
  @media screen and (max-width: 450px) {
    gap: 3.31rem;
    padding-top: var(--padding-15xl);
    padding-bottom: var(--padding-15xl);
    box-sizing: border-box;
  }
`;
const SignInRoot = styled.div`
  position: relative;
  // width: 80%;
  // height:110vh;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-0xs);
  background-image: url('/sign-in@3x.png');
  background-size: 100% 110%;
  background-repeat: no-repeat;
  background-position: left;
  letter-spacing: normal;
  text-align: center;
  font-size: var(--font-size-5xl);
  color: var(--white);
  font-family: var(--font-bodoni-moda);
  @media screen and (max-width: 1125px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 600px) {
    background-size: cover;
  }
  @media screen and (max-width: 800px) {
    background-size: cover;
  }
`;
