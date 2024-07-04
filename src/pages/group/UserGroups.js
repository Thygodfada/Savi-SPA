import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import '../../App.css';
import Header from '../../components/navs/Header';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PortalPopup from '../../components/PortalPopup';
import CreateSavingsGroupForm from './CreateNewSavingsGroup';
import ExploreGroups from './ExploreGroups';
import SidebarAdmin from '../../components/navs/SidebarAdmin';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const UserGroups = () => {
  const [isNewGroup, setNewGroup] = useState(false);
  const[showing, setShowing]=useState('All');

  const openNewGroupForm = () => {
    setNewGroup(true);
  };
  const closeNewGroupForm = () => {
    setNewGroup(false);
  };

  const [colors, setColors] = useState({
    div1: '#B5179E',
    div2: '#fff',
    div3: '#fff',
  });
  const [foreColors, setForeColors] = useState({
    div11: 'white',
    div22: 'black',
    div33: 'balck',
  });

  

  const handleDivClick = (divId,foreGround) => {
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

    if (divId === 'div1') {
      setShowing("All");
    }
    if (divId === 'div2') {
      setShowing("Active");
    }
    if (divId === 'div3') {
      setShowing("New");
    }
  };

  const handleDownload = () => {
   
    const elementId = 'savi'; // Replace with the actual ID of the element you want to capture
  
    // Get the element by ID
    const element = document.getElementById(elementId);
  
    if (!element) {
      console.error(`Element with ID '${elementId}' not found.`);
      return;
    }
  
    // Capture the content of the specified element as an image using html2canvas
    html2canvas(element, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
  
      // Create a new jsPDF instance
      const pdf = new jsPDF();
  
      // Add the captured image to the PDF
      pdf.addImage(imgData, 'PDF', 0, 0, pdf.internal.pageSize.getWidth(), 0);
  
      // Save the PDF with a specified filename
      pdf.save(`${elementId}-report.pdf`);
  
      console.log('PDF generation completed.');
    });
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
                  <MyGoals>Saving Groups</MyGoals>
                </MyGoalsParent>
              </PersonalSavingRoot>
            </Row>
            <Row>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <Tools>
                  <All
                    bgColor={colors.div1}
                    hoverColor="#B5179E"
                    onClick={() => handleDivClick('div1','div11')}
                    colorr={foreColors.div11}
                  >
                    All
                  </All>

                  <All
                    bgColor={colors.div2}
                    hoverColor="#B5179E"
                    onClick={() => handleDivClick('div2','div22')}
                    colorr={foreColors.div22}
                  >
                    Active
                  </All>

                  <All
                    bgColor={colors.div3}
                    hoverColor="#B5179E"
                    onClick={() => handleDivClick('div3','div33')}
                    colorr={foreColors.div33}
                  >
                    New
                  </All>
                </Tools>
                <div>
                  <Download onClick={ handleDownload}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10"
                        stroke="#101828"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4.66669 6.66663L8.00002 9.99996L11.3334 6.66663"
                        stroke="#101828"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8 10V2"
                        stroke="#101828"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    &nbsp; Download PDF report
                  </Download>
                </div>
              </div>
            </Row>

            <Row>
              <PersonalSavingRoot id = "savi">
                <ExploreGroups sort={showing}/>
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
const All = styled.span`
  width: 76px;
  height: 48px;
  cursor:pointer;
  padding: 10px 26px 10px 26px;
  border-radius: 100px;
  gap: 10px;
  color: ${(props) => props.colorr || 'black'};
  background-color: ${(props) => props.bgColor || 'white'};
  &:hover {
    background-color: ${(props) => props.hoverColor || '#f38fe5'};
    color:white;
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
  background:white;
  padding: 4px 16px 8px 16px;
  border-radius: 4px;
  gap: 10px;
  border: 1.5px solid #d0d5dd;
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
  color: #64748b;
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

export default UserGroups;

const PersonalSavingRoot = styled.div`
  width: 100%;
  // background-color: #f9fafb;
`;
const MyGoalsParent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2em;
  margin-top: 1em;
`;
