import styled from 'styled-components';
import '../../App.css';
import Header from '../../components/navs/Header';
import Sidebar from '../../components/navs/Sidebar';
import { Container, Row } from 'react-bootstrap';
import ActiveGroups from './ActiveGroups';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import PortalPopup from '../../components/PortalPopup';
import CreateSavingsGroupForm from './CreateNewSavingsGroup';
const Frame_Group = () => {
  const [isNewGroup, setNewGroup]= useState(false);

  const openNewGroupForm = ()=>{
    setNewGroup(true);
  };
  const closeNewGroupForm = ()=>{
    setNewGroup(false);
  };

  return (
    <>
      <Header />
      <Sidebar />
      <div style={{ border: 'none', marginLeft: '17.5rem', paddingTop: '5em' }}>
        <div style={{}}>
          <Container>
            <Row>
              <PersonalSavingRoot>
                <MyGoalsParent>
                  <MyGoals>Active Savings</MyGoals>
                  <div>
                   <Link to="/explore-groups" style={{textDecoration:'none'}}>Explore Groups </Link> 
                    |
                   <Link onClick={openNewGroupForm} onClose={closeNewGroupForm} style={{textDecoration:'none'}}> Create Group</Link>

                  </div>
                </MyGoalsParent>
              </PersonalSavingRoot>
            </Row>

            <Row>
              <PersonalSavingRoot>
                <ActiveGroups />
              </PersonalSavingRoot>
            </Row>
          </Container>
        </div>
      </div>
      {isNewGroup && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeNewGroupForm}
        >
          
          <CreateSavingsGroupForm onClose={closeNewGroupForm}/>
        </PortalPopup>
      )}
    </>
  );
};

const MyGoals = styled.b`
  font-family: Inter;
  font-size: 32px;
  font-weight: 700;
  line-height: 45px;
  letter-spacing: 0.15000000596046448px;
  text-align: center;
`;
const AddNewGoal = styled.div`
  cursor: pointer;

  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.15000000596046448px;
  text-align: center;
`;

export default Frame_Group;
const PersonalSavingRoot = styled.div`
  width: 100%;
  background-color: #f9fafb;
`;
const MyGoalsParent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1em;
  margin-top: 1em;
`;
