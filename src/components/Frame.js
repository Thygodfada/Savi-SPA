import styled from "styled-components";

const Exit = styled.div`
  position: relative;
  letter-spacing: 0.15px;
  line-height: 140%;
`;
const ExitParentRoot = styled.div`
  position: relative;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xs);
  box-sizing: border-box;
  gap: var(--gap-3xs);
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
  text-align: right;
  font-size: var(--text-md-medium-size);
  color: var(--main-text);
  font-family: var(--text-md-medium);
`;

const Frame = () => {
  return (
    <ExitParentRoot>
      <Exit>Exit</Exit>
      <Exit>Clear Messages</Exit>
    </ExitParentRoot>
  );
};

export default Frame;
