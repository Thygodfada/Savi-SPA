import React from 'react';
import styled from 'styled-components';

const CenteredForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0; /* Remove vertical margin */
  margin-bottom: 0; /* Remove vertical margin */
  margin-left: auto; /* Horizontally center the form */
  margin-right: auto; /* Horizontally center the form */
`;

const FormContainer = styled.div`
  width: 700px; /* Increased width to 600px */
  margin-top: 100px; /* Add vertical margin on top */
  margin-bottom: 100px; /* Add vertical margin on bottom */
`;

const FormSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  background-color: white;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  padding: 30px 20px;
  transition: background-color 0.3s; /* Add transition for smooth effect */
  border-radius: 10px; /* Curve the edges */

  &:hover {
    background-color: blue; /* Change background color to blue on hover */
  }
`;


const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SectionImage = styled.img`
  max-width: 100px;
  max-height: 100px;
  margin-right: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-top: 0;
  margin-bottom: 5px;
`;

const Text = styled.span`
  font-size: 11px; /* Adjust font size as needed */
  color: grey;
  margin-right: 20px;

`;

const Text1 = styled.span`
  font-size: 11px; /* Adjust font size as needed */
  color: grey;
  margin-right: 80px;

`;

const AdditionalText = styled.span`
  font-size: 11px;
  color: blac;
  margin-top: 5px; 
  margin-right: 15px;
`;

const AdditionalText1 = styled.span`
  font-size: 11px;
  color: black;
  margin-top: 5px; 
  margin-right: 50px;
`;

const AdditionalText2 = styled.span`
  font-size: 11px;
  color: black;
  margin-top: 5px; 
  margin-right: 80px;
`;

const AdditionalText3 = styled.span`
  font-size: 11px;
  color: black;
  margin-top: 5px; 
  margin-right: 30px;
`;

const AdditionalText33 = styled.span`
  font-size: 11px;
  color: black;
  margin-top: 5px; 
  margin-right: 20px;
`;

const AdditionalText22 = styled.span`
  font-size: 11px;
  color: black;
  margin-top: 5px; 
  margin-right: 40px; /* Adjusted margin-right */
`;

const AdditionalText4 = styled.span`
  font-size: 11px;
  color: black;
  margin-top: 5px; 
  margin-right: 60px;
`;
const AdditionalText5 = styled.span`
  font-size: 11px;
  color: black;
  margin-top: 5px; 
  margin-right: 60px;
`;

const StyledForm = () => {
  return (
    <CenteredForm>
      <FormContainer>
        <FormSection>
          <SectionImage src="/_avatar-large.png" alt="Image 1" />
          <SectionContent>
            <SectionTitle>First Contribution</SectionTitle>
            <div>
              <Text1>Name:</Text1>
              <Text>Contributing</Text>
               
              <Text>Withdrawing</Text>
              <Text>Fee</Text>
              <Text>Next Cash Out</Text>
              <Text>Recent Cash Out</Text>
            </div>
            <div>
            <AdditionalText>Chukwudi Innocent</AdditionalText>
            <AdditionalText1>50,000</AdditionalText1>
            <AdditionalText2>0</AdditionalText2>
            <AdditionalText3>0</AdditionalText3>
            <AdditionalText4>May 30</AdditionalText4>
            <AdditionalText5>May 17</AdditionalText5>
            </div>
          </SectionContent>
        </FormSection>
        <FormSection>
          <SectionImage src="/Avatar (1).png" alt="Image 2" />
          <SectionContent>
            <SectionTitle>Second Contribution</SectionTitle>
            <div>
            <Text1>Name:</Text1>
              <Text>Contributing</Text>
              <Text>Withdrawing</Text>
              <Text>Fee</Text>
              <Text>Next Cash Out</Text>
              <Text>Recent Cash Out</Text>
            </div>
            <div>
            <AdditionalText>Onwurah Adaeze</AdditionalText>
            <AdditionalText1 className='ms-2'>50,000</AdditionalText1>
            <AdditionalText2>0</AdditionalText2>
            <AdditionalText3>0</AdditionalText3>
            <AdditionalText4>May 31</AdditionalText4>
            <AdditionalText5>May 18</AdditionalText5>
            </div>
          </SectionContent>
        </FormSection>
        <FormSection>
          <SectionImage src="/Avatar (2).png" alt="Image 3" />
          <SectionContent>
            <SectionTitle>Third Contribution</SectionTitle>
            <div>
            <Text1>Name:</Text1>
              <Text>Contributing</Text>
              <Text>Withdrawing</Text>
              <Text>Fee</Text>
              <Text>Next Cash Out</Text>
              <Text>Recent Cash Out</Text>
            </div>
            <div>
            <AdditionalText className='me-5'>Ifunanya(You)</AdditionalText>
            <AdditionalText1>50,000</AdditionalText1>
            <AdditionalText22>500,000</AdditionalText22>
            <AdditionalText33>500</AdditionalText33>
            <AdditionalText4>Today</AdditionalText4>
            <AdditionalText5>May 15</AdditionalText5>
            </div>
          </SectionContent>
        </FormSection>
        <FormSection>
          <SectionImage src="/Avatar.png" alt="Image 4" />
          <SectionContent>
            <SectionTitle>Fourth Contribution</SectionTitle>
            <div>
            <Text1>Name:</Text1>
              <Text>Contributing</Text>
              <Text>Withdrawing</Text>
              <Text>Fee</Text>
              <Text>Next Cash Out</Text>
              <Text>Recent Cash Out</Text>
            </div>
            <div>
            <AdditionalText className='me-5'>Orji Samuel</AdditionalText>
            <AdditionalText1 className='ms-2'>50,000</AdditionalText1>
            <AdditionalText2>0</AdditionalText2>
            <AdditionalText3>0</AdditionalText3>
            <AdditionalText4>May 30</AdditionalText4>
            <AdditionalText5>May 17</AdditionalText5>
            </div>
          </SectionContent>
        </FormSection>
      </FormContainer>
    </CenteredForm>
  );
};

export default StyledForm;
