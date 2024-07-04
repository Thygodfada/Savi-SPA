import * as React from 'react';
import { Link, redirect } from 'react-router-dom';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


//
const Goals = ({ imageSrc, category, title, amount, progress,id }) => { 
  return (
   
    <CardContainer to={"/personal-saving-details?id="+id}>
      <CardHeader>
        <CardInfo>
          <CardImage loading="lazy" src={imageSrc} />
          <CardContent>
            <CategoryTag>{category}</CategoryTag>
            <CardTitle>{title}</CardTitle>
            <CardAmount>{amount}</CardAmount>
          </CardContent>
        </CardInfo>
        <CardProgress>{parseFloat(progress).toFixed(0)}%</CardProgress>
      </CardHeader>
      <ProgressBar progress={progress} />
    </CardContainer>
  );
};

const CardContainer = styled(Link)`
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.04);
  background-color: var(--White, #fff);
  display: flex;
  flex-direction: column;
  padding: 24px;
  margin-right: 31px;
  text-decoration: none;

  &:hover {
    transform: translateY(0.2rem);
    box-shadow: 0.3rem 0.5rem 1.5rem #bbbbbb;
  }

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const CardHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const CardInfo = styled.div`
  padding-right: 57px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    padding-right: 20px;
  }
`;

const CardImage = styled.img`
  aspect-ratio: 1.32;
  object-fit: contain;
  object-position: center;
  width: 131px;
  max-width: 100%;
`;

const CardContent = styled.div`
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
  margin: auto 0;
`;

const CategoryTag = styled.div`
  color: var(--Teal-500, #14b8a6);
  letter-spacing: 0.07px;
  border-radius: 999px;
  background-color: var(--Teal-100, #ccfbf1);
  align-self: start;
  aspect-ratio: 2.21;
  justify-content: center;
  padding: 6px 10px;
  font: 500 14px/114% Inter, sans-serif;
`;

const CardTitle = styled.div`
  color: #000;
  letter-spacing: 0.12px;
  margin-top: 10px;
  font: 600 24px/83% Inter, sans-serif;
`;

const CardAmount = styled.div`
  color: #000;
  letter-spacing: 0.08px;
  margin-top: 10px;
  white-space: nowrap;
  font: 600 16px/125% Inter, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const CardProgress = styled.div`
  color: #000;
  letter-spacing: 0.12px;
  align-self: start;
  font: 500 24px/67% Inter, sans-serif;
`;

const ProgressBar = styled.div`
  border-radius: 8px;
  background-color: #f2f4f7;
  display: flex;
  height: 4px;
  margin-top: 24px;
  padding-right: 60px;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  &::before {
    content: '';
    background: linear-gradient(
      to right,
      var(--Primary-Color, #b5179e) ${(props) => props.progress || '0%'},
      var(--Grey-100, #f2f4f7) ${(props) => props.progress || '0%'}
    );
    border-radius: 8px;
    width: 100%; /* Full width of the progress bar container */
    height: 100%;
    transition: width 0.3s ease-in-out;
  }

  @media (max-width: 991px) {
    max-width: 100%;
    padding-right: 20px;
  }
`;

export default Goals;
