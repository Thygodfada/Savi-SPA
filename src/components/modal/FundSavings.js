import styled from "styled-components";

const Text5 = styled.b`
  position: relative;
  line-height: 140%;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const PleaseCompleteThe = styled.span``;
const Savi = styled.span`
  color: var(--primary-color);
`;

const Input = styled.input`
  border: 1px solid var(--grey-300);
  border-radius: var(--br-5xs);
  padding: var(--padding-xs) var(--padding-base);
  font-size: var(--input-small-medium-size);
  color: var(--grey-400);
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
   &[type="number"] {
    inputmode: numeric;
    pattern: "^[0-9]+(\\.[0-9]{1,2})?$";
  }
`;

const FrameParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  font-size: var(--headline-medium-24-size);
`;
const Text7 = styled.div`
  position: relative;
  letter-spacing: 0.15px;
  line-height: 140%;
  font-weight: 600;
`;

const Button = styled.div`
  position: relative;
  letter-spacing: 0.15px;
  line-height: 140%;
  font-weight: 600;
`;
const Iconadd4 = styled.img`
  position: relative;
  width: 1.25rem;
  height: 1.25rem;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
  display: none;
`;
const Text8 = styled.div`
  position: relative;
  line-height: 1.25rem;
`;
const TextParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const Ctadefault = styled.div`
  border-radius: var(--br-5xs);
  background-color: var(--primary-color);
  width: 20rem;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xs) var(--padding-base);
  box-sizing: border-box;
  gap: var(--gap-5xs);
  color: var(--white);
`;
const SaveFundsRoot = styled.div`
  position: relative;
  border-radius: var(--br-base);
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-13xl) var(--padding-21xl);
  box-sizing: border-box;
  gap: var(--gap-13xl);
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
  text-align: left;
  font-size: var(--text-md-medium-size);
  color: var(--main-text);
  font-family: var(--text-md-medium);
`;

const FundSavings = () => {
  return (
    <SaveFundsRoot>
      <FrameParent>
        <TextWrapper>
          <Text5>Access Your Wallet</Text5>
        </TextWrapper>
      </FrameParent>
      <TextParent>
        <Text7>Amount to Save</Text7>
        <Input type="number" placeholder="Type the amount" />
      </TextParent>
      <Ctadefault>
        <Button>Submit</Button>
      </Ctadefault>
    </SaveFundsRoot>
  );
};

export default FundSavings;
