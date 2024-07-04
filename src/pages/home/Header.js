import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Header = (props) => {
  return (
    <Container>
      <ContentWrapper>
        <Title>Savi.</Title>
        <Link to="/empty-page"> {/* Link to the empty page */}
          <Button>Get Started</Button>
        </Link>
      </ContentWrapper>
    </Container>
  );
}

const Container = styled.div`
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 8px 0px rgba(33, 33, 33, 0.08);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 24px 60px;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1182px;
  align-items: start;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const Title = styled.div`
  color: var(--Primary-Color, #b5179e);
  text-align: center;
  letter-spacing: 0.15px;
  font: 500 32px/140% Bodoni Moda, sans-serif;
`;

const Button = styled.button`
  color: var(--Neutral-Gray-50, #f8fafc);
  text-align: center;
  letter-spacing: 0.15px;
  white-space: nowrap;
  justify-content: center;
  border-radius: 5px;
  background-color: var(--Primary-Color, #b5179e);
  align-self: stretch;
  padding: 12px 18px;
  font: 600 16px/140% Inter, sans-serif;
  cursor: pointer; /* Add cursor pointer for interaction */

  &:hover {
    background-color: #fff; /* Change background color on hover */
    color: var(--Primary-Color, #b5179e);
  }

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

export default Header;
