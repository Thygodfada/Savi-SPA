import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonComponent = styled.button`
  width: 100%;
  height: 48px;
  background: #14a800;
  border: #14a800;
  border-radius: 4px;
  color: #ffffff;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
`;

export default function Button({ type, children, onClick, style, className }) {
  return (
    <ButtonComponent
      type={type}
      onClick={onClick}
      style={style}
      className={className}
    >
      {children}
    </ButtonComponent>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
};
