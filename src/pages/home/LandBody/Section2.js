import React from "react";
import styled from "styled-components";
import user from "../../../assets/users.svg"
import wallet from "../../../assets/wallet-alt.svg"
import shield from "../../../assets/shield-alt.svg"
import moneywithdrawal from "../../../assets/money-withdrawal.svg"
import { Link } from "react-router-dom"

const SecondSection = (props) => {
  return (
    <Container>
      <ContentWrapper>
        <ColumnWrapper>
          <Column>
            <Card>
              <Icon
                loading="lazy"
                src={user}
              />
              <Title>Join Thrift Groups</Title>
              <Description>
                Save collectively with rotating lump sum payouts, eliminating risks of traditional methods.
              </Description>
              <LearnMore>
              <StyledLink to="/empty-page">Learn more</StyledLink>
                <ArrowIcon
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/556d6e501ffdeeabb2b2c27b7e1723935e949cb9795029337f7821f09624eb0d?"
                />
              </LearnMore>
            </Card>
          </Column>
          <Column>
            <Card>
              <Icon
                loading="lazy"
                src={moneywithdrawal}
              />
              <Title>Hassle-Free Cashouts</Title>
              <Description>
                Enjoy rotating lump sum payouts, ensuring fair distribution among group members.
              </Description>
              <LearnMore>
              <StyledLink to="/empty-page">Learn more</StyledLink>
                <ArrowIcon
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8bf8b337c7602b704a350d5110ffeb9a5e43902f8cdd9131511780fd00faa98?"
                />
              </LearnMore>
            </Card>
          </Column>
          <Column>
            <Card>
              <Icon
                loading="lazy"
                src={shield}
              />
              <Title>Secure and Convenient</Title>
              <Description>
                Enjoy peace of mind with robust security measures and user-friendly wallet management.
              </Description>
              <LearnMore>
               <StyledLink to="/empty-page">Learn more</StyledLink>
                <ArrowIcon
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f225d1775f76a24673684fd2e9790875706d370785d32140aab3e3e98617214?"
                />
              </LearnMore>
            </Card>
          </Column>
          <Column>
            <Card>
              <Icon
                loading="lazy"
                src={wallet}
              />
              <Title>Easy Wallet Management</Title>
              <Description>
                Seamlessly manage your funds, add money, and withdraw when you need it.
              </Description>
              <LearnMore>
              <StyledLink to="/empty-page">Learn more</StyledLink>
                <ArrowIcon
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a0ffa2692c750b2b2c7389c39353bed48e6095d037198247a2c438ca0723f85?"
                />
              </LearnMore>
            </Card>
          </Column>
        </ColumnWrapper>
      </ContentWrapper>
    </Container>
  );
}

const Container = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 50px 60px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1146px;
  margin: 30px 0;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const ColumnWrapper = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 25%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Card = styled.div`
  align-items: flex-start;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  padding: 10px 20px;
  @media (max-width: 991px) {
    margin-top: 30px;
  }
`;

const Icon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 50px;
  overflow: hidden;
  align-self: start;
  max-width: 100%;
`;

const Title = styled.div`
  align-self: stretch;
  color: #000;
  letter-spacing: 0.25px;
  margin-top: 12px;
  white-space: nowrap;
  font: 600 20px/140% Inter, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Description = styled.div`
  align-self: stretch;
  color: #000;
  letter-spacing: 0.15px;
  margin-top: 12px;
  font: 400 16px/22px Inter, sans-serif;
`;

const LearnMore = styled.div`
  align-self: stretch;
  display: flex;
  margin-top: 12px;
  padding-right: 18px;
  justify-content: space-between;
  gap: 8px;
`;

const StyledLink = styled(Link)`
  color: var(--Primary-Color, #b5179e);
  letter-spacing: 0.15px;
  font: 400 16px/140% Inter, sans-serif;
  text-decoration: none; /* Remove default link underline */
`;

const ArrowIcon = styled.img`
  aspect-ratio: 1.33;
  object-fit: contain;
  object-position: center;
  width: 16px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  align-self: center;
  max-width: 100%;
  margin: auto 0;
`;

export default SecondSection;