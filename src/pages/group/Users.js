import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import '../../App.css';
import Header from '../../components/navs/Header';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PortalPopup from '../../components/PortalPopup';
import CreateSavingsGroupForm from './CreateNewSavingsGroup';
import SidebarAdmin from '../../components/navs/SidebarAdmin';
import axios from 'axios';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Users = () => {
  const [isNewGroup, setNewGroup] = useState(false);

  const openNewGroupForm = () => {
    setNewGroup(true);
  };
  const[showing, setShowing]=useState('All');
  const [activeUsers, setActiveUsers] = useState([]);
  const [todayUsers, setTodayUser] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [isTransactionsSet, setTransactionSet] = useState(false);


  const getUserGroupTransactions = async () => {
    try {
      setTransactionSet(false);
      await axios
        .get(`https://localhost:7226/api/User/AllUsers`)
        .then((response) => {
          if (response.data.data.length > 0) {
            setTransactions(response.data.data);
            const today = new Date().toISOString().slice(0, 10);
            const datesToday = response.data.data.filter((item) =>
              item.createdAt.startsWith(today)
            );
            const actives = response.data.data.filter((item) =>
            item.isDeleted==="False");
            setActiveUsers(actives);
            setTodayUser(datesToday);
            setTransactionSet(true);
           // console.log('res', actives);
          }
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    } catch (error) {
      console.error('Error fetching personal savings data:', error);
    }
  };

  useEffect(() => {
    getUserGroupTransactions();
  }, []);

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
    div33: 'black',
  });

  const handleDownload = () => {
    console.log('Button clicked!');
  
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
  const getDate = (date) => {
    const inputDate = new Date(date);
    const options = { year: 'numeric', month: 'short', day: '2-digit' };
    const formattedDate = inputDate.toLocaleDateString('en-US', options);

    const hours = inputDate.getHours();
    const minutes = inputDate.getMinutes();
    const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${
      hours >= 12 ? 'pm' : 'am'
    }`;
    return formattedDate + ' ' + formattedTime;
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
                  <MyGoals>Users</MyGoals>
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
                    onClick={() => handleDivClick('div1', 'div11')}
                    colorr={foreColors.div11}
                  >
                    All
                  </All>

                  <All
                    bgColor={colors.div2}
                    hoverColor="#B5179E"
                    onClick={() => handleDivClick('div2', 'div22')}
                    colorr={foreColors.div22}
                  >
                    Active
                  </All>
                  <All
                    bgColor={colors.div3}
                    hoverColor="#B5179E"
                    onClick={() => handleDivClick('div3', 'div33')}
                    colorr={foreColors.div33}
                  >
                    New
                  </All>
                </Tools>
                <div>
                  <Download onClick={handleDownload}>
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

            <Row style={{ paddingInline: '10px' }}>
              <DaySection id='savi'>
                <Table>
                  <thead
                    style={{
                      background: 'white',
                      borderBottom: '4px solid #f9fafb',
                    }}
                  >
                    <tr>
                      <Th>User Image</Th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Status</th>
                      <th style={{ textAlign: 'center' }}>Last Login</th>
                      <th></th>
                    </tr>
                  </thead>
                    
                  {showing==="All" ? (
                    <>
                      {' '}
                      {transactions.map((item, index) => (
                        <TRows>
                          <Td>
                            <Pic src={item.imageUrl}></Pic>
                          </Td>
                          <td>
                            <Text>{item.firstName + ' ' + item.lastName}</Text>
                          </td>
                          <td>
                            <Text>{item.email}</Text>
                          </td>
                          <td>
                            <Text>
                              {item.isDeleted === 'False' ? (
                                <span style={{ color: 'green' }}>Active</span>
                              ) : (
                                <span style={{ color: 'red' }}>Deleted</span>
                              )}
                            </Text>
                          </td>
                          <TdC>
                            <Text>{getDate(item.lastLogin)} </Text>
                          </TdC>
                          <td>:</td>
                        </TRows>
                      ))}
                    </>
                  ) : showing==="Active"?(<>
                  {activeUsers.map((item, index) => (
                        <TRows>
                          <Td>
                            <Pic src={item.imageUrl}></Pic>
                          </Td>
                          <td>
                            <Text>{item.firstName + ' ' + item.lastName}</Text>
                          </td>
                          <td>
                            <Text>{item.email}</Text>
                          </td>
                          <td>
                            <Text>
                              {item.isDeleted === 'False' ? (
                                <span style={{ color: 'green' }}>Active</span>
                              ) : (
                                <span style={{ color: 'red' }}>Deleted</span>
                              )}
                            </Text>
                          </td>
                          <TdC>
                            <Text>{getDate(item.lastLogin)} </Text>
                          </TdC>
                          <td>:</td>
                        </TRows>
                      ))}
                  </>):showing==="New"?(<>
                  {todayUsers.map((item, index) => (
                        <TRows>
                          <Td>
                            <Pic src={item.imageUrl}></Pic>
                          </Td>
                          <td>
                            <Text>{item.firstName + ' ' + item.lastName}</Text>
                          </td>
                          <td>
                            <Text>{item.email}</Text>
                          </td>
                          <td>
                            <Text>
                              {item.isDeleted === 'False' ? (
                                <span style={{ color: 'green' }}>Active</span>
                              ) : (
                                <span style={{ color: 'red' }}>Deleted</span>
                              )}
                            </Text>
                          </td>
                          <TdC>
                            <Text>{getDate(item.lastLogin)} </Text>
                          </TdC>
                          <td>:</td>
                        </TRows>
                      ))}
                  </>) :(
                    <TRows>
                      <td colSpan={7} style={{ textAlign: 'center' }}>
                        <Text>No transactions</Text>
                      </td>
                    </TRows>
                  )}
                </Table>
              </DaySection>
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
export default Users;
const Th = styled.th`
  padding: 20px;
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
  background: white;
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
