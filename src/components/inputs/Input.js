import React from "react";
import styled from "styled-components";

const InputField = styled.input`
  border-radius: var(--br-5xs);
  background-color: var(--white);
  border: 1px solid var(--grey-300);
  box-sizing: border-box;
  width: 20rem;
  overflow: hidden;
  align-items: center;
  padding: var(--padding-xs) var(--padding-base);
  gap: var(--gap-5xs);
  font-size: var(--button-normal-14-size);
  color: black;
  
`;

const TextParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;

const Text4 = styled.div`
  position: relative;
  letter-spacing: 0.15px;
  line-height: 140%;
  font-weight: 600;
`;

const Input = ({ label, type,  placeholder, name, id,value,onChange, loading, required=false }) => {
  return (
    <div>
      <TextParent>
        <Text4>{label}</Text4>
        <InputField type={type} name={name} id={id} placeholder={placeholder} value={value} onChange={onChange} disabled={loading} required={required} />
      </TextParent>
    </div>
  );
};
export default Input;
