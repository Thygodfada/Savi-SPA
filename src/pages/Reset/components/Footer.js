import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  justify-content: space-between;
  display: flex;
  width: 655px;
  gap: 20px;
  height: 100%;
  align-items: flex-end;
  overflow: hidden;
  flex-shrink: 0;
  position: flex;
  margin-bottom: 0;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const PrivacyPolicyText = styled.div`
  color: #000;
  font: 500 18px Inter, sans-serif;
`;

const CopyrightText = styled.div`
  color: #000;
  font: 500 18px Inter, sans-serif;
`;

const Footer = (props) => {
  return (
    <FooterContainer>
      <PrivacyPolicyText>Privacy Policy</PrivacyPolicyText>
      <CopyrightText>Copyright 2022</CopyrightText>
    </FooterContainer>
  );
};

export default Footer;
