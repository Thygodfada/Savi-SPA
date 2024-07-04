import { useState, useCallback, useEffect } from 'react';
import AddMoreGoals from '../../components/AddMoreGoals';
import PortalPopup from '../../components/PortalPopup';
import WithdrawFunds from '../../components/savings/WithdrawFunds';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import FundTarget from '../../components/savings/FundTarget';

const PersonalSaving = () => {
  const location = useLocation();

  const [isAddMoreGoalsOpen, setAddMoreGoalsOpen] = useState(false);
  const [isWithdrawFundsOpen, setWithdrawFundsOpen] = useState(false);
  const [isWithdrawFunds1Open, setWithdrawFunds1Open] = useState(false);
  const [personalSavingData, setPersonalSavingData] = useState(null);
  const [savingsId, setSavingsId] = useState(null);

  const closeAddMoreGoals = useCallback(() => {
    setAddMoreGoalsOpen(false);
  }, []);
  const openWithdrawFunds = useCallback(() => {
    setWithdrawFundsOpen(true);
  }, []);

  const closeWithdrawFunds = useCallback(() => {
    setWithdrawFundsOpen(false);
  }, []);

  const openWithdrawFunds1 = useCallback(() => {
    setWithdrawFunds1Open(true);
  }, []);

  const closeWithdrawFunds1 = useCallback(() => {
    setWithdrawFunds1Open(false);
  }, []);
  const fetchPersonalSavingData = async () => {
      try {
        const searchParams = new URLSearchParams(location.search);
        const savingsId = searchParams.get('id');
        setSavingsId(savingsId);

        const response = await fetch(`https://localhost:7226/api/Saving/PersonalSavingDetails?savingsId=${savingsId}`);
        let data = await response.json();
        data = data.data;
        console.log(data);
        setPersonalSavingData(data);
      } catch (error) {
        console.error('Error fetching personal savings data:', error);
      }
    };
  useEffect(() => {
    fetchPersonalSavingData();
  }, []);

  const refreshGoal = () => {
    fetchPersonalSavingData();
    console.log("refreshed goal");
  };

  function setDaysLeft(date){
    const givenDate = new Date(date);
    const today = new Date();
    const difference =  givenDate.getTime()-today.getTime();

    // Convert milliseconds to days, hours, minutes, seconds
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    return `${days} days`;
  }

  return (
    <>
      

        <FrameGroup>
          
          <FrameContainer>
            <FrameDiv>
              
              <AmountSavedParent>
                <Savings>Amount Saved</Savings>
                <Parent1>
                  <B>₦{parseInt(personalSavingData?.balance).toLocaleString() }</B>
                  <EyeSlashIcon alt="" />
                </Parent1>
              </AmountSavedParent>
              <AmountSavedParent>
                <Savings>Total Target</Savings>
                <Parent1>
                  <B>₦{parseInt(personalSavingData?.goalAmount).toLocaleString() }</B>
                  <EyeSlashIcon alt="" />
                </Parent1>
              </AmountSavedParent>
              <AmountSavedParent>
                <Savings>Days left</Savings>
                <Parent1>
                  <B>{setDaysLeft(personalSavingData?.targetDate)}</B>
                  <EyeSlashIcon alt="" />
                </Parent1>
              </AmountSavedParent>
            </FrameDiv>
            <FrameParent1>
              <IconaddCircleOutlineParent onClick={openWithdrawFunds}>
                <IconaddCircleOutline alt="" src="/iconadd-circle-outline.svg" />
                <PageName>Fund Target</PageName>
              </IconaddCircleOutlineParent>
              <SendParent onClick={openWithdrawFunds1}>
                <IconaddCircleOutline alt="" src="/send.svg" />
                <PageName>Withdraw to Wallet</PageName>
              </SendParent>
            </FrameParent1>
          </FrameContainer>

          <FrameParent4>
            <FrameParent3>
              <FrameParent2></FrameParent2>
            </FrameParent3>
            <AutoSaveSettingWrapper>
              <PageName>Auto-Save Setting</PageName>
            </AutoSaveSettingWrapper>
          </FrameParent4>
        </FrameGroup>
      {isAddMoreGoalsOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAddMoreGoals}
        >
          <AddMoreGoals onClose={closeAddMoreGoals} />
        </PortalPopup>
      )}
      {isWithdrawFundsOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeWithdrawFunds}
        >
          <FundTarget onClose={closeWithdrawFunds} savingsId={savingsId} refreshGoal={refreshGoal} />
        </PortalPopup>
      )}
      {isWithdrawFunds1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeWithdrawFunds1}
        >
          <WithdrawFunds onClose={closeWithdrawFunds1}  savingsId={savingsId} refreshGoal={refreshGoal} />
        </PortalPopup>
      )}
    </>
  );
};

export default PersonalSaving;



const Savings = styled.div`
  position: relative;
  letter-spacing: 0.15px;
  line-height: 140%;
  font-weight: 600;
`;

const AmountSavedParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
`;

const AddNewGoal = styled.div`
  position: relative;
  font-size: var(--body-text-bold-16-size);
  letter-spacing: 0.15px;
  line-height: 140%;
  font-weight: 600;
  color: var(--blue-1);
  white-space: pre-wrap;
  text-align: left;
  cursor: pointer;
`;
const TripToBaliParent = styled.div`
  position: absolute;
  top: 8.75rem;
  left: 19.44rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 44.75rem;
  text-align: center;
  font-size: var(--font-size-13xl);
`;
const PageName = styled.div`
  position: relative;
  line-height: 1.25rem;
  font-weight: 600;
`;

const MyGoal = styled.div`
  position: relative;
  line-height: 1.25rem;
  cursor: pointer;
`;


const FrameOfMyGoals = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0rem 2.44rem;
  margin-bottom: 1em;
  box-sizing: border-box;
  max-width: 100%;
  font-size: var(--font-size-13xl);
  color: var(--color-black);
`;

const MyGoals = styled.h1`
  margin: 0;
  width: 16.13rem;
  position: relative;
  font-size: inherit;
  letter-spacing: 0.15px;
  line-height: 140%;
  font-weight: 700;
  font-family: inherit;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  @media screen and (max-width: 1050px) {
    font-size: var(--font-size-7xl);
    line-height: 2.25rem;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
    line-height: 1.69rem;
  }
`;

const IconsolidcheveronRight2 = styled.img`
  width: 1.25rem;
  position: relative;
  height: 1.25rem;
  overflow: hidden;
  flex-shrink: 0;
`;
const TripToBali = styled.div`
  position: relative;
  line-height: 1.25rem;
  font-weight: 600;
  color: var(--main-text);
`;
const MyGoalParent = styled.div`
  position: absolute;
  top: 6rem;
  left: 19.44rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  color: var(--grey-400);
`;
const B = styled.b`
  position: relative;
  line-height: 140%;
`;
const EyeSlashIcon = styled.img`
  width: 1.5rem;
  position: relative;
  height: 1.5rem;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
`;
const Parent1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-13xl);
  font-size: var(--headline-bold-48-size);
`;
const FrameDiv = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const IconaddCircleOutline = styled.img`
  width: 1.5rem;
  position: relative;
  height: 1.5rem;
  overflow: hidden;
  flex-shrink: 0;
`;
const IconaddCircleOutlineParent = styled.div`
  border-radius: var(--br-xs);
  background-color: var(--white);
  height: 2.75rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-base) var(--padding-5xl);
  box-sizing: border-box;
  gap: var(--gap-5xs);
  cursor: pointer;
`;
const SendParent = styled.div`
  border-radius: var(--br-xs);
  border: 1.5px solid var(--white);
  box-sizing: border-box;
  height: 2.75rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-base) var(--padding-5xl);
  gap: var(--gap-5xs);
  cursor: pointer;
  color: var(--white);
`;
const FrameParent1 = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--gap-5xl);
  font-size: var(--button-semi-bold-14-size);
  color: var(--primary-color);
`;
const FrameContainer = styled.div`
  width: 62.44rem;
  border-radius: var(--br-base);
  background-color: var(--primary-color);
  height: 16.38rem;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xl) var(--padding-13xl);
  box-sizing: border-box;
  gap: var(--gap-3xs);
`;

const FrameParent2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-13xl);
`;
const FrameParent3 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xl);
  gap: 2.5rem;
`;
const AutoSaveSettingWrapper = styled.div`
  width: 14.06rem;
  border-radius: var(--br-81xl);
  background-color: var(--primary-color);
  height: 2.75rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs);
  box-sizing: border-box;
  font-size: var(--button-semi-bold-14-size);
  color: var(--white);
`;
const FrameParent4 = styled.div`
  display: none;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  gap: var(--gap-5xl);
  font-size: var(--font-size-xl);
  color: var(--grey-400);
`;
const FrameGroup = styled.div`
  //position: absolute;
  //top: 14.19rem;
  //left: 19.44rem;
  width:'100%';
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  //gap: var(--gap-5xl);
  font-size: var(--body-text-bold-16-size);
  color: var(--white);
`;

const PersonalSavingRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--grey-50);
  height: 65.81rem;
  text-align: left;
  font-size: var(--button-semi-bold-14-size);
  color: var(--main-text);
  font-family: var(--button-semi-bold-14);
`;
