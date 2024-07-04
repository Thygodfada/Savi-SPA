import styled from 'styled-components';
import '../../App.css';
import Header from '../../components/navs/Header';
import Sidebar from '../../components/navs/Sidebar';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import PortalPopup from '../../components/PortalPopup';
import CreateSavingsGroupForm from './CreateNewSavingsGroup';
import ExploreGroups from './ExploreGroups';
const Frame_ExploreGroup = () => {
  const [isNewGroup, setNewGroup] = useState(false);

  const openNewGroupForm = () => {
    setNewGroup(true);
  };
  const closeNewGroupForm = () => {
    setNewGroup(false);
  };

  return (
    <>
      <Header />
      <Sidebar />
      <div style={{ border: 'none', marginLeft: '17.5rem', paddingTop: '5em' }}>
        <div >
          <Container>
            <Row>
              <BreadCrum>
                <FirstDiv>
                  <Link style={{textDecoration:'none',color:'inherit'}} to="/active-groups">
                    <Text>
                    Active Savings Group{' '}                    
                  </Text> 
                  </Link>
                                   
                  </FirstDiv>

                  <FirstDiv>                 
                  <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z"
                        fill="#94A3B8"
                      />
                    </svg>                  
                </FirstDiv>
                <FirstDiv> 
                <Text2>
                    {' '}  Explore Groups                  
                  </Text2>   
                </FirstDiv>
              </BreadCrum>
              <PersonalSavingRoot>
                <MyGoalsParent>
                  <MyGoals>Explore Groups</MyGoals>
                  <div>
                    <Link
                      onClick={openNewGroupForm}
                      style={{ textDecoration: 'none' }}
                      
                    >
                      {' '}
                      Create Group
                    </Link>
                  </div>
                </MyGoalsParent>
              </PersonalSavingRoot>
            </Row>

            <Row>
              <PersonalSavingRoot>
                <ExploreGroups />
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
          <CreateSavingsGroupForm onClose={closeNewGroupForm} />
        </PortalPopup>
      )}
    </>
  );
};

const BreadCrum = styled.div`
  width: Hug (314px);
  height: Hug (40px);
  padding-top: 1em;
  left: 310px;
  display:flex;
  gap: 2px;
`;
const FirstDiv = styled.div`
width: Hug (166px)
height: Fixed (40px)
padding: 10px
border-radius: 6px
gap: 10px
`;
const Text = styled.p`
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
`;

const Text2 = styled.p`
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: #64748B;
`;

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

export default Frame_ExploreGroup;

const PersonalSavingRoot = styled.div`
  width: 100%;
  background-color: #f9fafb;
`;
const MyGoalsParent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2em;
  margin-top: 1em;
`;
