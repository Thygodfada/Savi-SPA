import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import myImage from '../../pages/group/Image.png'
import { toast } from 'react-toastify';
import axios from 'axios';


const Profile = ({onClose,reloadPage}) => {
  const [safePortraitImageURL, setSafePortraitImageURL] = useState(null); 
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    imageFile: null,
  });
  

  const inputFileRef2 = useRef(null);
  const handleBrowseImageClick = () =>{
    inputFileRef2.current.click();
  }

  const [imageSrc, setImageSrc] = useState(myImage);

  const handleChange = (e) => {
    if (e.target.name === 'imageFile') {
      setFormData({
        ...formData,
        imageFile: e.target.files[0]  // Update image state with the selected file
      });
      setSafePortraitImageURL(e.target.files[0]);
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        setImageSrc(reader.result);
      };

    }
  };

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
     
      if(formData.imageFile ===null){
        toast.error("No image file uploaded");
        return;
      }
    
      setLoading(true);
      formDataToSend.append('ImageUrl', formData.imageFile);
      formDataToSend.append('UserId', localStorage.getItem('userId'));
      await axios.patch('https://localhost:7226/api/User/update-photo', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(response => {
        console.log("data",response);
        if(response.data.succeeded){
          toast.success(response.data.message);
          console.log("dataa",response.data.data);
          localStorage.setItem("userImage",response.data.data);
          onClose();
          reloadPage();
        }else{
          toast.error(response.data.message);
        }        
      }).catch(error => {
        if (error.response) {
          toast.error('errort'+error);
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
          imageFile: file  // Update image state with the selected file
        });
        setSafePortraitImageURL(file);       
      } else {
        console.error('File size exceeds 50MB limit.');
      }
    }
  };

  return (
    <WithdrawFundsRoot style={{zIndex: 9999}}>
        <FormContainer>
      <Title>Update Profile</Title>
      <div style={{margin:'auto'}}>
        <div  onDrop={(e) => handleImageDrop(e)} style={{justifyContent:'center', textAlign: 'center' }} >
        <Image onClick={handleBrowseImageClick} style={{marginTop:'1em',width:'100px'}} src={imageSrc} alt="Savings Group" />
        {safePortraitImageURL ? (
          <div style={{textAlign:'center'}}>{safePortraitImageURL.name}</div>
        ) : (
          <>
          <Description bold>
            Drop your image here  <Link onClick={handleBrowseImageClick} >browse</Link>
          </Description>
          <Description small>
            Drop a profle picture. Facial image is necessary for easy recognition
          </Description>
          
          </>
        )
        }

        <input
            ref={inputFileRef2}
            name="imageFile"
            type="file"  style={{display:'none'}}
            onChange={handleChange}
          />
      </div>
      </div>
      

      <Form onSubmit={submitForm}>
        
        <FormGroup >
          <Label htmlFor="contributionAmount">Full Name</Label>
          <Input
            type="text"
            readOnly
            value={localStorage.getItem("fullname")}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="contributionAmount">Email</Label>
          <Input
            type="text" readOnly
            value={localStorage.getItem("email")}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="contributionAmount">Phone</Label>
          <Input
            type="text" readOnly
            value={"0"+localStorage.getItem("walletNumber")}
          />
        </FormGroup>
    
     
        <BigButton  disabled={loading} type="submit">{loading ? 'Uploading... Please wait' : 'Upload profile picture'}</BigButton>
      </Form>
    </FormContainer>
    </WithdrawFundsRoot>
  
  );
};

export default Profile;

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
  width:22em;
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
