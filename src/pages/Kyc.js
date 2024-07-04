import { useState, useCallback, useRef } from "react";
import DropdownMenu1 from "../components/DropDownMenu1"
import PortalPopup from "../components/PortalPopup";
import DropdownMenu from "../components/DropdownMenu";
import Calendar from "../components/Calendar";
import styled from "styled-components";
import React from 'react';
import { toast } from "react-toastify";
import axios from "axios";

toast.configure();

const KYC = () => {
  const [formData, setFormData] = useState({
    gender: '0',
    occupation: '0',
    dateOfBirth: '',
    identificationType: '0',
    bvn: '',
    address: '',
    identificationNumber: '',
    identificationDocument: '',
    proofOfAddress: '',
  });
  const inputFileRef = useRef(null);
  const inputFileRef2 = useRef(null);
  const handleDivClick = () =>{
    inputFileRef.current.click();
  }
  const handleDivClickk = () =>{
    inputFileRef2.current.click();
  }

  const [isDropdownMenuOpen, setDropdownMenuOpen] = useState(false);
  const [isDropdownMenu1Open, setDropdownMenu1Open] = useState(false);
  const [isCalendarOpen, setCalendarOpen] = useState(false);
  const [isDropdownMenu2Open, setDropdownMenu2Open] = useState(false);
  const [uploadedProof, setUploadedProof] = useState(null);
  const [uploadedDocument, setUploadedDocument] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleDocumentDrop = (event) => {
    event.preventDefault();

    const file = event.dataTransfer.files[0];
    if (file) {
      if (file.size <= 50 * 1024 * 1024) {
        setUploadedDocument(file);
        setFormData((prevFormData) => ({
          ...prevFormData,
          identificationDocument: file,
        }));
      } else {
        console.error('File size exceeds 50MB limit.');
        toast.error('File size exceeds 50MB limit.');
      }
    }
  };
  const handleChange = (event) => {
    const { name, value, files } = event.target;

    if (files) {
      const file = files[0];
      
      if (name === 'identificationDocument') {
        setUploadedDocument(file);
      } else if (name === 'proofOfAddress') {
        setUploadedProof(file);
      }
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: file,
      }));
    } else {
      const updatedValue =
        name === 'gender' ||
        name === 'occupation' ||
        name === 'identificationType'
          ? parseInt(value, 10)
          : value;

      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: updatedValue,
      }));
    }

    if (event.target.tagName === 'SELECT') {
      event.target.style.color = '#000';
    }
  };
  const handleDocumentDragOver = (event) => {
    event.preventDefault();

    const file = event.dataTransfer.files[0];
    if (file && file.size > 50 * 1024 * 1024) {
      alert('File size exceeds 50MB limit.');
      this.value = '';
      event.dataTransfer.dropEffect = 'none';
    } else {
      event.dataTransfer.dropEffect = 'copy';
    }
  };

  const handleProofOfAddressDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      if (file.size <= 50 * 1024 * 1024) {
        setUploadedProof(file);
        setFormData((prevFormData) => ({
          ...prevFormData,
          proofOfAddress: file,
        }));
      } else {
        console.error('File size exceeds 50MB limit.');
      }
    }
  };

  const handleProofOfAddressDragOver = (event) => {
    event.preventDefault();

    const file = event.dataTransfer.items[0].getAsFile();
    if (file && file.size > 50 * 1024 * 1024) {
      console.error('File size exceeds 50MB limit.');
      event.dataTransfer.dropEffect = 'none'; // Prevent the drop
    } else {
      event.dataTransfer.dropEffect = 'copy';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const adaptedFormData = {
        ...formData,
        Address: formData.address,
        BVN: formData.bvn,
        IdentificationDocumentUrl: formData.identificationDocument,
        IdentificationNumber: formData.identificationNumber,
        ProofOfAddressUrl: formData.proofOfAddress,
      };
     
      setLoading(true);
      console.log('Form Data:', adaptedFormData);

      await axios.post(
        `https://localhost:7226/api/Kyc/AddKyc?userId=${localStorage.getItem("userId")}`,
        adaptedFormData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      ).then(function (response) {
        // Handle successful response here
        console.log('Response data:', response);
        if(response.data.succeeded){
          toast.success(""+response.data.message);

        }
        else{
          toast.error(""+response.data.message);
        }
      }).catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log("Error response status:", error.response.status);
          console.log("Response data:", error.response.data);
          let errors = error.response.data.errors;

          let firstError = ""; let i=1;

          for (let key in errors) {
              firstError = errors[key][0];
              break;
          }
          toast.error(firstError);
        } else if (error.request) {
          // The request was made but no response was received
          console.log("No response received:", error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error:", error.message);
        }
        console.log("Config:", error.config);
      });
    } catch (error) {
      console.error('An error occurred:', error);

      toast.error('An unexpected error occurred. '+error);
    }
    setLoading(false);
  };

  const closeDropdownMenu = useCallback(() => {
    setDropdownMenuOpen(false);
  }, []);
  const closeDropdownMenu1 = useCallback(() => {
    setDropdownMenu1Open(false);
  }, []);

  const closeCalendar = useCallback(() => {
    setCalendarOpen(false);
  }, []);


  const closeDropdownMenu2 = useCallback(() => {
    setDropdownMenu2Open(false);
  }, []);

  return (
    <>
      <KycRoot>
        <FrameParent>
          <TextWrapper>
            <Text18>Complete Your KYC Verification</Text18>
          </TextWrapper>
          <Text19>
            <TextTxt>
              <PleaseCompleteThe>{`Please complete the KYC verification process to unlock the full features and benefits of `}</PleaseCompleteThe>
              <Savi>Savi</Savi>
              <PleaseCompleteThe>.</PleaseCompleteThe>
            </TextTxt>
          </Text19>
        </FrameParent>
        <KycInner>
          <FrameWrapper>
            <form onSubmit={handleSubmit}>

            
            <FrameGroup>
              <FrameDiv>
                <FrameWrapper1>
                  <FrameWrapper2>
                    <TextParent>
                      <Text20>Gender</Text20>
                      <Select name="gender" value={formData.gender} onChange={handleChange} required>
                        <option value="">Select your Gender</option>
                        <option value="0">Male</option>
                        <option value="1">Female</option>
                      </Select>

                    </TextParent>
                  </FrameWrapper2>
                </FrameWrapper1>
                <FrameWrapper>
                  <FrameWrapper>
                    <TextGroup>
                      <Text20>Occupation</Text20>
                      <Select name="occupation" value={formData.occupation} onChange={handleChange} required>
                        <option value="">Select your Occupation</option>
                        <option value="0">Farmer</option>
                        <option value="1">Human Resources</option>
                        <option value="2">Marketing Specialist</option>
                        <option value="3">Assistant</option>
                        <option value="4">Teacher</option>
                        <option value="5">Engineer</option>
                        <option value="6">IT Professional</option>
                        <option value="7">Sales Representative</option>
                        <option value="8">Doctor</option>
                        <option value="9">Accountant</option>
                        <option value="10">Lawyer</option>
                        <option value="11">Banker</option>
                        <option value="12">Entrepreneur</option>
                        <option value="13">Project Manager</option>
                        <option value="14">Graphics Designer</option>
                        <option value="15">Others</option>
                      </Select>
                    </TextGroup>
                  </FrameWrapper>
                </FrameWrapper>
              </FrameDiv>
              <FrameParent1>
                <FrameWrapper1>
                  <FrameWrapper2>
                    <TextParent>
                      <Text20>Date of Birth</Text20>
                      <DateInput value={formData.dateOfBirth} type="date" onChange={handleChange} name="dateOfBirth" required/>
                    </TextParent>
                  </FrameWrapper2>
                </FrameWrapper1>
                <FrameWrapper1>
                  <FrameWrapper2>
                    <TextParent>
                      <Text20>Identification Type</Text20>
                      <Select name="identificationType" value={formData.identificationType} onChange={handleChange} required>
                      <option value="">Select your Type</option>
                      <option  value="0">NIN</option>
                      <option value="1">Passport</option>
                      <option value="2">Driver's License</option>
                      <option value="3">Utility Bill</option>
                      <option value="4">Voters Card</option>
                      <option value="5">Student ID</option>
                      </Select>
                    </TextParent>
                  </FrameWrapper2>
                </FrameWrapper1>
              </FrameParent1>
              <FrameWrapper2>
                <FrameWrapper2>
                  <TextParent>
                    <Text20>BVN</Text20>
 
                    <TextInput type="number" Placeholder="Input your BVN" value={formData.bvn} onChange={handleChange} name="bvn" required />

                  </TextParent>
                </FrameWrapper2>
              </FrameWrapper2>
              <FrameWrapper11>
                <FrameWrapper2>
                  <TextParent>
                    <Text20>Address</Text20>
                   <TextInput type="text" value={formData.address} onChange={handleChange} name="address" required/>
                  </TextParent>
                </FrameWrapper2>
              </FrameWrapper11>
              <FrameWrapper2>
                <FrameWrapper2>
                  <TextParent>
                    <Text20>Identification Number</Text20>
                    <TextInput type="text" placeholder="Input your Identification Num" value={formData.identificationNumber} onChange={handleChange} name="identificationNumber" required/>
                  </TextParent>
                </FrameWrapper2>
              </FrameWrapper2>
              <FrameWrapper2>
                <FrameWrapper2>
                  <TextParent>
                    <Text20>Upload Identification Document</Text20>

                    <DragNDropFileUpload onDrop={(e) => handleDocumentDrop(e)}
                        onDragOver={(e) => handleDocumentDragOver(e)}>
                      <ImageIcon alt="" />
                      {uploadedDocument ? (
                          <div>{uploadedDocument.name}</div>
                        ) : (
                          <React.Fragment>
                           
                            <DropYourFiles2>
                            Drop your files here or<Span onClick={handleDivClick} > browse</Span>
                          </DropYourFiles2>

                            <SecondaryLabel>Maximum size: 50MB</SecondaryLabel>
                            <input
                              ref={inputFileRef}
                              type="file"  style={{display:'none'}}
                              onChange={(e) =>
                                handleChange(e, 'identificationDocument')
                              }
                              name="identificationDocument" 
                            />
                          </React.Fragment>
                        )}
                      <DarggingFile>
                        <File1>
                          <FigmaIcon2 alt="" />
                        </File1>
                        <Label>
                          <PrelineUifig>preline-ui.fig</PrelineUifig>
                        </Label>
                        <DraggingPointerIcon2 alt="" />
                      </DarggingFile>
                    </DragNDropFileUpload>

                  </TextParent>
                </FrameWrapper2>
              </FrameWrapper2>
              <FrameWrapper2>
                <FrameWrapper2>
                  <TextParent>
                    <Text20>Upload Proof of Address</Text20>

                    <DragNDropFileUpload  onDrop={(e) => handleProofOfAddressDrop(e)}
                onDragOver={(e) => handleProofOfAddressDragOver(e)}>
                      <ImageIcon alt="" />
                      {uploadedProof ? (
                          <div>{uploadedProof.name}</div>
                        ) : (
                          <React.Fragment>
                           
                            <DropYourFiles2>
                            Drop your files here or<Span onClick={handleDivClickk} > browse</Span>
                          </DropYourFiles2>

                            <SecondaryLabel>Maximum size: 50MB</SecondaryLabel>
                            <input
                              ref={inputFileRef2}
                              type="file"  style={{display:'none'}}
                              onChange={(e) => handleChange(e, 'proofOfAddress')}
                              name="proofOfAddress" 
                            />
                          </React.Fragment>
                        )}
                      <DarggingFile>
                        <File1>
                          <FigmaIcon2 alt="" />
                        </File1>
                        <Label>
                          <PrelineUifig>preline-ui.fig</PrelineUifig>
                        </Label>
                        <DraggingPointerIcon2 alt="" />
                      </DarggingFile>
                    </DragNDropFileUpload>

                  </TextParent>
                </FrameWrapper2>
              </FrameWrapper2>
              <Ctadefault type="submit">
                <Iconadd16 alt="" />
                <Text20>{loading ? 'Submitting...' : 'Submit'}</Text20>
                <Iconadd16 alt="" />
              </Ctadefault>
            </FrameGroup>
            </form>
          </FrameWrapper>
        </KycInner>
      </KycRoot>
      {isDropdownMenuOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDropdownMenu}
        >
          <DropdownMenu1 onClose={closeDropdownMenu} />
        </PortalPopup>
      )}
      {isDropdownMenu1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDropdownMenu1}
        >
          <DropdownMenu onClose={closeDropdownMenu1} />
        </PortalPopup>
      )}
      {isCalendarOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeCalendar}
        >
          <Calendar onClose={closeCalendar} />
        </PortalPopup>
      )}
      {isDropdownMenu2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDropdownMenu2}
        >
          <DropdownMenu onClose={closeDropdownMenu2} />
        </PortalPopup>
      )}
    </>
  );
};

export default KYC;

const Span = styled.span`
  color: #3b82f6;
  cursor:pointer
`;
const Section = styled.div`
  font-size: 11px;
  font-weight: bold;
`;
const Text18 = styled.b`
  position: relative;
  line-height: 140%;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const PleaseCompleteThe = styled.span``;
const Savi = styled.span`
  color: var(--primary-color);
`;
const TextTxt = styled.span`
  width: 100%;
`;
const Text19 = styled.div`
  position: relative;
  font-size: var(--text-md-medium-size);
  letter-spacing: 0.15px;
  line-height: 140%;
  text-align: center;
  display: flex;
  align-items: center;
  width: 23.38rem;
  height: 3.06rem;
  flex-shrink: 0;
`;
const FrameParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const Text20 = styled.div`
  position: relative;
  letter-spacing: 0.15px;
  line-height: 140%;
  font-weight: 600;
`;
const Iconadd16 = styled.img`
  position: relative;
  width: 1.25rem;
  height: 1.25rem;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
  display: none;
`;
const Text21 = styled.div`
  position: relative;
  line-height: 1.25rem;
`;
const ChevronDownIcon5 = styled.img`
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
  cursor: pointer;
`;
const Buttondefault = styled.div`
  align-self: stretch;
  border-radius: var(--br-5xs);
  background-color: var(--white);
  border: 1px solid var(--grey-300);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-xs) var(--padding-base);
  font-size: var(--input-small-medium-size);
  color: var(--grey-400);
`;

const DateInput = styled.input`
  align-self: stretch;
  border-radius: var(--br-5xs);
  background-color: var(--white);
  border: 1px solid var(--grey-300);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-xs) var(--padding-base);
  font-size: var(--input-small-medium-size);
  color: black;
`;
const Select = styled.select`
  align-self: stretch;
  border-radius: var(--br-5xs);
  background-color: var(--white);
  border: 1px solid var(--grey-300);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-xs) var(--padding-base);
  font-size: var(--input-small-medium-size);
  color: black;
`;
const TextParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const FrameWrapper2 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const FrameWrapper1 = styled.div`
  width: 13.19rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const FrameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const FrameDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
`;
const FrameParent1 = styled.div`
  width: 27.75rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
`;
const ChevronDownIcon8 = styled.img`
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
  display: none;
`;
const Buttondefault4 = styled.div`
  align-self: stretch;
  border-radius: var(--br-5xs);
  background-color: var(--white);
  border: 1px solid var(--grey-300);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-xs) var(--padding-base);
  gap: var(--gap-81xl);
  font-size: var(--input-small-medium-size);
  color: var(--grey-400);
`;
const TextInput = styled.input`
  align-self: stretch;
  border-radius: var(--br-5xs);
  background-color: var(--white);
  border: 1px solid var(--grey-300);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-xs) var(--padding-base);
  gap: var(--gap-81xl);
  font-size: var(--input-small-medium-size);
  color: var(black);
`;
const Buttondefault5 = styled.div`
  align-self: stretch;
  border-radius: var(--br-5xs);
  background-color: var(--white);
  border: 1px solid var(--grey-300);
  box-sizing: border-box;
  height: 3rem;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-xs) var(--padding-base);
`;
const FrameWrapper11 = styled.div`
  width: 27.75rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const ImageIcon = styled.img`
  position: relative;
  width: 4.38rem;
  height: 2.8rem;
  object-fit: cover;
  display: none;
  z-index: 0;
`;
const DropYourFiles2 = styled.div`
  position: relative;
  letter-spacing: 0.01em;
  line-height: 1.5rem;
  font-weight: 500;
`;

const SecondaryLabel = styled.div`
  position: relative;
  font-size: var(--input-small-medium-size);
  letter-spacing: 0.01em;
  line-height: 1.25rem;
  font-weight: 500;
  color: var(--gray-400);
  text-align: center;
`;

const FigmaIcon2 = styled.img`
  position: relative;
  width: 1rem;
  height: 1rem;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const File1 = styled.div`
  position: absolute;
  top: 0rem;
  left: 1.69rem;
  border-radius: var(--br-7xs);
  background-color: var(--white);
  box-shadow: var(--drop-shadow-2xl);
  border: 1px solid var(--gray-300);
  box-sizing: border-box;
  width: 2rem;
  height: 2.63rem;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const PrelineUifig = styled.div`
  position: relative;
  letter-spacing: 0.01em;
  line-height: 1rem;
  font-weight: 500;
`;
const Label = styled.div`
  position: absolute;
  top: 2.88rem;
  left: 0rem;
  border-radius: var(--br-980xl);
  background-color: var(--blue-600);
  box-shadow: var(--drop-shadow-md);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-7xs);
`;
const DraggingPointerIcon2 = styled.img`
  position: absolute;
  top: 3.73rem;
  left: 3.22rem;
  width: 1.25rem;
  height: 1.75rem;
  object-fit: cover;
`;
const DarggingFile = styled.div`
  position: absolute;
  margin: 0 !important;
  top: 2.63rem;
  left: 16.63rem;
  width: 5.38rem;
  height: 5.48rem;
  display: none;
  z-index: 2;
  font-size: var(--xs-regular-size);
  color: var(--white);
`;
const DragNDropFileUpload = styled.div`
  align-self: stretch;
  border-radius: var(--br-5xs);
  background-color: var(--white);
  border: 1px dashed var(--grey-400);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-21xl);
  position: relative;
  gap: var(--gap-xl);
  color: var(--gray-800);
  cursor:default;
`;
const Ctadefault = styled.button`
  align-self: stretch;
  border-radius: var(--br-5xs);
  background-color: var(--primary-color);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xs) var(--padding-base);
  gap: var(--gap-5xs);
  color: var(--white);
  border:none;
`;
const FrameGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
`;
const KycInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-size: var(--text-md-medium-size);
`;
const KycRoot = styled.div`
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
  font-size: var(--headline-medium-24-size);
  color: var(--main-text);
  font-family: var(--text-md-medium);
`;