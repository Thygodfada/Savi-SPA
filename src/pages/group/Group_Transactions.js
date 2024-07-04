import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import '../../App.css';
import Header from '../../components/navs/Header';
import { Container, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import PortalPopup from '../../components/PortalPopup';
import CreateSavingsGroupForm from './CreateNewSavingsGroup';
import SidebarAdmin from '../../components/navs/SidebarAdmin';
import axios from 'axios';

const Group_Transactions = () => {
  const [isNewGroup, setNewGroup] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [isTransactionsSet, setTransactionSet] = useState(false);
  

  const location = useLocation();

  const getUserGroupTransactions = async () => {
    try {
      const searchParams = new URLSearchParams(location.search);
      const groupId = searchParams.get('id');
      await axios
        .get(
          `https://localhost:7226/api/GroupTransaction/get-group-transactions?groupId=${groupId}`
        )
        .then((response) => {
          //console.log('res', response.data.data);
          if (response.data.data.length > 0) {
            setTransactions(response.data.data);
            setTransactionSet(true);
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

  const openNewGroupForm = () => {
    setNewGroup(true);
  };
  const closeNewGroupForm = () => {
    setNewGroup(false);
  };

  //

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
                  <MyGoals>Group Transactions</MyGoals>
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
                  <Download>
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
              <DaySection>
                <Table>
                  <thead
                    style={{
                      background: 'white',
                      borderBottom: '4px solid #f9fafb',
                    }}
                  >
                    <tr>
                      <th style={{ padding: '20px' }}>Slot</th>
                      <th>User Image</th>
                      <th>Name</th>
                      <th>Status</th>
                      <th style={{ textAlign: 'center' }}>
                        Contribution Amount
                      </th>
                      <th>Date</th>
                      <th></th>
                    </tr>
                  </thead>

                  {isTransactionsSet ? (
                    <>
                      {' '}
                      {transactions.map((item, index) => (
                        <TRows>
                          <Td>
                            <Text>{item.position}</Text>
                          </Td>
                          <td>
                            <Pic src={item.avatar}></Pic>
                          </td>
                          <td>
                            <Text>{item.fullname}</Text>
                          </td>
                          <td>
                            <Text>
                              {item.actionId === '1' ? (
                                <span style={{ color: 'green' }}>Received</span>
                              ) : (
                                <span style={{ color: 'red' }}>Sent</span>
                              )}
                            </Text>
                          </td>
                          <TdC>
                            <Text>
                              &#x20A6;{parseFloat(item.amount).toLocaleString()}
                            </Text>
                          </TdC>
                          <td>
                            <Text>{getDate(item.createdAt)} </Text>
                          </td>
                          <td>
                            <Text>
                              <Span>
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M12 12H12.01M12 6H12.01M12 18H12.01M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18ZM13 6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6Z"
                                    stroke="#131A29"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                              </Span>
                            </Text>
                          </td>
                        </TRows>
                      ))}
                    </>
                  ) : (
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
const Span = styled.td`
  cursor: pointer;
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
<<<<<<< HEAD
  background: white;
=======
   background:white;
>>>>>>> develop
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
export default Group_Transactions;
