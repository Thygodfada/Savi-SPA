import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const LogoutModal = () => {
  const navigate = useNavigate();

  const logout = async (e) => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <LogoutModalRoot>
      <GroupParent>
        <FrameChild alt="" src="/group-39889@2x.png" />
        <AreYouSureYouWantToLogOWrapper>
          <AreYouSure1>Are you sure you want to log out?</AreYouSure1>
        </AreYouSureYouWantToLogOWrapper>
        <FrameWrapper onClick={logout}>
          <HeaderTextWrapper>
            <HeaderText2>Log out</HeaderText2>
          </HeaderTextWrapper>
        </FrameWrapper>
        <FrameDiv>
          <HeaderTextContainer>
            <HeaderText2>Cancel</HeaderText2>
          </HeaderTextContainer>
        </FrameDiv>
      </GroupParent>
      {/* <CloseIcon1 alt="" src="/close@2x.png" /> */}
    </LogoutModalRoot>
  );
};

export default LogoutModal;

const FrameChild = styled.img`
  position: relative;
  width: 4.38rem;
  height: 4.38rem;
  object-fit: cover;
`;
const AreYouSure1 = styled.div`
  position: relative;
  line-height: 140%;
  font-weight: 500;
`;
const AreYouSureYouWantToLogOWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-size: var(--headline-medium-24-size);
`;
const HeaderText2 = styled.div`
  position: relative;
  line-height: 1.25rem;
  font-weight: 600;
`;
const HeaderTextWrapper = styled.div`
  border-radius: var(--br-5xs);
  background-color: var(--primary-color);
  width: 23.88rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs);
  box-sizing: border-box;
`;
const FrameWrapper = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  color: var(--white);
`;
const HeaderTextContainer = styled.div`
  border-radius: var(--br-5xs);
  width: 23.88rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs);
  box-sizing: border-box;
`;
const FrameDiv = styled.div`
  display: none;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const GroupParent = styled.div`
  position: absolute;
  top: calc(50% - 94px);
  left: calc(50% - 192px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-3xl);
`;
const CloseIcon1 = styled.img`
  position: absolute;
  top: 0.88rem;
  left: 26.38rem;
  width: 1.5rem;
  height: 1.5rem;
  overflow: hidden;
  object-fit: cover;
`;
const LogoutModalRoot = styled.div`
  position: relative;
  border-radius: var(--br-5xs);
  background-color: var(--white);
  width: 28.75rem;
  height: 19.38rem;
  overflow: hidden;
  max-width: 100%;
  max-height: 100%;
  text-align: left;
  font-size: var(--input-small-medium-size);
  color: var(--main-text);
  font-family: var(--text-md-medium);
`;
