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

const Transactions = () => {
  const navigate = useNavigate();
  
  const [previousTransactions, setPreviousTransactions] = useState([]);
  const [todayTransactions, setTodayTransactions] = useState('');
  const [yesterdayTransactions, setYesterdayTransactions] = useState('');
  const [isTransactionsSet, setTransactionSet] = useState(false);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const groupId = searchParams.get('id');



  const getUserGroupTransactions = async () => {
    try {
      await axios
        .get(
          `https://localhost:7226/api/GroupTransaction/get-group-transactions-by-userId?userId=${localStorage.getItem("userId")}`
        )
        .then((response) => {
          //console.log("res",response.data);
          setGroupTransactions(response.data.data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    } catch (error) {
      console.error('Error fetching personal savings data:', error);
    }
  };
 
  const setGroupTransactions = (data) =>{

    if (!Array.isArray(data)) {
      console.log("Value is not an array")
      return;
    }
    const today = new Date().toISOString().slice(0, 10);

    // Get yesterday's date by subtracting one day from today
    const yesterday = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
  
    // Filter the array based on date conditions
    const todayItems = data.filter(item => item.createdAt.startsWith(today));
    const yesterdayItems = data.filter(item => item.createdAt.startsWith(yesterday));
    const  previousItems = data.filter(item => !item.createdAt.startsWith(today) && !item.createdAt.startsWith(yesterday));

    setTodayTransactions(todayItems);
    setYesterdayTransactions(yesterdayItems);
    setPreviousTransactions(previousItems);

     console.log("today",todayItems);
    // console.log("yesterdayItems",yesterdayItems);
    // console.log("previousItems",previousItems);
    setTransactionSet(true);
  }
  useEffect(() => {
    getUserGroupTransactions(); 
  }, []);
 const getDate = (date) =>{
  const inputDate = new Date(date);
const options = { year: 'numeric', month: 'short', day: '2-digit' };
const formattedDate = inputDate.toLocaleDateString('en-US', options);
return formattedDate;

 }
 const getTime = (time) =>{
  const inputDate = new Date(time);
const hours = inputDate.getHours();
const minutes = inputDate.getMinutes();
const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${hours >= 12 ? 'pm' : 'am'}`;

return formattedTime;

 }
  return (
    <>
      <Header />
      <Sidebar />
      <Div>     
        <Container style={{background:'#f9fafb'}}>
          <Row>
            <PersonalSavingRoot>
              <MyGoalsParent>
                <MyGoals>Transactions</MyGoals>
                <div>
                  <Link to="#" style={{ textDecoration: 'none' }}>
                    Clear All{' '}
                  </Link>
                </div>
              </MyGoalsParent>
            </PersonalSavingRoot>
          </Row>
          <Row style={{paddingInline:'10px'}}>
           
            <DaySection>
              <SectionTitle>
                <Day>Today</Day>
              </SectionTitle>
                 <Table>

                 {isTransactionsSet?(<>
              {todayTransactions.map((item, index) => (
                 <TRows>
                 <td><Pic src={item.avatar}></Pic></td> 
                 <td><Text>{item.fullname}</Text></td>
                 <td><Text>{item.groupName}</Text></td>
                 <td><Text>{getDate(item.createdAt)}</Text></td>
                 <td><Text>{getTime(item.createdAt)}</Text></td>
                 <td><Text>N{parseFloat(item.amount).toLocaleString()}</Text></td>
                 <td><Text>{item.actionId==="1"?<span style={{color:'green'}}>Received</span>:<span style={{color:'red'}}>Sent</span>}</Text></td>
               </TRows>
              ))}
            
            </>):(<TRows>
                  <td colSpan={7} style={{textAlign:'center'}}><Text>No record</Text></td>
                </TRows>)}
         
              </Table>       
            </DaySection>
            <DaySection>
              <SectionTitle>
                <Day>Yesterday</Day>
              </SectionTitle>
                 <Table>


                 {isTransactionsSet?(<> {yesterdayTransactions.map((item, index) => (
                <TRows>
                <td><Pic src={item.avatar}></Pic></td> 
                <td><Text>{item.fullname}</Text></td>
                <td><Text>{item.groupName}</Text></td>
                <td><Text>{getDate(item.createdAt)}</Text></td>
                <td><Text>{getTime(item.createdAt)}</Text></td>
                <td><Text>N{parseFloat(item.amount).toLocaleString()}</Text></td>
                <td><Text>{item.actionId==="1"?<span style={{color:'green'}}>Received</span>:<span style={{color:'red'}}>Sent</span>}</Text></td>
              </TRows>
              ))}
            
            </>):(<TRows>
                  <td colSpan={7} style={{textAlign:'center'}}><Text>No record</Text></td>
                </TRows>)}

                 
              </Table>       
            </DaySection>
            <DaySection>
              <SectionTitle>
                <Day>Previous Days</Day>
              </SectionTitle>
                 <Table>


                 {isTransactionsSet?(<> {previousTransactions.map((item, index) => (
                  <TRows>
                  <td><Pic src={item.avatar}></Pic></td> 
                  <td><Text>{item.fullname}</Text></td>
                  <td><Text>{item.groupName}</Text></td>
                  <td><Text>{getDate(item.createdAt)}</Text></td>
                  <td><Text>{getTime(item.createdAt)}</Text></td>
                  <td><Text>N{parseFloat(item.amount).toLocaleString()}</Text></td>
                  <td><Text>{item.actionId==="1"?<span style={{color:'green'}}>Received</span>:<span style={{color:'red'}}>Sent</span>}</Text></td>
                </TRows>
              ))}
            
            </>):(<TRows>
                  <td colSpan={7} style={{textAlign:'center'}}><Text>No record</Text></td>
                </TRows>)}

                 
              </Table>       
            </DaySection>
          </Row>
        </Container>
      </Div>
    </>
  );
};
export default Transactions;
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
width:100%;

`;
const TRows = styled.tr`
  height: 70px;
  padding: 10px 30px 10px 30px;
  border-radius: 8px;
  gap: 18px;
  background-color:white;
  border-bottom: 4px solid #f9fafb;

  &:last-child {
    border-bottom: none; /* Remove border for the last row */
  }
`;
const SectionTitle = styled.div`
  width: 100%;
  height: 20px;
  gap: 818px;
  margin-bottom:10px;
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
const Div = styled.div`
border: none;
margin-left: 17.5rem;
padding-top: 6em;
`;
const MyGoals = styled.b`
  font-family: Inter;
  font-size: 32px;
  font-weight: 700;
  line-height: 45px;
  letter-spacing: 0.15000000596046448px;
  text-align: center;
`;

const MyGoalsParent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1em;
  margin-top: 1em;
`;
