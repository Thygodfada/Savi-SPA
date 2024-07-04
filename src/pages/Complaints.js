import React, { useState } from 'react';
import styled from 'styled-components';
import '../App.css';
import Header from '../components/navs/Header';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PortalPopup from '../components/PortalPopup';
import CreateSavingsGroupForm from './group/CreateNewSavingsGroup';
import ExploreGroups from './group/ExploreGroups';
import SidebarAdmin from '../components/navs/SidebarAdmin';

const Complaints = () => {
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
      <SidebarAdmin />
      <div style={{ border: 'none', marginLeft: '17.5rem', paddingTop: '5em' }}>
        <div>
          <Container style={{ background: '#f9fafb' }}>
            <Row>
              <PersonalSavingRoot>
                <MyGoalsParent>
                  <MyGoals>Complaints</MyGoals>
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
export default Complaints;
const Th = styled.th`
padding: 20px;
`;
const Span = styled.td`
  cursor:pointer;
`;
const Td = styled.td`
  padding-left: 30px;
`;
const TdC = styled.td`
  text-align: center;
`;
const All = styled.span`
  width: 76px;
  height: 48px;
  cursor: pointer;
  padding: 10px 26px 10px 26px;
  border-radius: 100px;
  gap: 10px;
  color: ${(props) => props.colorr || 'black'};
  background-color: ${(props) => props.bgColor || 'white'};
  &:hover {
    background-color: ${(props) => props.hoverColor || '#f38fe5'};
    color: white;
  }
`;
const Tools = styled.div`
  width: 238px;
  height: 48px;
  gap: 30px;
`;
const Download = styled.button`
  width: 220px;
  height: 34px;
  // cursor:pointer;
  padding: 4px 16px 8px 16px;
  border-radius: 4px;
  gap: 10px;
  border: 1.5px solid #d0d5dd;
`;

const MyGoals = styled.b`
  font-family: Inter;
  font-size: 32px;
  font-weight: 700;
  line-height: 45px;
  letter-spacing: 0.15000000596046448px;
  text-align: center;
`;

const Pic = styled.img`
  width: 70px;
  height: 70px;
  padding: 10px;
  border-radius: 100px;
  gap: 10px;
`;

const Text = styled.b`
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  color: #000000;
`;
const TextGreen = styled.b`
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  color: green;
`;
const TextRed = styled.b`
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  color: red;
`;
const Table = styled.table`
  width: 100%;
`;
const TRows = styled.tr`
  height: 70px;
  padding: 10px 30px 10px 30px;
  border-radius: 8px;
  gap: 18px;
  background-color: white;
  border-bottom: 4px solid #f9fafb;

  &:last-child {
    border-bottom: none; /* Remove border for the last row */
  }
`;
const SectionTitle = styled.div`
  width: 100%;
  height: 20px;
  gap: 818px;
  margin-bottom: 10px;
`;
const Day = styled.span`
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.005em;
`;

const DaySection = styled.div`
width: 100%;
top: 161px
left: 310px
gap: 16px;
margin-top:1em;
margin-bottom:1em;
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

