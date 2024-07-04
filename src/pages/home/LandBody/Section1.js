import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Image from '../../../assets/images/Image1.png';
import eclipse from '../../../assets/eclipse.svg';

const FirstSection = (props) => {
  return (
    <StyledContainer>
      <TextColumn>
        <HeaderText>
          <span style={{ fontWeight: 800, color: 'black' }}>
            Achieve Financial Success with
          </span>
          <span style={{ fontWeight: 800, color: 'rgba(181,23,158,1)' }}>
            {' '}
            Savi:{' '}
          </span>
          <span style={{ fontWeight: 800, color: 'black' }}>The Future of</span>
          <span style={{ fontWeight: 800, color: 'rgba(181,23,158,1)' }}>
            {' '}
            Smart Savings
          </span>
          <span style={{ fontWeight: 800 }}>.</span>
        </HeaderText>
        <Description>
          Experience the convenience of secure group savings and personalized
          savings plans with Savi. Take control of your finances and unlock a
          brighter financial future.
        </Description>
        <Link to="/empty-page">
          {' '}
          <GetStartedButton>Get Started</GetStartedButton>
        </Link>
      </TextColumn>
      <StyledFrame>
        <div className="overlap-group">
          {/* <img className="mask-group" alt="Mask group" src={eclipse} /> */}
          <img className="img" alt="Mask group" src={Image} />
        </div>
      </StyledFrame>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  align-items: center;
  background-color: rgba(245, 185, 237, 0.1);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 50px 60px;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 60%;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const HeaderText = styled.div`
  color: var(--Primary-Color, #b5179e);
  letter-spacing: 0.25px;
  align-self: stretch;
  font: 600 48px/67px Inter, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 40px;
    line-height: 62px;
  }
`;

const Description = styled.div`
  color: var(--Main-Text, #101828);
  letter-spacing: 0.15px;
  align-self: stretch;
  margin-top: 24px;
  font: 400 16px/22px Inter, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const GetStartedButton = styled.button`
  width: 15%;
  color: var(--Basic-White, #fff);
  letter-spacing: 0.15px;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid var(--Primary-Color, #b5179e);
  background-color: var(--Primary-Color, #b5179e);
  margin-top: 24px;
  padding: 11px 15px;
  font: 400 16px/140% Inter, sans-serif;
  cursor: pointer; /* Add cursor pointer for interaction */

  &:hover {
    background-color: #fff; /* Change background color on hover */
    color: var(--Primary-Color, #b5179e);
  }

  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;

const StyledFrame = styled.div`
  height: 479px;
  position: relative;
  width: 534px;

  .overlap-group {
    height: 479px;
    position: relative;
    width: 664px;
  }

  .mask-group {
    height: 425px;
    left: 26px;
    position: absolute;
    top: 54px;
    width: 638px;
  }

  .img {
    height: 455px;
    left: 0;
    position: absolute;
    top: 0;
    width: 500px;
  }
`;

export default FirstSection;
