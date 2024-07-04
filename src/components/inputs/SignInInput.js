import React from "react";
import styled from "styled-components";

const TextParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
 
`;
const Buttondefault1 = styled.div`
  align-self: stretch;
  border-radius: var(--br-5xs);
  background-color: var(--white);
  border: 1px solid var(--grey-300);
  overflow: hidden;
  display: flex;
  width:23em;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-xs) var(--padding-base);
  gap: var(--gap-5xs);
`;

const Text4 = styled.div`
  position: relative;
  font-size: var(--body-textmedium-16-size);
  letter-spacing: 0.15px;
  line-height: 140%;
  font-weight: 600;
  font-family: var(--body-textmedium-16);
  color: var(--main-text);
  text-align: left;
`;
const Text5 = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-family: var(--body-textmedium-16);
  font-size: var(--body-textmedium-16-size);
  background-color: transparent;
  position: relative;
  letter-spacing: 0.15px;
  line-height: 140%;
  color: black;
  text-align: left;
  display: flex;
  align-items: center;
`;




const SignInInput = ({ label, type,  placeholder, name, id, value, onChange }) => {
  return (
    <div>
      <TextParent>
        <Text4>{label}</Text4>
        <Buttondefault1>
        <Text5 placeholder={placeholder} type={type} name={name} id={id} value={value} onChange={onChange} />
        </Buttondefault1>
      </TextParent>
    </div>
  );
};
export default SignInInput;
