import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { VscEyeClosed, VscEye } from 'react-icons/vsc';

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputField = styled.input`
  height: 48px;
  width: 100%;
  background: transparent;
  border: 1px solid #c4c4c4;
  border-radius: 4px;
  padding: 14px 14px;
  color: #979797;
  font-size: 16px;
`;

const Label = styled.p`
  font-family: Mulish;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  margin-bottom: 10px;
  color: #21334f;
`;

const ShowPassword = styled.div`
  position: absolute;
  right: 0;
  padding: 10px;
  min-width: 40px;
`;

const FormGroup = styled.div`
  position: relative;
`;

const HelperText = styled.p`
  font-family: Mulish;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #14a800;
  margin-bottom: 0;
  margin-top: 10px;
`;

const ErrorText = styled.p`
  font-family: Mulish;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #de1e1e;
  margin-bottom: 0;
  margin-top: 10px;
`;

export default function Input({
  type,
  label,
  placeholder,
  onChange,
  value,
  helperText,
  name,
  style,
  className,
  error,
  errorMessage,
  onBlur,
  isTrueOrFalse = false,
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <InputArea>
        <Label>{label}</Label>
        <FormGroup>
          {type === 'password' ? (
            <ShowPassword onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <VscEyeClosed /> : <VscEye/>}
            </ShowPassword>
          ) : null}
          <InputField
            type={showPassword ? 'text' : type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`${className} ${error ? 'input-error' : ""}`}
            name={name}
            style={style}
            onBlur={onBlur}
            required={isTrueOrFalse}
          />
        </FormGroup>
        {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
        <HelperText>{helperText}</HelperText>
      </InputArea>
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.oneOf([
    'text',
    'password',
    'email',
    'number',
    'tel',
    'file',
    'date',
  ]).isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.any,
  helperText: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
};
