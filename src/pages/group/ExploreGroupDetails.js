import styled from 'styled-components';
import '../../App.css';
import Header from '../../components/navs/Header';
import Sidebar from '../../components/navs/Sidebar';
import SidebarAdmin from '../../components/navs/SidebarAdmin';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useCallback, useEffect, useRef, useState } from 'react';
import { object } from 'yup';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import { toast } from 'react-toastify';

const ExploreGroupDetails = () => {
  const location = useLocation();

  const [groupData, setGroupData] = useState('');
  const [allAroupMembers, setAllGroupMembers] = useState('');
  const [isContentLoaded, setIsContentLoaded] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  const dropdownRef = useRef(null);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  const [userId, setUserId] = useState(localStorage.getItem('userId'));
  const navigate = useNavigate();

  const getDetails = async () => {
    try {
      const searchParams = new URLSearchParams(location.search);
      const groupId = searchParams.get('id');
      const response = await fetch(
        `https://localhost:7226/api/Group/get-explore-details?id=${groupId}`
      );
      let data = await response.json();
      let dat = data.data;
      if (data.succeeded) {
        console.log('members', data);
        setGroupData(dat);
      } else {
        navigate('/explore-groups');
      }
    } catch (error) {
      console.error('Error fetching personal savings data:', error);
    }
  };

  const getGroupMembers = async () => {
    try {
      const searchParams = new URLSearchParams(location.search);
      const groupId = searchParams.get('id');


      axios.get(`https://localhost:7226/api/GroupMembers/getGroupMembers?groupId=${groupId}`)
        .then(response => {
          const sortedData = response.data.data.sort(
            (a, b) => parseInt(a.position) - parseInt(b.position)
          );
          
          setAllGroupMembers(sortedData);
          setIsContentLoaded(true);
        })
        .catch(error => {
          // Handle error
          console.error("Error fetching data:", error);
        });
    } catch (error) {
      console.error('Error fetching personal savings data:', error);
    }
  };

  
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  useEffect(() => {
    getDetails();
    getGroupMembers();
  }, []);

  const formatDate = (originalDateString) => {
    var date = new Date(originalDateString);
    var months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];

    var day = date.getDate();
    var month = months[date.getMonth()];
    var year = date.getFullYear();
    return day + ' ' + month + ', ' + year;
  };

  const JoinNow = (val, groupSavingsId) => {
    Swal.fire({
      title: 'Do you want to join ' + val + ' group?',
      showDenyButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: 'Cancel',
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios
          .post('https://localhost:7226/api/GroupMembers/join-group', {
            userId,
            groupSavingsId,
          })
          .then((response) => {
            console.log('data', response.data);
            if (response.data.succeeded) {
              Swal.fire(
                'Successful',
                'You joined ' +
                  val +
                  ' successfully. The contribution will commence immediately all the slots are occupied',
                'success'
              );
              navigate('/active-group-details?id='+groupSavingsId);
            } else {
            //  toast.error('aa' + response.data.message);
              Swal.fire('KYC NOT FOUND',response.data.message,'error');
        
            }
          })
          .catch((error) => {
            if (error.response) {
              toast.error('' + error.response.data.message);
              //  console.error('Server responded with error status:', error.response.data);
            } else if (error.request) {
              console.error('No response received from server:', error.request);
            } else {
              console.error('Error setting up request:', error.message);
            }
          });
      }
    });
  };
  function getDuration(date1String, date2String) {
    // Parse the date strings into Date objects
    var date1 = new Date(date1String);
    var date2 = new Date(date2String);

    // Calculate the difference in milliseconds
    var differenceMs = date2 - date1;

    // Convert milliseconds to days
    var differenceDays = Math.floor(differenceMs / (1000 * 60 * 60 * 24));

    // Convert days to months, weeks, and remaining days
    var months = Math.floor(differenceDays / 30);
    var remainingDays = differenceDays % 30;
    var weeks = Math.floor(remainingDays / 7);
    var days = remainingDays % 7;

    months = months===0?"":months;
    weeks = weeks===0?"":weeks;
    days = days===0?"":days;
  
    months = months ===1?months+" mon":months===""?"":months+" mons";
    weeks = weeks ===1?weeks+" week":weeks===""?"":weeks+" weeks";
    days = days ===1?days+" day":days===""?"":days+" days";
   return months+" "+ weeks+" "+days;
}


  return (
    <>
      <Header />
      {localStorage.getItem("userRole")==="User"?( <Sidebar />):( <SidebarAdmin />)}
     
      <div style={{ border: 'none', marginLeft: '17.5rem', paddingTop: '6em' }}>
        <Container>
          <Row>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Title>{groupData.groupName}</Title>
                <div>
                  <MyGoalsParent>
                    <div>
                      <Link
                        to="/explore-groups"
                        style={{ textDecoration: 'none', color: 'inherit' }}
                      >
                        <Head>Active Savings Group</Head>
                      </Link>
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
                      <Link
                        to="/explore-groups"
                        style={{ textDecoration: 'none', color: 'inherit' }}
                      >
                        <Head>Explore Groups</Head>
                      </Link>
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

                      <Link
                        style={{
                          textDecoration: 'none',
                          color: 'inherit',
                          cursor: 'text',
                        }}
                      >
                        {' '}
                        {groupData.groupName}
                      </Link>
                    </div>
                  </MyGoalsParent>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {localStorage.getItem("userRole")==="User"?(  <PayNow
                  onClick={() => {
                    JoinNow(groupData.groupName, groupData.id);
                  }}
                >
                  <PayText>Join</PayText>
                </PayNow>):( <Options onClick={toggleDropdown}><svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 8H2.01M2 2H2.01M2 14H2.01M3 8C3 8.55228 2.55228 9 2 9C1.44772 9 1 8.55228 1 8C1 7.44772 1.44772 7 2 7C2.55228 7 3 7.44772 3 8ZM3 14C3 14.5523 2.55228 15 2 15C1.44772 15 1 14.5523 1 14C1 13.4477 1.44772 13 2 13C2.55228 13 3 13.4477 3 14ZM3 2C3 2.55228 2.55228 3 2 3C1.44772 3 1 2.55228 1 2C1 1.44772 1.44772 1 2 1C2.55228 1 3 1.44772 3 2Z" stroke="#131A29" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
{isDropdownOpen && (
               <DropdownContent style={{width:'5em'}}>
               <DropdownList>
                 <ListItem>Delete</ListItem>
                 <ListItem>Disable</ListItem>
                 <Link to={`/group-transactions?id=${groupData.id}`}><ListItem>View History</ListItem></Link>
               </DropdownList>
             </DropdownContent>
              )}
</Options>)}
               
              </div>
            </div>
          </Row>
          <Row>
            <ImageBack>
              <Image src={groupData.safePortraitImageURL} />
            </ImageBack>
          </Row>
          <Row style={{ marginTop: '1em', marginBottom: '2em' }}>
            <InnerText>{groupData.purposeAndGoal}</InnerText>
          </Row>

          <Row style={{ width: '100%' }}>
            <Col md={5}>
              <BackG>
                <GroupDetails>
                  <div style={{ width: '60%' }}>
                    <Heading>Contribution Amount</Heading>
                    <Detail>
                      {parseFloat(
                        groupData.contributionAmount
                      ).toLocaleString()}
                    </Detail>
                  </div>
                  <div style={{ width: '40%' }}>
                    <Heading>Schedule</Heading>
                    <Detail>
                      {groupData.frequency === 0
                        ? 'Daily'
                        : groupData.frequency === 1
                        ? 'Weekly'
                        : 'Monthly'}
                    </Detail>
                  </div>
                </GroupDetails>
                <GroupDetails>
                  <div style={{ width: '60%' }}>
                    <Heading>Contribution Timeline</Heading>
                    <Detail>{getDuration(groupData.expectedStartDate,groupData.expectedEndDate)}</Detail>
                  </div>
                  <div style={{ width: '40%' }}>
                    <Heading>Estimated&nbsp;Collection</Heading>
                    <Detail>
                      {parseFloat(
                        groupData.contributionAmount * 5
                      ).toLocaleString()}
                    </Detail>
                  </div>
                </GroupDetails>
                <GroupDetails>
                  <div style={{ width: '60%' }}>
                    <Heading>Start Date</Heading>
                    <Detail>{formatDate(groupData.expectedStartDate)}</Detail>
                  </div>
                  <div style={{ width: '40%' }}>
                    <Heading>End Date</Heading>
                    <Detail>{formatDate(groupData.expectedEndDate)}</Detail>
                  </div>
                </GroupDetails>
                <GroupDetails>
                  <div style={{ width: '60%' }}>
                    <Heading>Available Slots</Heading>
                    <Detail>
                      {groupData.groupSavingsMembers === undefined
                        ? ''
                        : groupData.membersMaximumCount -
                          groupData.groupSavingsMembers.length}
                    </Detail>
                  </div>
                  <div style={{ width: '40%' }}>
                    <Heading>Total Slots</Heading>
                    <Detail>{groupData.membersMaximumCount}</Detail>
                  </div>
                </GroupDetails>
              </BackG>
            </Col>
            <Col md={1}>
              <p></p>
            </Col>
            <Col md={6}>
              <Members style={{ color: '#475569' }}>Members</Members>

              <Table>
                <thead
                  style={{
                    width: '100%',
                    backgroundColor: '#E5E7EB',
                    height: '40px',
                  }}
                >
                  <tr>
                    <Th>SLOTS</Th>
                    <Th>NAME</Th>
                    <Th>PERFORMANCE</Th>
                  </tr>
                </thead>
                <tbody>
                  {isContentLoaded ? (
                    allAroupMembers.map((member, index) => (
                      <Tr key={index}>
                        <Td>
                          <Letter>{member.position}</Letter>
                        </Td>
                        <Td>
                          <Letter>{member.name}</Letter>
                        </Td>
                        <Td>
                          <Letter style={{ color: 'red' }}>
                            {member.performance}%
                          </Letter>
                        </Td>
                      </Tr>
                    ))
                  ) : (
                    <Tr>
                      <Td colSpan={3}>
                        <Letter>No user</Letter>
                      </Td>
                    </Tr>
                  )}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default ExploreGroupDetails;
const DropdownList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  padding: 10px 30px 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #808080;
    color:white
  }
`;

const DropdownContent = styled.div`
  position: absolute;
  top: 1;
  left:-1;
  // margin-right: 3em;
  background-color: white;
  border: 1px solid #ccc;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 999;
`;

const Options = styled.span`
cursor:pointer;
`;
const Td = styled.td`
  border-bottom: 1px solid #e5e7eb;
`;
const Tr = styled.tr`
  text-align: center;
  height: 40px;
`;
const Letter = styled.span`
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.005em;
  text-align: left;
  color: #1f2937;
`;
const Th = styled.th`
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.005em;
  text-align: center;
  color: #6b7280;
`;
const Members = styled.p`
  font-family: Inter;
  font-size: 15px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0.005em;
  text-align: left;
  color: #475569;
`;

const InnerText = styled.span`
font-family: Inter;
font-size: 16px;
font-weight: 400;
line-height: 22px;
letter-spacing: 0.15000000596046448px;
text-align: left;
color:#667085;
`;
const BackG = styled.div`
  padding: 8px, 16px, 8px, 16px;
  border-radius: 16px;
  padding: 14px;
  border: 1px solid #d0d5dd;
`;
const Table = styled.table`
  padding: 8px, 16px, 8px, 16px;
  border-radius: 6px;
  width: 100%;
  border: 1px solid #d0d5dd;
  border-collapse: separate;
  border-spacing: 0;
  overflow: hidden;
`;
const GroupDetails = styled.div`
  width: 100%;
  height: 70px;
  padding: 8px, 16px, 8px, 16px;
  border-radius: 16px;
  border: 1px;
  gap: 14px;
  justify-content: space-between;
  display: flex;
  flexdirection: row;
`;
const Detail = styled.div`
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0px;
  color: #101828;
`;
const Heading = styled.p`
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 5px;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  color: #98a2b3;
`;
const Image = styled.img`
  background-size: cover;
  background-position: top;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
`;
const ImageBack = styled.div`
  width: 100%;
  height: 260px;
  overflow: hidden;
  position: relative;
  margin-top: 1em;
`;

const PayText = styled.span`
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  color: #ffffff;
`;

const PayNow = styled.div`
  width: 115px;
  height: 40px;
  padding: 10px, 24px, 10px, 24px;
  border-radius: 8px;
  gap: 10px;
  background: #b5179e;
  display: grid;
  place-items: center;
  cursor: pointer;
`;

const Head = styled.b``;

const Title = styled.span`
  font-family: Inter;
  font-size: 32px;
  font-weight: 700;
  line-height: 45px;
  letter-spacing: 0.15000000596046448px;
`;

const MyGoalsParent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1em;
  margin-top: 1em;
`;
