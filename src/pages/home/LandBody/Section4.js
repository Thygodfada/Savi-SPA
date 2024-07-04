import React from 'react';
import styled from 'styled-components';

const FourthSection = (props) => {
  return (
    <Container>
      <Title>Why use Savvi?</Title>
      <ContentContainer>
        <FeatureContainer>
          <FeatureLeft>
            <FeatureImage
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a308ed01fef2e955ab8a1668b8850edc8e4382a6c2fd797b97a4f001cf7296fa?"
            />
            <FeatureTitle>Contribution Analytics</FeatureTitle>
            <FeatureDescription>
              Admins gain valuable insights into group contributions and track
              member participation.
            </FeatureDescription>
          </FeatureLeft>
          <FeatureCenter>
            <FeatureImage
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/58095922ebe12ccc65de4dc204f9b2d4e7c6702706f8089d81c1be3c540c7c4a?"
            />
            <FeatureTitle>Wallet Integration</FeatureTitle>
            <FeatureDescription>
              Add funds to your wallet easily using various payment methods and
              withdraw securely.
            </FeatureDescription>
          </FeatureCenter>
          <FeatureRight>
            <FeatureImage
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/674b3ddd57744af04e7c3e1932e6c7323add757948d27f5535a73e971977eea5?"
            />
            <FeatureTitle>Notifications and Reminders</FeatureTitle>
            <FeatureDescription>
              Stay informed about group activities, cashouts, and important
              updates.
            </FeatureDescription>
          </FeatureRight>
        </FeatureContainer>
      </ContentContainer>
    </Container>
  );
};

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px 50px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  max-width: 1037px;
  flex-direction: row; /* Change to row to display side by side */
  align-items: center;
  margin: 30px 0;
  @media (max-width: 991px) {
    flex-direction: column;
    max-width: 100%;
  }
`;

const Title = styled.div`
  color: var(--Primary-Color, #b5179e);
  letter-spacing: 0.25px;
  white-space: nowrap;
  font: 700 40px/140% Inter, -apple-system, Roboto, Helvetica, sans-serif;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const FeatureContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between; /* Add this line to display features side by side */
  align-items: center; /* Align items in the center */
  align-self: stretch;
  margin-top: 32px;
  @media (max-width: 991px) {
    flex-direction: column;
    max-width: 100%;
  }
`;

const Feature = styled.div`
  display: relative;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
    margin-top: 40px;
  }
`;

const FeatureLeft = styled(Feature)`
  order: 1;
`;

const FeatureCenter = styled(Feature)`
  order: 2;
`;

const FeatureRight = styled(Feature)`
  order: 3;
`;

const FeatureImage = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 50px;
  overflow: hidden;
  max-width: 100%;
`;

const FeatureTitle = styled.div`
  color: var(--Main-Text, #101828);
  align-self: stretch;
  margin-top: 8px;
  font: 600 20px/140% Inter, sans-serif;
`;

const FeatureDescription = styled.div`
  align-self: stretch;
  color: var(--Main-Text, #101828);
  letter-spacing: 0.15px;
  margin-top: 8px;
  font: 400 16px/22px Inter, sans-serif;
`;

export default FourthSection;
