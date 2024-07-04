import { useState } from 'react';
import styled from 'styled-components';
import InputField from '../../components/Input';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const SignUp = () => {
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhone] = useState('');
  const [signInAttempted, setSignInAttempted] = useState(false);
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const responseGoogleSuccess = async (response) => {
    console.log(response);
    setSignInAttempted(true);
    axios
      .post(
        `https://localhost:7226/api/Authentication/signin-google/${response.credential}`
      )
      .then((backendResponse) => {
        console.log(backendResponse.data);
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

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        'https://localhost:7226/api/Authentication/Register',
        {
          firstName,
          lastName,
          email,
          password,
          phoneNumber,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

    //  const data = response.data;
      console.log("response",response);
      if (response.status===200) {
        if(response.data==="success"){
          navigate('/RegistrationSuccessful');
        }else{
          toast.error(""+response.data);
        }
        
      } else {
        toast.error("Failed to register user");
      }
      setLoading(false);
      
    } catch (error) {
      setLoading(false);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log("Error response status:", error.response.status);
        console.log("Response data:", error.response.data.message);
        toast.error('' + error.response.data.message);
      } else if (error.request) {
        // The request was made but no response was received
        console.log("No response received:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error:", error.message);
      }
      console.log("Config:", error.config);
    }
  };

  return (
    <SignUpRoot>
      <SignUpauthentication>
        <Link to="/" style={{ textDecoration: 'none',color:'inherit' }}>
          <Savi>Savi.</Savi>
        </Link>
        <Text1>Welcome to Savi.</Text1>
        <FrameParent>
          <FrameGroup>
           
            <FrameContainer>
              <FrameWrapper>
                <ButtondefaultParent>
                  <InputField
                    label="Firstname"
                    type="text"
                    placeholder="Enter your firstname"
                    name="firstname"
                    id="firstname"
                    onChange={(e) => setFirstname(e.target.value)}
                  />

                  <InputField
                    label="Lastname"
                    type="text"
                    placeholder="Enter your lastname"
                    name="lastname"
                    id="lastname"
                    onChange={(e) => setLastname(e.target.value)}
                  />

                  <InputField
                    label="Email Address"
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <InputField
                    label="Phone Number"
                    type="number"
                    placeholder="Enter your phone number"
                    name="phone"
                    id="phone"
                    onChange={(e) => setPhone(e.target.value)}
                  />

                  <InputField
                    label="Password"
                    type="password"
                    placeholder="**********"
                    name="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <InputField
                    label="Confirm Password"
                    type="password"
                    placeholder="*********"
                    name="confirmpassword"
                    id="confirmpassword"
                  />
                </ButtondefaultParent>
              </FrameWrapper>
              <Ctadefault onClick={handleSignUp}>
                <Text6 disabled={loading}>{loading ? 'Signing up... please wait' : 'Sign up'}</Text6>
              </Ctadefault>
            </FrameContainer>
          </FrameGroup>
          <Text7>
            <AlreadyHaveAnAccount>
              <AlreadyHaveAn>Already have an account ?</AlreadyHaveAn>
              <Span>{` `}</Span>
            </AlreadyHaveAnAccount>
            <Span>
              <Link to="/signin">
                <SignInHere>Sign in here</SignInHere>
              </Link>
            </Span>
          </Text7>
        </FrameParent>
      </SignUpauthentication>
      <FrameParent1>
        <WelcomeToSaviParent>
          <WelcomeToSavi>Welcome to Savi</WelcomeToSavi>
          <StartSavingSecurely>
            Start saving securely and hassle-free with Savi, the smart savings
            platform.
          </StartSavingSecurely>
        </WelcomeToSaviParent>
        <Pagination>
          <PaginationChild />
          <PaginationItem />
          <PaginationItem />
          <PaginationItem />
        </Pagination>
      </FrameParent1>
      <SaviWrapper>
        <Text8>Savi.</Text8>
      </SaviWrapper>
      <SignUpChild />
    </SignUpRoot>
  );
};

export default SignUp;

const GoogleContainer = styled.div`
  margin: auto;
  text-align: center;
`;

const Savi = styled.b`
  position: relative;
  font-size: 2.5rem;
  letter-spacing: 0.15px;
  line-height: 140%;
  font-family: var(--font-bodoni-moda);
  text-align: center;
`;
const Text1 = styled.div`
  position: relative;
  letter-spacing: 0.15px;
  line-height: 140%;
  font-weight: 600;
  color: var(--main-text);
`;
// const Iconadd1 = styled.img`
//   position: relative;
//   width: 1.25rem;
//   height: 1.25rem;
//   overflow: hidden;
//   flex-shrink: 0;
//   //display: none;
// `;
// const GoogleIcon1 = styled.img`
//   position: relative;
//   width: 1.5rem;
//   height: 1.5rem;
//   overflow: hidden;
//   flex-shrink: 0;
// `;
// const Text2 = styled.div`
//   position: relative;
//   letter-spacing: 0.15px;
//   line-height: 140%;
// `;
// const Buttondefault = styled.div`
//   border-radius: var(--br-5xs);
//   background-color: var(--white);
//   border: 1px solid var(--grey-300);
//   box-sizing: border-box;
//   width: 20rem;
//   overflow: hidden;
//   display: flex;
//   flex-direction: row;
//   cursor: pointer;
//   align-items: center;
//   justify-content: center;
//   padding: var(--padding-xs) var(--padding-base);
//   gap: var(--gap-5xs);
// `;
const DividerIcon = styled.img`
  position: relative;
  max-height: 100%;
  width: 8.75rem;
`;
const Text3 = styled.div`
  position: relative;
  line-height: 1.25rem;
`;
const DividerParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.63rem;
  font-size: var(--button-normal-14-size);
`;
const ButtondefaultParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
// const Text4 = styled.div`
//   position: relative;
//   letter-spacing: 0.15px;
//   line-height: 140%;
//   font-weight: 600;
// `;

// const Buttondefault1 = styled.div`
//   border-radius: var(--br-5xs);
//   background-color: var(--white);
//   border: 1px solid var(--grey-300);
//   box-sizing: border-box;
//   width: 20rem;
//   overflow: hidden;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: flex-start;
//   padding: var(--padding-xs) var(--padding-base);
//   gap: var(--gap-5xs);
//   font-size: var(--button-normal-14-size);
//   color: var(--grey-400);
// `;
// const Input = styled.input`
//   border-radius: var(--br-5xs);
//   background-color: var(--white);
//   border: 1px solid var(--grey-300);
//   box-sizing: border-box;
//   width: 20rem;
//   overflow: hidden;
//   align-items: center;
//   padding: var(--padding-xs) var(--padding-base);
//   gap: var(--gap-5xs);
//   font-size: var(--button-normal-14-size);
//   color: black;
// `;
// const TextParent = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: flex-start;
//   gap: var(--gap-5xs);
// `;
// const Buttondefault2 = styled.div`
//   border-radius: var(--br-5xs);
//   background-color: var(--white);
//   border: 1px solid var(--grey-300);
//   box-sizing: border-box;
//   width: 20rem;
//   overflow: hidden;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: flex-start;
//   padding: var(--padding-xs) var(--padding-base);
//   gap: var(--gap-5xs);
//   color: var(--grey-400);
// `;
// const Text5 = styled.div`
//   position: relative;
//   line-height: 1.25rem;
//   display: flex;
//   align-items: center;
//   width: 10.19rem;
//   flex-shrink: 0;
// `;
// const TextParent1 = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: flex-start;
//   gap: var(--gap-81xl);
// `;
const FrameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Text6 = styled.div`
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
const FrameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  color: var(--main-text);
`;
const FrameGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
`;
const AlreadyHaveAn = styled.span`
  letter-spacing: 0.15px;
  line-height: 140%;
`;
const Span = styled.span`
  font-size: var(--button-normal-14-size);
  line-height: 1.25rem;
  color: var(--primary-color);
`;
const AlreadyHaveAnAccount = styled.span``;
const SignInHere = styled.span`
  text-decoration: underline;
  font-weight: 600;
`;
const Text7 = styled.div`
  position: relative;
  cursor: pointer;
`;
const FrameParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-base);
  color: var(--grey-400);
`;
const SignUpauthentication = styled.div`
  position: absolute;
  top: 0rem;
  right: 0rem;
  height: 64em;
  border-radius: 16px;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 3rem 10.59rem;
  gap: 0.75rem;
  margin: auto;
  color: var(--primary-color);
`;
const WelcomeToSavi = styled.div`
  position: relative;
  letter-spacing: 0.25px;
  line-height: 140%;
  font-weight: 600;
`;
const StartSavingSecurely = styled.div`
  position: relative;
  font-size: var(--body-text-bold-16-size);
  letter-spacing: 0.15px;
  line-height: 140%;
  font-weight: 600;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 29.25rem;
`;
const WelcomeToSaviParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: flex-start;
  gap: 1.88rem;
`;
const PaginationChild = styled.div`
  position: relative;
  border-radius: var(--br-81xl);
  background-color: var(--white);
  width: 1.25rem;
  height: 0.25rem;
  overflow: hidden;
  flex-shrink: 0;
`;
const PaginationItem = styled.div`
  position: relative;
  border-radius: 50%;
  background-color: var(--color-gainsboro);
  width: 0.25rem;
  height: 0.25rem;
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
  top: 31.63rem;
  left: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1.63rem;
  font-size: var(--headline-semi-bold-32-size);
`;
const Text8 = styled.b`
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
  padding: 3.13rem;
  text-align: center;
  font-size: 1.5rem;
  font-family: var(--font-bodoni-moda);
`;
const SignUpChild = styled.div`
  position: absolute;
  top: 0rem;
  left: 0rem;
  //background-color: rgba(0, 0, 0, 0.25);
  width: 22.81rem;
  height: 64rem;
  overflow: hidden;
`;
const SignUpRoot = styled.div`
  position: relative;
  width: 100%;
  height: 64rem;
  overflow: hidden;
  background-image: url('/sign-up@3x.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: top;
  text-align: left;
  font-size: var(--body-text-bold-16-size);
  color: var(--white);
  font-family: var(--body-text-bold-16);
`;
