import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
const ModalContent = styled.div`
  width: 635px;
  background: #ffffff;
`;
const ModalHeader = styled.div`
  position: relative;
  height: 52px;
  border-bottom: 1px solid #d8d8d8;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1d2126;
  font-weight: bold;
  font-size: 16px;
`;
const CloseButton = styled.button`
  position: absolute;
  right: 57px;
  border: 0;
  background: transparent;
  font-weight: bold;
`;

const ModalBody = styled.div`
  padding: 30px 57px;
`;

export default function Modal({ title, children, isOpen, closeModal }) {
  const ModalArea = styled.div`
    display: ${isOpen ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
  `;
  return (
    <ModalArea>
      <ModalContent>
        <ModalHeader>
          {title}
          <CloseButton onClick={() => closeModal()}>&times;</CloseButton>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </ModalArea>
  );
}
Modal.propTypes = {
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
