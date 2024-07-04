import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Swal from 'sweetalert2';

const Container = styled.div`
  margin: auto;
  width: 65%;
`;
const Clearfix = styled.div`
  &:after {
    content: '';
    display: table;
    clear: both;
  }
`;
const FormRow = styled.div`
  float: left;
  width: 50%;
  box-sizing: border-box;
  padding: 0 15px;
`;
const FormRowb = styled.div`
  padding: 0 15px;
`;
const Label = styled.label`
  font-weight: bold;
  font-size: 13px;
`;
const Input = styled.input`
  border: 1px solid #d0d5dd;
  border-radius: 6px;
  padding: 5px 0;
  width: 100%;
  margin-top: 4px;
  margin-bottom: 4px;
  font-size: 12px;

  &::placeholder {
    padding-left: 8px;
    font-size: 11px;
    color: #d0d5dd;
  }
`;
const Select = styled.select`
  width: 100%;
  border-radius: 6px;
  padding: 5px 0;
  border: 1px solid #d0d5dd;
  margin-top: 4px;
  margin-bottom: 4px;
  font-size: 12px;
  color: #d0d5dd;

  option {
    color: black;
  }

  &:checked {
    color: black; /* Set the color for the selected option */
  }
`;

const Document = styled.label`
  border: 1px dashed #d0d5dd;
  padding: 24px 24px;
  width: 100%;
  display: block;
  cursor: pointer;
  text-align: center;
  // &::before {
  //     content: "Drop your files here or browse";
  //     display: inline;
  //     font-size: 11px;
  //     color: #555;
  //     font-weight: bold;
  // }
  &::after {
    content: 'Maximum size: 50MB';
    color: #9ca3af;
    font-size: 10px;
    font-weight: bold;
    display: block;
  }
  &:hover {
    border-color: #505f98;
  }
  input {
    display: none;
  }
`;
const Section = styled.div`
  font-size: 11px;
  font-weight: bold;
`;
const Span = styled.span`
  color: #3b82f6;
`;
const Button = styled.button`
  width: 100%;
  background-color: #b5179e;
  color: white;
  border-radius: 4px;
  margin-top: 16px;
  border: none;
  padding: 8px;
  font-size: 12px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const KycForm = () => {
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
  const [uploadedDocument, setUploadedDocument] = useState(null);
  const [uploadedProof, setUploadedProof] = useState(null);
  const [genderDropdownClicked, setGenderDropdownClicked] = useState(false);
  const [occupationDropdownClicked, setOccupationDropdownClicked] =
    useState(false);
  const [
    identificationTypeDropdownClicked,
    setIdentificationTypeDropdownClicked,
  ] = useState(false);

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

  const handleGenderDropdownClick = () => {
    setGenderDropdownClicked(true);
  };
  const handleOccupationDropdownClick = () => {
    setOccupationDropdownClicked(true);
  };
  const handleIdentificationTypeDropdownClick = () => {
    setIdentificationTypeDropdownClicked(true);
  };

  const getIsFormValid = (data) => {
    return (
      data.gender !== '' &&
      data.dateOfBirth &&
      data.occupation !== '' &&
      data.identificationType !== '' &&
      data.bvn &&
      data.address &&
      data.identificationNumber &&
      data.identificationDocument &&
      data.proofOfAddress
    );
  };

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
      }
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
      console.log('Form Data:', formData);

      const formDataToSend = new FormData();

      for (const key in adaptedFormData) {
        if (adaptedFormData.hasOwnProperty(key)) {
          formDataToSend.append(key, adaptedFormData[key]);
        }
      }

      const response = await axios.post(
        `https://localhost:7226/api/Kyc/AddKyc?userId=${'bb2af77f-c1d5-4ac4-9095-ca4fb674f5fa'}`,
        formDataToSend,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      if (response.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Account Updated!',
          html: 'Your account has been updated successfully.',
          showConfirmButton: false,
          timer: 3000,
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: `Error: ${response.data.message}`,
          confirmButtonText: 'OK',
        });
      }
    } catch (error) {
      console.error('An error occurred:', error);

      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'An unexpected error occurred: ' + error.message,
        confirmButtonText: 'OK',
      });
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <Clearfix>
            <FormRow>
              <div>
                <Label>Gender</Label> <br />
                <Select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  onClick={handleGenderDropdownClick}
                  onBlur={(e) =>
                    (e.target.style.color =
                      e.target.value === '' ? '#D0D5DD' : '#000')
                  }
                >
                  {!genderDropdownClicked && (
                    <option value="" disabled>
                      Select your Gender
                    </option>
                  )}
                  <option value="0">Male</option>
                  <option value="1">Female</option>
                </Select>
              </div>

              <div>
                <Label>Date Of Birth</Label> <br />
                <Input
                  type="date"
                  placeholder="Pick your D.O.B"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  name="dateOfBirth"
                />
              </div>
            </FormRow>

            <FormRow>
              <div>
                <Label>Occupation</Label> <br />
                <Select
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  onClick={handleOccupationDropdownClick}
                  onBlur={(e) =>
                    (e.target.style.color =
                      e.target.value === '' ? '#D0D5DD' : '#000')
                  }
                >
                  {!occupationDropdownClicked && (
                    <option value="" disabled>
                      Select your Occupation
                    </option>
                  )}
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
              </div>

              <div>
                <Label>Identification Type</Label> <br />
                <Select
                  name="identificationType"
                  value={formData.identificationType}
                  onChange={handleChange}
                  onClick={handleIdentificationTypeDropdownClick}
                  onBlur={(e) =>
                    (e.target.style.color =
                      e.target.value === '' ? '#D0D5DD' : '#000')
                  }
                >
                  {!identificationTypeDropdownClicked && (
                    <option value="" disabled>
                      Select your Type
                    </option>
                  )}
                  <option value="0">NIN</option>
                  <option value="1">Passport</option>
                  <option value="2">Driver's License</option>
                  <option value="3">Utility Bill</option>
                  <option value="4">Voters Card</option>
                  <option value="5">Student ID</option>
                </Select>
              </div>
            </FormRow>
          </Clearfix>

          <FormRowb>
            <div>
              <Label>BVN</Label> <br />
              <Input
                type="text"
                placeholder="Input your BVN"
                value={formData.bvn}
                onChange={handleChange}
                name="bvn"
              />
            </div>

            <div>
              <Label>Address</Label> <br />
              <Input
                type="text"
                placeholder=""
                value={formData.address}
                onChange={handleChange}
                name="address"
              />
            </div>

            <div>
              <Label>Identification Number</Label> <br />
              <Input
                type="text"
                placeholder="Input your Identification Number"
                value={formData.identificationNumber}
                onChange={handleChange}
                name="identificationNumber"
              />
            </div>

            <div>
              <Label>Upload Identification Document</Label> <br />
              <Document
                onDrop={(e) => handleDocumentDrop(e)}
                onDragOver={(e) => handleDocumentDragOver(e)}
              >
                {uploadedDocument ? (
                  <div>{uploadedDocument.name}</div>
                ) : (
                  <React.Fragment>
                    <Section>
                      Drop your files here or <Span>browse</Span>
                    </Section>
                    <input
                      type="file"
                      onChange={(e) =>
                        handleChange(e, 'identificationDocument')
                      }
                      name="identificationDocument"
                    />
                  </React.Fragment>
                )}
              </Document>
            </div>

            <div>
              <Label>Upload Proof of Address</Label> <br />
              <Document
                onDrop={(e) => handleProofOfAddressDrop(e)}
                onDragOver={(e) => handleProofOfAddressDragOver(e)}
              >
                {uploadedProof ? (
                  <div>{uploadedProof.name}</div>
                ) : (
                  <React.Fragment>
                    <Section>
                      Drop your files here or <Span>browse</Span>
                    </Section>
                    <input
                      type="file"
                      onChange={(e) => handleChange(e, 'proofOfAddress')}
                      name="proofOfAddress"
                    />
                  </React.Fragment>
                )}
              </Document>
            </div>

            <Button type="submit" disabled={!getIsFormValid(formData)}>
              Submit
            </Button>
          </FormRowb>
        </fieldset>
      </form>
    </Container>
  );
};

export default KycForm;
