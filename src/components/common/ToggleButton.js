import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  border-radius: 50px;
  border: none;
  width: 50px;
  cursor: pointer;
  user-select: none;
  height: 30px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DialogButton = styled.button`
  cursor: pointer;
  background-color: #ffffff;
  padding: 4px;
  margin: 3px;
  border: none;
  width: 20px;
  height: 20px;
  border-radius: 50px;
  position: absolute;
  left: 17px;
  transition: all 0.3s ease;
`;

export default function ToggleButton({
  buttonColor,
  selected,
  toggleSelected,
}) {
  return (
    <Container
      style={ selected
            ? {
              backgroundColor:'#14A800'
              }
            : {
        backgroundColor: buttonColor,
      }}
      onClick={toggleSelected}
    >
      <DialogButton
        style={
          selected
            ? {
              }
            : {
                left: '3px',
              }
        }
      ></DialogButton>
    </Container>
  );
}

ToggleButton.propTypes = {
  selected: PropTypes.bool.isRequired,
  toggleSelected: PropTypes.func.isRequired,
};
