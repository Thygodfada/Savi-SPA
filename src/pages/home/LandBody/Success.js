import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSuccess = styled.svg`
  & .path {
    fill: ${(props) => props.color};
  }
`;

const Success = ({ color = 'black', className }) => (
  <StyledSuccess
    className={`success ${className}`}
    fill="none"
    height="25"
    viewBox="0 0 24 25"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
    color={color}
  >
    <path
      className="path"
      d="M12 3.4502C10.22 3.4502 8.47991 3.97804 6.99987 4.96697C5.51983 5.9559 4.36628 7.36151 3.68509 9.00604C3.0039 10.6506 2.82567 12.4602 3.17294 14.206C3.5202 15.9518 4.37737 17.5555 5.63604 18.8142C6.89472 20.0728 8.49836 20.93 10.2442 21.2773C11.99 21.6245 13.7996 21.4463 15.4442 20.7651C17.0887 20.0839 18.4943 18.9304 19.4832 17.4503C20.4722 15.9703 21 14.2302 21 12.4502C21 10.0632 20.0518 7.77406 18.364 6.08623C16.6761 4.39841 14.387 3.4502 12 3.4502ZM16.245 10.6427L12 14.8802C11.5781 15.3015 11.0063 15.5382 10.41 15.5382C9.81375 15.5382 9.24188 15.3015 8.82 14.8802L7.755 13.8227C7.68508 13.7528 7.6296 13.6698 7.59176 13.5784C7.55391 13.487 7.53444 13.3891 7.53444 13.2902C7.53444 13.1913 7.55391 13.0934 7.59176 13.002C7.6296 12.9106 7.68508 12.8276 7.755 12.7577C7.82493 12.6878 7.90795 12.6323 7.99932 12.5945C8.09068 12.5566 8.18861 12.5371 8.2875 12.5371C8.3864 12.5371 8.48432 12.5566 8.57569 12.5945C8.66706 12.6323 8.75008 12.6878 8.82 12.7577L9.8775 13.8227C9.94723 13.893 10.0302 13.9488 10.1216 13.9869C10.213 14.0249 10.311 14.0445 10.41 14.0445C10.509 14.0445 10.607 14.0249 10.6984 13.9869C10.7898 13.9488 10.8728 13.893 10.9425 13.8227L15.18 9.5777C15.2499 9.50777 15.333 9.4523 15.4243 9.41445C15.5157 9.37661 15.6136 9.35713 15.7125 9.35713C15.8114 9.35713 15.9093 9.37661 15.0007 9.41445C16.0921 9.4523 16.1751 9.50777 16.245 9.5777C16.3149 9.64762 16.3704 9.73064 16.4082 9.82201C16.4461 9.91338 16.4656 10.0113 16.4656 10.1102C16.4656 10.2091 16.4461 10.307 16.4082 10.3984C16.3704 10.4897 16.3149 10.5728 16.245 10.6427Z"
    />
  </StyledSuccess>
);

Success.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
};

export default Success;