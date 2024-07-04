import React from "react";
import styled from "styled-components";

const Footer = (props) => {
  return (
    <>
    <Container>
      <Title>Savi.</Title>
      <ContactInfo>
        <ContactLabel>For more enquiries:</ContactLabel>
        <ContactEmail>helpsupport@easylend.com</ContactEmail>
      </ContactInfo>
      <Image
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/18fc22527fe39988c1436c7e3bea27de2679a851ba8d42b28c875467b7e87fa7?"
      />
      <Foot>
        <Copyright>© 2023 EasyLend. All rights reserved</Copyright>
        <SocialIcons>
          <SocialIcon
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6cf4b15bdab53806a1aa2203a9ef3d27c04863e9c8dcc0fadcfe3ea5ad884a00?"
          />
          <SocialIcon
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/483c989fbbdcc0ec9e098182977c997f909f974b1c1d17c3402cbb12169b431d?"
          />
          <SocialIcon
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/847776e68e09d28ae3323d347521e7bdf54376b5c3066874896c93350f910dd2?"
          />
        </SocialIcons>
      </Foot>
    </Container>
    </>
  );
}
export default Footer;

const Container = styled.div`
  align-items: center;
  background-color: var(--Primary-Color, #b5179e);
  display: flex;
  flex-direction: column;
  padding: 47px 80px;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Title = styled.div`
  color: var(--White, #fff);
  text-align: center;
  letter-spacing: 0.15px;
  margin-top: 6px;
  white-space: nowrap;
  font: 500 32px/140% Bodoni Moda, sans-serif;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  margin-top: 45px;
  gap: 20px;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const ContactLabel = styled.div`
  color: var(--White, #fff);
  letter-spacing: 0.15px;
  flex-grow: 1;
  white-space: nowrap;
  font: 400 16px/140% Inter, sans-serif;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const ContactEmail = styled.div`
  color: var(--White, #fff);
  letter-spacing: 0.15px;
  font: 400 16px/140% Inter, sans-serif;
`;

const Image = styled.img`
  aspect-ratio: 1278;
  object-fit: contain;
  object-position: center;
  width: 100%;
  fill: var(--Grey-100, #f2f4f7);
  overflow: hidden;
  align-self: stretch;
  margin-top: 62px;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Foot = styled.div`
  align-items: start;
  align-self: stretch;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin: 24px 32px 0;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-right: 10px;
    flex-wrap: wrap;
  }
`;

const Copyright = styled.div`
  color: var(--White, #fff);
  letter-spacing: 0.15px;
  flex-grow: 1;
  flex-basis: auto;
  font: 400 16px/140% Inter, sans-serif;
`;

const SocialIcons = styled.div`
  align-self: stretch;
  display: flex;
  gap: 16px;
`;

const SocialIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 24px;
  overflow: hidden;
  max-width: 100%;
`;

