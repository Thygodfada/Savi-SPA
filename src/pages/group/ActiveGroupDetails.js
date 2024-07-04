import styled from 'styled-components';
import '../../App.css';
import Header from '../../components/navs/Header';
import Sidebar from '../../components/navs/Sidebar';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const ActiveGroupDetails = () => {
  const navigate = useNavigate();

  const [groupDetail, setGroupDetail] = useState('');
  const [groupMembers, setGroupMember] = useState('');
  const [transactions, setTransactions] = useState('');
  const [isContentLoaded, setIsContentLoaded] = useState(false);
  const [isTransactionsSet, setTransactionSet] = useState(false);
  const [userId, setUserId] = useState(localStorage.getItem('userId'));
  const [isDismissed, setDismissed] = useState(false);
  const [balance, setBalance] = useState();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const groupId = searchParams.get('id');
  const getGroupDetails = async () => {
    try {
      const response = await fetch(
        `https://localhost:7226/api/Group/get-explore-details?id=${groupId}`
      );
      let data = await response.json();
      if (data.succeeded) {
        setGroupDetail(data.data);
        setGroupMember(data.data.groupSavingsMembers);
        setIsContentLoaded(true);
        console.log(data.data);
      } else {
        // navigate('/explore-group')
      }
    } catch (error) {
      toast.error('' + error);
    }
  };

  const getGroupMembers = async () => {
    try {
      await axios
        .get(
          `https://localhost:7226/api/GroupTransaction/get-group-transactions?groupId=${groupId}`
        )
        .then((response) => {
          setTransactions(response.data.data);
          setTransactionSet(true);
          console.log('response', response.data.data);
        })
        .catch((error) => {
          // Handle error
          console.error('Error fetching data:', error);
        });
    } catch (error) {
      console.error('Error fetching personal savings data:', error);
    }
  };
  const fetchWalletBalance = async () => {
    try {
      const response = await fetch(
        `https://localhost:7226/api/Wallet/GetWalletByNumber?number=${localStorage.getItem(
          'walletNumber'
        )}`
      );
      const result = await response.json();
      setBalance(result.data.balance);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    getGroupDetails();
    getGroupMembers();
    fetchWalletBalance();
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

    months = months === 0 ? '' : months;
    weeks = weeks === 0 ? '' : weeks;
    days = days === 0 ? '' : days;

    months =
      months === 1 ? months + ' mon' : months === '' ? '' : months + ' mons';
    weeks =
      weeks === 1 ? weeks + ' week' : weeks === '' ? '' : weeks + ' weeks';
    days = days === 1 ? days + ' day' : days === '' ? '' : days + ' days';
    return months + ' ' + weeks + ' ' + days;
  }
  const openPayNow = () => {
    Swal.fire({
      title: 'Do you want to pay now?',
      text: 'Pay your own quota of the contribution',
      showDenyButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: 'Cancel',
    }).then(async (result) => {
      if (result.isConfirmed) {
        let groupSavingsId = groupId;

        await axios
          .post('https://localhost:7226/api/GroupTransaction/fund-group', {
            userId,
            groupSavingsId,
          })
          .then((response) => {
            console.log('data', response.data);
            if (response.data.succeeded) {
              Swal.fire('Success', 'Payment completed successfully', 'success');
            } else {
              toast.error('' + response.data.message);
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
  const runDate = (a, onlymonth) => {
    if (onlymonth) {
      const date = new Date(a);
      return date.toLocaleString('default', { month: 'long' });
    } else {
      const date = new Date(a);

      // Define an array to map month indices to month names
      const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];

      // Extract day, month, year, hour, and minute components from the date object
      const day = date.getDate();
      const month = months[date.getMonth()];
      const year = date.getFullYear();
      let hour = date.getHours();
      const minute = date.getMinutes();

      // Convert hour to 12-hour format and determine AM/PM
      const ampm = hour >= 12 ? 'pm' : 'am';
      hour = hour % 12 || 12;

      // Format the date string
      const formattedDate = `${day} ${month}, ${year} ${hour}:${minute
        .toString()
        .padStart(2, '0')}${ampm}`;

      return formattedDate;
    }
  };

  const handleDismiss = () => {
    setDismissed(true);
  };
  return (
    <>
      <Header />
      <Sidebar />
      <Div
        style={{
          marginLeft: '17.5rem',
          maxHeight: '100vh',
          marginTop: '5em',
          overflowY: 'scroll',
        }}
      >
        <Container
          style={{ maxHeight: '100%', overflowY: 'scroll', marginTop: '1em' }}
        >
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
                <Title>{groupDetail.groupName}</Title>
                <div>
                  <MyGoalsParent>
                    <div>
                      <Link
                        to="/active-groups"
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
                        style={{ textDecoration: 'none', color: 'inherit' }}
                      >
                        {' '}
                        {groupDetail.groupName}
                      </Link>
                    </div>
                  </MyGoalsParent>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <June>{runDate(groupDetail.runTime,true).toUpperCase()} CONTRIBUTION</June>
                <JuneDate>{runDate(groupDetail.runTime, false)}</JuneDate>
                <Fifty>
                  &#x20A6;
                  {parseFloat(groupDetail.contributionAmount).toLocaleString()}
                </Fifty>
                <Desc>Your payment will be debited from your </Desc>
                <b>WALLET (₦{parseFloat(balance).toLocaleString()})</b>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {isDismissed ? (
                  <></>
                ) : (
                  <>
                    <PayNow onClick={openPayNow}>
                      <PayText>Pay Now</PayText>
                    </PayNow>
                    <Dismiss onClick={handleDismiss}>
                      <DismissText>Dismiss</DismissText>
                    </Dismiss>
                  </>
                )}
              </div>
            </div>
          </Row>
          <Row>
            <ImageBack>
              <Image src={groupDetail.safePortraitImageURL} />
            </ImageBack>
          </Row>
          <Row style={{ marginTop: '1em', marginBottom: '2em' }}>
            <p>{groupDetail.purposeAndGoal}</p>
          </Row>

          <Row style={{ width: '100%' }}>
            <Col md={5}>
              <BackG>
                <GroupDetails>
                  <div style={{ width: '60%' }}>
                    <Heading>Contribution Amount</Heading>
                    <Detail>
                      {parseFloat(
                        groupDetail.contributionAmount
                      ).toLocaleString()}
                    </Detail>
                  </div>
                  <div style={{ width: '40%' }}>
                    <Heading>Schedule</Heading>
                    <Detail>
                      {groupDetail.frequency === 0
                        ? 'Daily'
                        : groupDetail.frequency === 1
                        ? 'Weekly'
                        : 'Monthly'}
                    </Detail>
                  </div>
                </GroupDetails>
                <GroupDetails>
                  <div style={{ width: '60%' }}>
                    <Heading>Contribution Timeline</Heading>
                    <Detail>
                      {getDuration(
                        groupDetail.expectedStartDate,
                        groupDetail.expectedEndDate
                      )}
                    </Detail>
                  </div>
                  <div style={{ width: '40%' }}>
                    <Heading>Estimated&nbsp;Collection</Heading>
                    <Detail>
                      {parseFloat(
                        groupDetail.contributionAmount *
                          groupDetail.membersMaximumCount
                      ).toLocaleString()}
                    </Detail>
                  </div>
                </GroupDetails>
                <GroupDetails>
                  <div style={{ width: '60%' }}>
                    <Heading>Start Date</Heading>
                    <Detail>{formatDate(groupDetail.expectedStartDate)}</Detail>
                  </div>
                  <div style={{ width: '40%' }}>
                    <Heading>End Date</Heading>
                    <Detail>{formatDate(groupDetail.expectedEndDate)}</Detail>
                  </div>
                </GroupDetails>
                <GroupDetails>
                  <div style={{ width: '60%' }}>
                    <Heading>Available Slots</Heading>
                    <Detail>
                      {isContentLoaded ? (
                        groupDetail.membersMaximumCount - groupMembers.length
                      ) : (
                        <></>
                      )}
                    </Detail>
                  </div>
                  <div style={{ width: '40%' }}>
                    <Heading>Total Slots</Heading>
                    <Detail>{groupDetail.membersMaximumCount}</Detail>
                  </div>
                </GroupDetails>
              </BackG>
            </Col>
            <Col md={2}>
              <></>
            </Col>
            <Col md={5}>
              <p style={{ color: '#475569' }}>Transaction History</p>
              <BackG>
                {isTransactionsSet ? (
                  transactions.map((transaction, index) => (
                    <GroupDetails key={index}>
                      <Firstdiv>
                        <ImageDiv>
                          <img
                            alt=""
                            src={transaction.avatar}
                            style={{ width: '100%', height: '100%' }}
                          />
                        </ImageDiv>
                        <div>
                          <Day>{transaction.fullname}</Day>
                          <Time>{runDate(transaction.createdAt,false).split(" ")[3]}</Time>
                        </div>
                      </Firstdiv>
                      <Seconddiv>
                        <Amount isPositive={transaction.actionId === '1'}>
                          {transaction.actionId === '2' ? '- ' : ''} &#x20A6;
                          {parseFloat(transaction.amount).toLocaleString()}
                        </Amount>
                      </Seconddiv>
                    </GroupDetails>
                  ))
                ) : (
                  <></>
                )}
              </BackG>
            </Col>
          </Row>
        </Container>
      </Div>
    </>
  );
};
export default ActiveGroupDetails;

const Div = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
  background: #f9fafb;

  /* Optional: Hide scrollbar for Firefox */
  scrollbar-width: none;
`;

const Firstdiv = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Seconddiv = styled.div`
width: 40%;
display:flex;
flex-direction:row;
margin-left:3em;
align-items: center;
justifyContent: 'flex-end',
text-align:right;
`;
const Amount = styled.span`
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0px;
  // color: #eb5757;
  color: ${(props) => (props.isPositive ? 'green' : 'red')};
`;
const ImageDiv = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 999px;
  overflow: hidden;
`;
const Time = styled.span`
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.15000000596046448px;
  text-align: left;
  margin-left: 0.5em;
  color: #98a2b3;
`;
const Day = styled.div`
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  color: #000000;
  margin-left: 0.5em;
`;
const BackG = styled.div`
  padding: 8px, 16px, 8px, 16px;
  border-radius: 16px;
  padding: 14px;
  border: 1px solid #d0d5dd;
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
  background-position: bottom;
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
const Desc = styled.span`
  font-family: Inter;
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  color: #101828;
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

const DismissText = styled.span`
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  color: black;
`;

const Fifty = styled.span`
  font-family: Inter;
  font-size: 24px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  color: #101828;
  margin-bottom: 0.5em;
  margin-top: 0.2em;
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

const Dismiss = styled.div`
  width: 115px;
  height: 40px;
  padding: 10px, 24px, 10px, 24px;
  border-radius: 8px;
  border: 1px;
  border-style: solid;
  gap: 10px;
  margin-left: 14px;
  background: white;
  cursor: pointer;
  display: grid;
  place-items: center;
`;
const JuneDate = styled.span`
  font-family: Inter;
  font-size: 16px;
  font-weight: 300;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  color: #101828;
`;
const Head = styled.b``;
const MyGoals = styled.b`
  font-family: Inter;
  font-size: 32px;
  font-weight: 700;
  line-height: 45px;
  letter-spacing: 0.15000000596046448px;
  text-align: center;
`;
const June = styled.span`
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  color: #101828;
  margin-bottom: 0.5em;
`;
const Title = styled.span`
  font-family: Inter;
  font-size: 32px;
  font-weight: 700;
  line-height: 45px;
  letter-spacing: 0.15000000596046448px;
  // text-align: center;
`;

const MyGoalsParent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1em;
  margin-top: 1em;
`;
