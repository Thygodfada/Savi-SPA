import React, { useState } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import MoneyInput from './inputs/MoneyInput';
import { PaystackButton } from 'react-paystack';
toast.configure();

const DepositFunds = ({ onClose, onModalClose }) => {
  let [fundamount, setAmount] = useState('');

  const publicKey = 'pk_test_e9f49ce67e8cb0632c3fe43e7205903280148364';
  const fnd = fundamount.replace(/,/g, '');
  const amount = fnd * 100; // Remember, set in kobo!

  const email = localStorage.getItem('email');

  const componentProps = {
    email,
    amount,
    publicKey,
    text: 'Buy Now',
    onSuccess: ({ reference }) => {
      fundNow(reference);
    },
    onClose: () => alert("Wait! You need this oil, don't go!!!!"),
  };
  const fundNow = async (reference) => {
    let Narration = 'Funded ' + fundamount + ' to wallet from PayStack. Reference number: '+reference;
    const FundAmount = fundamount.replace(/,/g, '');
 let walletnumber = localStorage.getItem('walletNumber');
    try {
      const response = await axios.post(
        'https://localhost:7226/api/Wallet/FundWallet',
        {
          walletnumber,
          FundAmount,
          Narration,
        }
      );
        console.log(response);
      const data = response.data;
      if (data.succeeded) {
        toast.success(data.message);
        onClose();
        onModalClose();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error('' + error);
    }
  };
 
  const handleAmountChange = (e) => {
    const sanitizedValue = e.target.value.replace(/,/g, '');

    if (sanitizedValue === '') {
      setAmount('');
      return;
    }

    const formattedValue = parseFloat(sanitizedValue);
    let numm = formattedValue.toLocaleString();
    setAmount(numm);
   
  };

  return (
    <DepositFundsRoot>
      <FrameParent>
        <TextWrapper>
          <Text5>Fund Your Wallet</Text5>
        </TextWrapper>
        <Text6>
          <TextTxt>
            <PleaseCompleteThe>{`Please complete the KYC verification process to unlock the full features and benefits of `}</PleaseCompleteThe>
            <Savi>Savi</Savi>
            <PleaseCompleteThe>.</PleaseCompleteThe>
          </TextTxt>
        </Text6>
      </FrameParent>
      <TextParent>
        <Text7>Amount to Deposit</Text7>
        <MoneyInput
          type="text"
          placeholder="Type the amount"
          id=""
          name="amount"
          value={fundamount}
          onChange={handleAmountChange}
        />
      </TextParent>
      {/* <Ctadefault onClick={handleDeposit}>
        <Text7>Submit</Text7>
      </Ctadefault> */}

      <StyledPaystackButton {...componentProps} />
    </DepositFundsRoot>
  );
};

export default DepositFunds;

const StyledPaystackButton = styled(PaystackButton)`
  border-radius: var(--br-5xs);
  background-color: var(--primary-color);
  width: 20rem;
  overflow: hidden;
  cursor: pointer;
  border:none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xs) var(--padding-base);
  box-sizing: border-box;
  gap: var(--gap-5xs);
  color: var(--white);
`;

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
const TextTxt = styled.span`
  width: 100%;
`;
const Text6 = styled.div`
  position: relative;
  font-size: var(--text-md-medium-size);
  letter-spacing: 0.15px;
  line-height: 140%;
  text-align: center;
  display: none;
  align-items: center;
  width: 23.38rem;
  height: 3.06rem;
  flex-shrink: 0;
`;
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
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xs) var(--padding-base);
  box-sizing: border-box;
  gap: var(--gap-5xs);
  color: var(--white);
`;
const DepositFundsRoot = styled.div`
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
