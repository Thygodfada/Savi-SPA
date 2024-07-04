import styled from "styled-components";

const Daily = styled.div`
  position: relative;
  letter-spacing: 0.15px;
  line-height: 140%;
`;
const DailyParentRoot = styled.div`
  position: relative;
  border-radius: var(--br-5xs);
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
  text-align: center;
  font-size: var(--body-text-bold-16-size);
  color: var(--main-text);
  font-family: var(--button-semi-bold-14);
`;

const TimeFrame = () => {
  return (
    <DailyParentRoot>
      <Daily>Daily</Daily>
      <Daily>Weekly</Daily>
      <Daily>Monthly</Daily>
    </DailyParentRoot>
  );
};

export default TimeFrame;
