import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import myImage from './Image.png';
import { toast } from 'react-toastify';
import axios from 'axios';


const CreateSavingsGroupForm = ({onClose,reloadPage}) => {
  const [safePortraitImageURL, setSafePortraitImageURL] = useState(null); 
  const [loading, setLoading] = useState(false);
  const [duration, setDuration] = useState("");

  const [formData, setFormData] = useState({
    groupName: '',
    contributionAmount: '',
    expectedStartDate: null,
    actualStartDate: null,
    expectedEndDate: null,
    frequency: 0,
    runTime: '',
    purposeAndGoal: '',
    termsAndConditions: '',
    groupStatus: 0,
    safePortraitImageURL: '',
    safeLandScapeImageURL: '',
    nextRunTime: '',
    isOpen: false,
  });
  

  const inputFileRef2 = useRef(null);
  const handleBrowseImageClick = () =>{
    inputFileRef2.current.click();
  }

  const [colors, setColors] = useState({
    div1: '#ccc',
    div2: '#ccc',
    div3: '#ccc',
  });

  function getDuration(sdatee,edatee) {
    // Parse the date strings into Date objects
    var date1 = new Date(sdatee);
    var date2 = new Date(edatee);

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
   let dura = months+" "+ weeks+" "+days;
   setDuration(dura)
}

  const handleDivClick = (divId) => {
    if (divId === 'div1') {
      setFormData({
        ...formData,
        frequency: 0
      });
    }
    if (divId === 'div2') {
      setFormData({
        ...formData,
        frequency: 1
      });
    }
    if (divId === 'div3') {
      setFormData({
        ...formData,
        frequency: 2
      });
    }
    
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
          [key]: '#ccc',
        }));
      }
    }
  };
  const [imageSrc, setImageSrc] = useState(myImage);

  const handleChange = (e) => {
    if (e.target.name === 'safePortraitImageURL') {
      setFormData({
        ...formData,
        safePortraitImageURL: e.target.files[0]  // Update image state with the selected file
      });
      setSafePortraitImageURL(e.target.files[0]);
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        setImageSrc(reader.result);
      };

    } else {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
      if (e.target.name === 'expectedStartDate' || e.target.name === 'expectedEndDate') {
       var sdatee = document.getElementById("startDate").value;
       var edatee = document.getElementById("endDate").value;
      //alert(sdatee+" | "+edatee)
      if(sdatee !=="" && edatee !==""){
          getDuration(sdatee,edatee);
      }
     
      }
     
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      if(formData.groupName ===""){
        toast.error("Group name is required");
        return;
      }
      if(formData.contributionAmount ===""){
        toast.error("Contribution Amount is required");
        return;
      }
      if(formData.expectedStartDate ===null){
        toast.error("Expected Start date is required");
        return;
      }
      if(formData.expectedEndDate ===null){
        toast.error("Expected End Date is required");
        return;
      }
     
      if(formData.purposeAndGoal ===""){
        toast.error("Purpose and Goal is required");
        return;
      }
      if(formData.safePortraitImageURL ===null){
        toast.error("Portrait Image is null");
        return;
      }

      setLoading(true);
      formDataToSend.append('groupName', formData.groupName);
      formDataToSend.append('contributionAmount', formData.contributionAmount);
      formDataToSend.append('expectedStartDate', formData.expectedStartDate);
      formDataToSend.append('actualStartDate', formData.expectedStartDate);
      formDataToSend.append('expectedEndDate', formData.expectedEndDate);
      formDataToSend.append('frequency', formData.frequency);
      formDataToSend.append('runTime', formData.expectedStartDate+' '+formData.runTime);
      formDataToSend.append('purposeAndGoal', formData.purposeAndGoal);
      formDataToSend.append('termsAndConditions', formData.termsAndConditions);

      formDataToSend.append('groupStatus', formData.groupStatus);
      formDataToSend.append('safePortraitImageURL', formData.safePortraitImageURL);
      formDataToSend.append('safeLandScapeImageURL', formData.safeLandScapeImageURL);
      formDataToSend.append('nextRunTime', formData.expectedStartDate);
      formDataToSend.append('isOpen', formData.isOpen==="0"?false:true);
      
      await axios.post('https://localhost:7226/api/Group/Add-Groups?userId='+localStorage.getItem("userId"), formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(response => {
        console.log("data",response.data);
        if(response.data.succeeded){
          toast.success(response.data.message);
          onClose();
          reloadPage();
        }else{
          toast.error(response.data.message);
        }        
      }).catch(error => {
        if (error.response) {
          toast.error(error.response.data.title);
          console.error('Server responded with error status:', error.response.data);
        } else if (error.request) {
          console.error('No response received from server:', error.request);
        } else {
          console.error('Error setting up request:', error.message);
        }
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error('Error submitting form', error);
    }
  };

  const handleImageDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      if (file.size <= 50 * 1024 * 1024) {
        setFormData({
          ...formData,
          safePortraitImageURL: file  // Update image state with the selected file
        });
        setSafePortraitImageURL(file);       
      } else {
        console.error('File size exceeds 50MB limit.');
      }
    }
  };

  return (
    <WithdrawFundsRoot>
        <FormContainer>
      <Title>Create New Savings Group</Title>
      <div style={{margin:'auto'}}>
        <div  onDrop={(e) => handleImageDrop(e)} style={{justifyContent:'center', textAlign: 'center',borderStyle:'dashed',border:'1px dashed #CCC' }} >
        <Image onClick={handleBrowseImageClick} style={{marginTop:'1em',width:'100px'}} src={imageSrc} alt="Savings Group" />
        {safePortraitImageURL ? (
          <div style={{textAlign:'center'}}>{safePortraitImageURL.name}</div>
        ) : (
          <>
          <Description bold>
            Drop your image here or <Link onClick={handleBrowseImageClick} >browse</Link>
          </Description>
          <Description small>
            Drop an image that represents the title of your savings group here
          </Description>
          
          </>
        )
        }

        <input
            ref={inputFileRef2}
            name="safePortraitImageURL"
            type="file"  style={{display:'none'}}
            onChange={handleChange}
          />
      </div>
      </div>
      

      <Form onSubmit={submitForm}>
        
        <FormGroup>
          <Label htmlFor="contributionAmount">Group Name</Label>
          <Input
            type="text"
            id="groupname"
            placeholder="Enter the name of the group"
            name='groupName'
            onChange={handleChange}
            value={formData.groupName}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="contributionAmount">Contribution Amount</Label>
          <Input
            type="number"
            id="contributionAmount"
            placeholder="Enter amount"
            name='contributionAmount'
            onChange={handleChange}
            value={formData.contributionAmount}
          />
        </FormGroup>
        <Row>
          <Col>
            <FormGroup>
              <Label htmlFor="startDate">Expected Start Date</Label>
              <Input type="date" id="startDate"
              value={formData.expectedStartDate}
              onChange={handleChange}
              name='expectedStartDate'/>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label htmlFor="endDate">Expected End Date</Label>
              <Input type="date" id="endDate" onChange={handleChange} value={formData.expectedEndDate} name='expectedEndDate'/>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label htmlFor="duration">Duration</Label>
              <Input type="text" id="duratio" readOnly value={duration} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label htmlFor="numParticipants">Number of Participants</Label>
              <Input
                type="number"
                id="numParticipants"
                value="5"
                readOnly
                placeholder="Enter the number of people"
              />
            </FormGroup>
          </Col>
        </Row>
        <ButtonGroup>
          <Button
            bgColor={colors.div1}
            hoverColor="#B5179E"
            onClick={() => handleDivClick('div1')}
            type="button"
          >
            Daily
          </Button>
          <Button
            bgColor={colors.div2}
            hoverColor="#B5179E"
            onClick={() => handleDivClick('div2')}
            type="button"
          >
            Weekly
          </Button>
          <Button
            bgColor={colors.div3}
            hoverColor="#B5179E"
            onClick={() => handleDivClick('div3')}
            type="button"
          >
            Monthly
          </Button>
        </ButtonGroup>
        <FormGroup>
          <Label htmlFor="time">Time</Label>
          <Input type="time" name="runTime" onChange={handleChange} id="time" placeholder="e.g., 4:00pm" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="purposeAndGoals">Purpose and Goals</Label>
          <TextArea
            id="purposeAndGoals"
            rows="4"
            onChange={handleChange}
            placeholder="Enter purpose and goals"
            name='purposeAndGoal'
          >{formData.purposeAndGoal}</TextArea>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="termsAndConditions">Terms and Conditions</Label>
          <TextArea
            id="termsAndConditions"
            rows="4"
            onChange={handleChange}
            name='termsAndConditions'
            placeholder="Enter terms and conditions"
          >{formData.termsAndConditions}</TextArea>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="time">Visibility</Label>
          <Select  name="isOpen" onChange={handleChange} id="isopn" placeholder="e.g., 4:00pm">
            <option value="1">Public</option>
            <option value="0">Private</option>
          </Select>
        </FormGroup>
        <BigButton  disabled={loading} type="submit">{loading ? 'Adding...' : 'Add New Group'}</BigButton>
      </Form>
    </FormContainer>
    </WithdrawFundsRoot>
  
  );
};

export default CreateSavingsGroupForm;

const OuterContainer = styled.div`
  margin: 20px; /* Adjust margin off the screen size */
`;

const FormContainer = styled.div`
  margin: 0 auto; /* Center the form */
  max-width: 400px; /* Adjust as needed to make the form smaller */
  text-align: left; /* Align form elements to the left */
  display: flex;
  flex-direction: column; /* Align form elements to the left */
  align-items: flex-start; /* Align form elements to the left */
`;

const Title = styled.h1`
  text-align: left;
  margin-bottom: 30px; /* Add more margin bottom */
  font-size: 18px; /* Make smaller */
  font-weight: 600; /* Make thicker */
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
`;

const Description = styled.p`
  text-align: center;
  font-weight: ${({ bold }) =>
    bold ? 'bold' : 'normal'}; /* Make bold if bold prop is true */
  font-size: ${({ small }) =>
    small ? '0.8em' : '1em'}; /* Make smaller if small prop is true */
  color: black; /* Make text black */
`;

const Form = styled.form`
  margin-top: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  text-align: left; /* Position labels at the left */
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: black; /* Make text black */
`;

const Input = styled.input`
  width: 100%;
  padding: 8px; /* Reduce padding for smaller height */
  font-size: 14px; /* Reduce font size for smaller height */
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px; /* Reduce padding for smaller height */
  font-size: 14px; /* Reduce font size for smaller height */
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px; /* Reduce padding for smaller height */
  font-size: 14px; /* Reduce font size for smaller height */
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: vertical;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 0 10px;
  border: none;
  text: black;
  border-radius: 50px; /* Make buttons rounded pill */
  // background-color: #ccc;
  color: #fff;
  cursor: pointer;
  // &:hover {
  //   background-color: #B5179E; /* Change to blue on hover */
  // }

  background-color: ${(props) => props.bgColor || '#ccc'};
  &:hover {
    background-color: ${(props) => props.hoverColor || '#B5179E'};
  }
`;
const WithdrawFundsRoot = styled.div`
  position: relative;
  border-radius: var(--br-base);
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-13xl) var(--padding-21xl);
  box-sizing: border-box;
  gap: var(--gap-13xl);
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
  text-align: left;
  font-size: var(--text-md-medium-size);
  color: var(--main-text);
  font-family: var(--text-md-medium);
`;
const BigButton = styled(Button)`
  padding: 15px 40px;
  background-color: #b5179e; /* Set big button color to blue */
  margin-bottom: 20px; /* Add margin-bottom */
  align-self: flex-start; /* Align big button to the left */
`;

const Row = styled.div`
  display: flex;
`;

const Col = styled.div`
  flex: 1;
  margin-right: 10px;
  &:last-child {
    margin-right: 0;
  }
`;

const Link = styled.a`
  color: blue;
  text-decoration: underline;
  cursor:pointer;
`;
