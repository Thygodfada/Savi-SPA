import React from "react";
import styled from "styled-components";

const FifthSection = (props) => {
    return (
      <TestimonialContainer>
        <ContentContainer>
          <SectionTitle>What our users say?</SectionTitle>
          <TestimonialWrapper>
            <TestimonialRow>
              <TestimonialColumn>
                <TestimonialContent>
                  <Quote>
                    "Savi has transformed the way I save money. Being part of a thrift group has made it easier to stay motivated and accountable. With Savi, I've achieved my savings goals faster than ever before!"
                  </Quote>
                  <TestimonialImage
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/fde26bc24d69fcabd2aa182f70d17d8d17c462aff57ed9494a085e889ba179c1?"
                  />
                  <TestimonialDetails>
                    <AvatarImage
                      loading="lazy"
                      srcSet="..."
                    />
                    <UserDetails>
                      <UserName>Aderemirekun Ayomide</UserName>
                      <UserAssociation>Widower Association</UserAssociation>
                    </UserDetails>
                  </TestimonialDetails>
                </TestimonialContent>
              </TestimonialColumn>
              {/* Repeat the above structure for other testimonials */}
            </TestimonialRow>
          </TestimonialWrapper>
        </ContentContainer>
      </TestimonialContainer>
    );
  }
const TestimonialContainer = styled.div`
  align-items: center;
  background-color: var(--Grey-100, #f2f4f7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px 60px;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1173px;
  flex-direction: column;
  align-items: center;
  margin: 30px 0;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const SectionTitle = styled.div`
  color: var(--Primary-Color, #b5179e);
  letter-spacing: 0.25px;
  white-space: nowrap;
  font: 700 40px/140% Inter, -apple-system, Roboto, Helvetica, sans-serif;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const TestimonialWrapper = styled.div`
  justify-content: center;
  align-self: stretch;
  margin-top: 30px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const TestimonialRow = styled.div`
  gap: 20px;
  display: flex;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const TestimonialColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 0px;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const TestimonialContent = styled.div`
  align-items: center;
  display: flex;
  flex-grow: 1;
  flex-direction: column;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Quote = styled.div`
  color: #000;
  justify-content: center;
  border-top: 2px solid var(--Primary-Color, #b5179e);
  background-color: var(--White, #fff);
  align-self: stretch;
  padding: 33px 22px;
  font: 400 16px/22px Inter, -apple-system, Roboto, Helvetica, sans-serif;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const TestimonialImage = styled.img`
  aspect-ratio: 0.78;
  object-fit: contain;
  object-position: center;
  width: 18px;
  fill: var(--White, #fff);
  overflow: hidden;
  max-width: 100%;
`;

const TestimonialDetails = styled.div`
  align-self: stretch;
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  gap: 20px;
`;

const AvatarImage = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 50px;
  overflow: hidden;
  border-radius: 50%;
  max-width: 100%;
`;

const UserDetails = styled.div`
  align-self: start;
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
`;

const UserName = styled.div`
  color: #000;
  font: 400 16px/140% Inter, -apple-system, Roboto, Helvetica, sans-serif;
`;

const UserAssociation = styled.div`
  color: var(--Grey-500, #667085);
  margin-top: 4px;
  font: 200 16px/140% Inter, -apple-system, Roboto, Helvetica, sans-serif;
`;

export default FifthSection;