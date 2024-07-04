import { Container, Row } from 'react-bootstrap';
import '../../App.css';
import Header from '../../components/navs/Header';
import Sidebar from '../../components/navs/Sidebar';
import styled from 'styled-components';
import { useCallback, useEffect, useState } from 'react';
import PortalPopup from '../../components/PortalPopup';
import AddMoreGoals from '../../components/AddMoreGoals';
//import PersonalSaving from '../../src/pages/Savings/PersonalSaving';
import Savings from './Savings';


const Frame_PersonalSaving = () => {

  const [isAddMoreGoalsOpen, setAddMoreGoalsOpen] = useState(false);

  const openAddMoreGoals = useCallback(() => {
    setAddMoreGoalsOpen(true);
  }, []);
  const closeAddMoreGoals = useCallback(() => {
    setAddMoreGoalsOpen(false);
  }, []);

  const [goalsData, setGoalsData] = useState([]);

  const fetchPersonalSavings = async () => {
    try {
      const response = await fetch(`https://localhost:7226/api/Saving/list/${localStorage.getItem("walletNumber")}`);
      const result = await response.json();
      if(result.succeeded){
        console.log(result);
        setGoalsData(result.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  useEffect(() => {
    fetchPersonalSavings();    
  }, []);

  return (
    <>
      <Header />
      <Sidebar />
      <div style={{ border: 'none', marginLeft: '17.5rem' }}>
        <div style={{ marginTop: '7em' }}>
        <Container  style={{ background: '#f9fafb',paddingBottom:'2em' }}>
          <Row style={{ width: '100%' }}>

          <FrameOfMyGoals>
              <MyGoals>My Goals</MyGoals>
              <AddNewGoal onClick={openAddMoreGoals}>Add New Goal</AddNewGoal>
          </FrameOfMyGoals>
          </Row>
          <Savings goalsData={goalsData}/>
          </Container>
        </div>
      </div>
      {isAddMoreGoalsOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAddMoreGoals}
        >
          <AddMoreGoals onClose={closeAddMoreGoals} fetchPersonalSavings={fetchPersonalSavings}/>
        </PortalPopup>
      )}
    </>
  );
};

export default Frame_PersonalSaving;

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
  margin-bottom:1em;
  box-sizing: border-box;
  max-width: 100%;
  font-size: var(--font-size-13xl);
  color: var(--color-black);
`;


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