import * as React from 'react';
import styled from 'styled-components';
import Body from '../Reset/components/EmailConfirmedBody'
import { Link } from 'react-router-dom';

 
const EmailConfirmed = (props) => {

  return (
    <Container>
      <Link to="/" style={{textDecoration:'none',color:'inherit'}}><Title>Savi.</Title></Link>
      <MainContainer>
        <Body />
      </MainContainer>
    </Container>
  );
};

export default EmailConfirmed;

const Container = styled.span`
  align-items: start;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 0 80px 0 50px;
  @media (max-width: 991px) {
    flex-wrap: wrap;
    padding: 0 20px;
  }
`;

const Title = styled.div`
  color: var(--primary-color, #b5179e);
  text-align: center;
  letter-spacing: 0.15px;
  margin-top: 50px;
  font: 700 24px/140% Bodoni Moda, sans-serif;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const MainContainer = styled.div`
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  align-self: stretch;
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
  padding: 50px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

