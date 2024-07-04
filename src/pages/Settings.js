import React, { useState } from 'react';
import styled from 'styled-components';
import '../App.css';
import Header from '../components/navs/Header';
import { Container, Row } from 'react-bootstrap';
import PortalPopup from '../components/PortalPopup';
import CreateSavingsGroupForm from './group/CreateNewSavingsGroup';
import SidebarAdmin from '../components/navs/SidebarAdmin';
import Sidebar from '../components/navs/Sidebar';

const Settings = () => {
  const [isNewGroup, setNewGroup] = useState(false);

  const openNewGroupForm = () => {
    setNewGroup(true);
  };

  const closeNewGroupForm = () => {
    setNewGroup(false);
  };

  const [colors, setColors] = useState({
    div1: '#B5179E',
    div2: '#fff',
    div3: '#fff'
  });

  const [foreColors, setForeColors] = useState({
    div11: 'white',
    div22: 'black',
    div33: 'black',
  });

  const handleDivClick = (divId, foreGround) => {
    // Update background color based on the clicked div
    setColors({
      ...colors,
      [divId]: '#B5179E',
    });
    // Update background color of other divs
    for (let key in colors) {
      if (key !== divId) {
        setColors((prevColors) => ({
          ...prevColors,
          [key]: 'white',
        }));
      }
    }

    setForeColors({
      ...foreColors,
      [foreGround]: 'white',
    });

    for (let keys in foreColors) {
      if (keys !== foreGround) {
        setForeColors((prevColorss) => ({
          ...prevColorss,
          [keys]: 'black',
        }));
      }
    }
  };

  return (
    <>
      <Header />
     {localStorage.getItem("userRole")==="Admin"?(<SidebarAdmin />):(<Sidebar />)} 
      <div style={{ border: 'none', marginLeft: '17.5rem', paddingTop: '5em' }}>
        <div>
          <Container style={{ background: '#f9fafb' }}>
            <Row>
              <PersonalSavingRoot>
                <MyGoalsParent>
                  <MyGoals>Settings</MyGoals>
                </MyGoalsParent>
              </PersonalSavingRoot>
            </Row>
            <Row>
           
           
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
export default Settings;

const MyGoals = styled.b`
  font-family: Inter;
  font-size: 32px;
  font-weight: 700;
  line-height: 45px;
  letter-spacing: 0.15000000596046448px;
  text-align: center;
`;


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

