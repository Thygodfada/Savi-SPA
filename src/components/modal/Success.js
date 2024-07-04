import React from 'react';
import styled from 'styled-components';

// Styled components for the success modal popup
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 10px;
  width: 280px; /* Adjusted width */
  max-height: 90%;
  overflow-y: auto;
`;

const CloseIcon = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  margin: 20px auto;
  display: block;
`;

const SuccessMessage1 = styled.p`
  font-size: 16px; /* Adjusted font size */
  color: black;
  text-align: center;
  margin-bottom: 5px;
  word-wrap: break-word;
`;

const SuccessMessage = styled.p`
  font-size: 12px;
  color: black;
  text-align: center;
  margin-bottom: 5px;
  word-wrap: break-word;
  padding: 10px; /* Adjusted padding */
`;

// Success modal component
const SuccessModal = ({ message, onClose }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(); // Close the modal only if the click is on the overlay itself, not on its children
    }
  };

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContainer>
        <CloseIcon src="/Close.png" alt="Close Icon" onClick={onClose} />
        <Image src="/Group 39889.png" alt="Success Icon" />
        <SuccessMessage1>Success!</SuccessMessage1>
        <SuccessMessage>You joined Money Palava Savers successfully. The contribution will commence immediately all the slots are occupied</SuccessMessage>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default SuccessModal;
