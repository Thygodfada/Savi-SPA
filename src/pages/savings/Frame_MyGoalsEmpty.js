import { Container, Row } from 'react-bootstrap';
import '../../App.css';
import Header from '../../components/navs/Header';
import Sidebar from '../../components/navs/Sidebar';
import styled from 'styled-components';
import { useCallback, useEffect, useState } from 'react';
import PortalPopup from '../../components/PortalPopup';
import AddMoreGoals from '../../components/AddMoreGoals';
import { useNavigate } from 'react-router-dom';
const Frame_MyGoalsEmpty = () => {

  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://localhost:7226/api/Saving/list/${localStorage.getItem("walletNumber")}`);
        const result = await response.json();
        if(result.succeeded){
          navigate('/personalsaving');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const [isAddMoreGoalsOpen, setAddMoreGoalsOpen] = useState(false);
  const [isAddMoreGoals1Open, setAddMoreGoals1Open] = useState(false);

  const openAddMoreGoals = useCallback(() => {
    setAddMoreGoalsOpen(true);
  }, []);

  const closeAddMoreGoals = useCallback(() => {
    setAddMoreGoalsOpen(false);
  }, []);

  const openAddMoreGoals1 = useCallback(() => {
    setAddMoreGoals1Open(true);
  }, []);

  const closeAddMoreGoals1 = useCallback(() => {
    setAddMoreGoals1Open(false);
  }, []);

  return (
    <>
      <Header />
      <Sidebar />
      <div style={{ border: 'none', marginLeft: '17.5rem' }}>
        <div style={{ marginTop: '7em' }}>
          <Container>
          <Row style={{ width: '100%' }}>

          <FrameOfMyGoals>
              <MyGoals>My Goals</MyGoals>
              <AddNewGoal onClick={openAddMoreGoals}>Add New Goal</AddNewGoal>
          </FrameOfMyGoals>
          </Row>
          <div style={{height:'70vh',display: 'flex',alignItems: 'center', justifyContent: 'center'}}>
            <div style={{margin:'auto'}}>
            <CreateNewTargetCallToActi>
              <YouDontHave>
                You don’t have any active saving target, you can
              </YouDontHave>
            </CreateNewTargetCallToActi>
            <FrameOfAddNewTarget>
              <TextForAddNewTarget >
                <CreateANew onClick={openAddMoreGoals}>create a new target</CreateANew>
              </TextForAddNewTarget>
              </FrameOfAddNewTarget>
            </div>
          </div>
          </Container>
        </div>
      </div>

      {isAddMoreGoalsOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAddMoreGoals}
        >
          <AddMoreGoals onClose={closeAddMoreGoals} />
        </PortalPopup>
      )}
      {isAddMoreGoals1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAddMoreGoals1}
        >
          <AddMoreGoals onClose={closeAddMoreGoals1} />
        </PortalPopup>
      )}
    </>
  );
};

export default Frame_MyGoalsEmpty;
const MyGoals = styled.h1`
  margin: 0;
  width: 16.13rem;
  position: relative;
  font-size: inherit;
  letter-spacing: 0.15px;
  line-height: 140%;
  font-weight: 700;
  font-family: inherit;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  @media screen and (max-width: 1050px) {
    font-size: var(--font-size-7xl);
    line-height: 2.25rem;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
    line-height: 1.69rem;
  }
`;
const AddNewGoal = styled.div`
  position: relative;
  font-size: var(--body-text-normal-16-size);
  letter-spacing: 0.01em;
  line-height: 1rem;
  font-weight: 500;
  color: var(--blue-1);
  white-space: pre-wrap;
  cursor:pointer;
`;

const FrameOfMyGoals = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0rem 2.44rem;
  box-sizing: border-box;
  max-width: 100%;
  font-size: var(--font-size-13xl);
  color: var(--color-black);
`;

const YouDontHave = styled.div`
  flex: 1;
  position: relative;
  letter-spacing: 0.01em;
  line-height: 1.68rem;
  font-weight: 500;
  display: inline-block;
  max-width: 100%;
`;
const CreateNewTargetCallToActi = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs);
  box-sizing: border-box;
  max-width: 100%;
`;
const CreateANew = styled.div`
  position: relative;
  letter-spacing: 0.01em;
  line-height: 1.68rem;
  font-weight: 600;
  cursor:pointer;
`;
const TextForAddNewTarget = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Or = styled.div`
  align-self: stretch;
  position: relative;
  letter-spacing: 0.01em;
  line-height: 1.68rem;
  font-weight: 500;
`;
const OrWrapper = styled.div`
  align-self: stretch;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: var(--main-text);
`;
const ExploreGroups = styled.div`
  align-self: stretch;
  position: relative;
  letter-spacing: 0.01em;
  line-height: 1.68rem;
  font-weight: 500;
  cursor: pointer;
`;
const ExploreGroupsWrapper = styled.div`
  align-self: stretch;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const FrameOfAddNewTarget = styled.div`
cursor:pointer;
  color: var(--blue-1);
`;
const MessageForEmptyTarget = styled.div`
  width: 25.19rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  max-width: 100%;
`;
const EmptySavingTarget = styled.div`
  width: 31.44rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
  text-align: center;
  color: var(--color-black);
`;
const NavBarDefault = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20.63rem;
  max-width: calc(100% - 271px);
  text-align: left;
  font-size: var(--body-text-normal-16-size);
  color: var(--main-text);
  font-family: var(--body-text-normal-16);
  @media screen and (max-width: 1200px) {
    gap: 10.31rem;
  }
  @media screen and (max-width: 1050px) {
    max-width: 100%;
  }
  @media screen and (max-width: 750px) {
    gap: 5.13rem;
  }
  @media screen and (max-width: 450px) {
    gap: 2.56rem;
  }
`;
const PersonalSavingRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--grey-50);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  letter-spacing: normal;
  text-align: center;
  font-size: var(--font-size-13xl);
  color: var(--primary-color);
  font-family: var(--font-bodoni-moda);
  @media screen and (max-width: 1050px) {
    padding-left: var(--padding-xl);
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
`;
