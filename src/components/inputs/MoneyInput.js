import React from "react";
import styled from "styled-components";


const Input = styled.input`
  border: 1px solid var(--grey-300);
  border-radius: var(--br-5xs);
  padding: var(--padding-xs) var(--padding-base);
  font-size: var(--input-small-medium-size);
  color: black;
  box-sizing: border-box;
  margin-top: var(--gap-5xs);
  background-color: var(--white);
  width: 20rem;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-81xl);
`;


const MoneyInput = ({ type,  placeholder, name, id,value,onChange }) => {
  return (
        <Input type={type} name={name} id={id} placeholder={placeholder} value={value} onChange={onChange}  required />
  );
};
export default MoneyInput;
