import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Input from "../../components/Input";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

const NewPassword = () => {
  const [newPassword, setPassword] = useState("");
  const [confirmPassword, setCPassword] = useState("");
  const [loading, setLoading] = useState(false);


  const navigate = useNavigate();

 

  const handleChangePassword = async (e) => {
    e.preventDefault();
    const currentUrl = window.location.href;
    const urlSearchParams = new URLSearchParams(currentUrl);
    let email = urlSearchParams.get('email');
    let token = urlSearchParams.get('token');
    setLoading(true);

    if(newPassword =="" || confirmPassword ==""){
      toast.error("Fill all fields");
      setLoading(false);
      return;
    }


    if(newPassword != confirmPassword){
      toast.error("New password and confirm password does not match");
      setLoading(false);
      return;
    }
    
    try {
      const response = await axios.post("https://localhost:7226/api/Authentication/reset-password", {
          email,
          token,
          newPassword,
          confirmPassword,
        }, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

       const data = response.data;
       console.log(data);
      if (data.succeeded) {
        toast.success("Password changed successfully. Please login");
        navigate('/signin');
      } else {
        toast.error(data.message+ " "+data.errors[0]);
      }
      //localStorage.setItem('token', token);
      //navigate('/user_dashboard'); // Redirect to your dashboard or desired route
      setLoading(false);
    } catch (error) {
      toast.error(error);
      setLoading(false);
    }
  };

  return (
    <ResetPassword2Root>
      <ConfirmPasswordauthenticatioParent>
        <ConfirmPasswordauthenticatio>
          <TextWrapper>
            <Text1>Reset your password</Text1>
          </TextWrapper>
          <ConfirmPasswordauthenticatioInner>
            <FrameWrapper>
              <FrameParent>
                <FrameWrapper>
                  <FrameWrapper>
                    <Input
                      placeholder="**********"
                      type="password"
                      id="newpassword"
                      label="New Password"
                      name="newpassword"
                      value={newPassword}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FrameWrapper>
                </FrameWrapper>
                <FrameWrapper>
                  <FrameWrapper>
                    <Input
                      placeholder="**********"
                      type="password"
                      id="cpassword"
                      label="Confirm Password"
                      name="cpassword"
                      value={confirmPassword}
                      onChange={(e) => setCPassword(e.target.value)}
                    />
                  </FrameWrapper>
                </FrameWrapper>
                <Ctadefault onClick={handleChangePassword}>
                  <Savi>Reset Password</Savi>
                </Ctadefault>
              </FrameParent>
            </FrameWrapper>
          </ConfirmPasswordauthenticatioInner>
        </ConfirmPasswordauthenticatio>
        <PrivacyPolicyParent>
          <PrivacyPolicy>Privacy Policy</PrivacyPolicy>
          <PrivacyPolicy>Copyright 2022</PrivacyPolicy>
        </PrivacyPolicyParent>
      </ConfirmPasswordauthenticatioParent>
      <FrameGroup>
        <SecurityAndConvenienceParent>
          <SecurityAndConvenience>
            Security and Convenience
          </SecurityAndConvenience>
          <EnjoyPeaceOf>
            Enjoy peace of mind with robust security measures and user-friendly
            wallet management.
          </EnjoyPeaceOf>
        </SecurityAndConvenienceParent>
        <Pagination>
          <PaginationChild />
          <PaginationChild />
          <PaginationChild />
          <PaginationChild1 />
        </Pagination>
      </FrameGroup>
      <SaviWrapper>
        <Link to="/">
          <Savi>Savi.</Savi>
        </Link>
      </SaviWrapper>
    </ResetPassword2Root>
  );
};

export default NewPassword;

const Text1 = styled.b`
  position: relative;
  line-height: 140%;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const Text2 = styled.div`
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
const Text3 = styled.div`
  position: relative;
  line-height: 1.25rem;
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
  font-size: var(--button-normal-14-size);
  color: var(--grey-400);
`;
const TextParent = styled.div`
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
const Savi = styled.div`
  position: relative;
  letter-spacing: 0.15px;
  line-height: 140%;
  font-weight: 500;
  text-decoration: none;
`;
const Ctadefault = styled.div`
  border-radius: var(--br-5xs);
  background-color: var(--primary-color);
  width: 20rem;
  overflow: hidden;
  display: flex;
  cursor: pointer;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xs) var(--padding-base);
  box-sizing: border-box;
  gap: var(--gap-5xs);
  color: var(--white);
`;
const FrameParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.5rem;
`;
const ConfirmPasswordauthenticatioInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-size: var(--body-text-normal-16-size);
`;
const ConfirmPasswordauthenticatio = styled.div`
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
const ConfirmPasswordauthenticatioParent = styled.div`
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
const SecurityAndConvenience = styled.div`
  position: relative;
  letter-spacing: 0.25px;
  line-height: 140%;
  font-weight: 600;
`;
const EnjoyPeaceOf = styled.div`
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
const SecurityAndConvenienceParent = styled.div`
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
const PaginationChild1 = styled.div`
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
const FrameGroup = styled.div`
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
const SaviWrapper = styled.div`
  position: absolute;
  top: 0rem;
  left: 0rem;
  display: flex;
  text-decoration: none;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-31xl);
  text-align: center;
  color: var(--primary-color);
  font-family: var(--font-bodoni-moda);
`;
const ResetPassword2Root = styled.div`
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
