import { Link } from "react-router-dom";
import styled from "styled-components";

const Savi = styled.h1`
  margin: 0;
  position: relative;
  font-size: inherit;
  letter-spacing: 0.15px;
  line-height: 140%;
  font-weight: 500;
  font-family: inherit;
  white-space: nowrap;
`;
const LinkItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-5xl) var(--padding-5xs);
`;
const HeaderLinkBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const LeftNest = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const Faqs = styled.div`
  position: relative;
  line-height: 1.25rem;
  display: none;
`;
const Apply = styled.div`
  position: relative;
  letter-spacing: 0.15px;
  line-height: 140%;
  font-weight: 600;
  cursor:pointer;
  text-decoration:none !important;
  color:white
`;
const Button = styled.div`
  border-radius: 5px;
  background-color: var(--primary-color);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xs) var(--padding-base);
  white-space: nowrap;
`;
const RightNest = styled.div`
  border-radius: var(--br-5xs);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: var(--neutral-gray-50);
`;
const FrameFrame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-xl) 0rem;
  gap: var(--gap-base);
  font-size: var(--body-text-normal-16-size);
  color: var(--main-text);
  font-family: var(--body-text-normal-16);
`;
const MainHeader = styled.header`
  align-self: stretch;
  background-color: var(--white);
  box-shadow: 0px 4px 8px rgba(33, 33, 33, 0.08);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 8.13rem 0rem 7.5rem;
  gap: var(--gap-xl);
  top: 0;
  z-index: 99;
  position: sticky;
  text-align: center;
  font-size: var(--font-size-13xl);
  color: var(--primary-color);
  font-family: var(--font-bodoni-moda);
  @media screen and (max-width: 450px) {
    padding-left: 3.75rem;
    padding-right: 4.06rem;
    box-sizing: border-box;
  }
`;
const AchieveFinancialSuccess = styled.span``;
const Savi1 = styled.span`
  color: var(--primary-color);
`;
const AchieveFinancialSuccessContainer = styled.h1`
  margin: 0;
  align-self: stretch;
  position: relative;
  font-size: inherit;
  letter-spacing: 0.25px;
  line-height: 140%;
  font-weight: 800;
  font-family: inherit;
  @media screen and (max-width: 1050px) {
    font-size: 2.38rem;
    line-height: 3.38rem;
  }
  @media screen and (max-width: 450px) {
    font-size: 1.81rem;
    line-height: 2.5rem;
  }
`;
const ExperienceTheConvenience = styled.div`
  position: relative;
  font-size: var(--body-text-normal-16-size);
  letter-spacing: 0.15px;
  line-height: 140%;
  display: inline-block;
  width: 34.44rem;
  max-width: 100%;
`;
const Iconadd = styled.img`
  position: relative;
  width: 1.25rem;
  height: 1.25rem;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
  min-height: 1.25rem;
`;
const DividerVector = styled.div`
  position: relative;
  font-size: var(--body-text-normal-16-size);
  letter-spacing: 0.15px;
  line-height: 140%;
  font-family: var(--body-text-normal-16);
  color: var(--white);
  text-align: left;
  white-space: nowrap;
`;
const Buttondefault = styled.button`
  cursor: pointer;
  border: 1px solid var(--primary-color);
  padding: var(--padding-xs) var(--padding-base);
  background-color: var(--primary-color);
  border-radius: var(--br-5xs);
  box-sizing: border-box;
  width: 10.06rem;
  height: 2.75rem;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--gap-5xs);
`;
const ThirdFrame = styled.div`
  width: 39.94rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  min-width: 39.94rem;
  max-width: 100%;
  @media screen and (max-width: 1200px) {
    flex: 1;
  }
  @media screen and (max-width: 750px) {
    min-width: 100%;
  }
`;
const CopyrightTextIcon = styled.img`
  width: 100%;
  height: 100%;
  max-width: 100%;
  object-fit: contain;
  position: absolute;
  left: 4.06rem;
  top: 0rem;
  transform: scale(1.243);
  @media screen and (max-width: 1200px) {
    flex: 1;
  }
`;
const WrapperCopyrightText = styled.div`
  position: relative;
  width: 33.38rem;
  height: 29.94rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SecondFrame = styled.div`
  flex: 1;
  background-color: rgba(245, 185, 237, 0.1);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-61xl) var(--padding-xl);
  box-sizing: border-box;
  gap: var(--gap-5xs);
  max-width: 100%;
  @media screen and (max-width: 1200px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 750px) {
    padding-top: var(--padding-33xl);
    padding-bottom: var(--padding-33xl);
    box-sizing: border-box;
  }
`;
const FirstFrame = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0rem 0rem 0rem 0rem;
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: 3rem;
  color: var(--main-text);
  font-family: var(--body-text-normal-16);
`;
const UsersIcon = styled.img`
  position: relative;
  width: 3.13rem;
  height: 3.13rem;
  overflow: hidden;
  flex-shrink: 0;
`;
const JoinThriftGroups = styled.div`
  position: relative;
  font-size: var(--font-size-xl);
  letter-spacing: 0.25px;
  line-height: 140%;
  font-weight: 600;
  @media screen and (max-width: 450px) {
    font-size: var(--body-text-normal-16-size);
    line-height: 1.38rem;
  }
`;
const SaveCollectivelyWith = styled.div`
  align-self: stretch;
  position: relative;
  letter-spacing: 0.15px;
  line-height: 140%;
`;
const LearnMore = styled.div`
  position: relative;
  letter-spacing: 0.15px;
  line-height: 140%;
  white-space: nowrap;
`;
const ArrowIcon = styled.img`
  position: relative;
  width: 1rem;
  height: 0.75rem;
  overflow: hidden;
  flex-shrink: 0;
`;
const HelpSupportText = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  color: var(--primary-color);
`;
const YouTubeIcon = styled.div`
  flex: 0.8996;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xs) var(--padding-xl);
  box-sizing: border-box;
  gap: var(--gap-xs);
  min-width: 12.81rem;
  max-width: 16.5rem;
  @media screen and (max-width: 450px) {
    flex: 1;
  }
`;
const FrameParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  color: var(--primary-color);
`;
const YouTubeIcon1 = styled.div`
  flex: 0.8835;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xs) var(--padding-3xl);
  box-sizing: border-box;
  gap: var(--gap-xs);
  min-width: 12.81rem;
  max-width: 16.5rem;
  @media screen and (max-width: 450px) {
    flex: 1;
  }
`;
const YouTubeIcon2 = styled.div`
  flex: 0.9237;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xs) 1.06rem;
  box-sizing: border-box;
  gap: var(--gap-xs);
  min-width: 12.81rem;
  max-width: 16.5rem;
  @media screen and (max-width: 450px) {
    flex: 1;
  }
`;
const YouTubeIcon3 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-2xl) 0.47rem;
  box-sizing: border-box;
  gap: var(--gap-xs);
  min-width: 12.81rem;
  max-width: 16.5rem;
`;
const TwitterIcon = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-61xl) 9.19rem;
  box-sizing: border-box;
  gap: var(--gap-11xl);
  max-width: 100%;
  @media screen and (max-width: 1200px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 750px) {
    gap: 0.94rem;
    padding-left: var(--padding-54xl);
    padding-right: var(--padding-54xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding: var(--padding-33xl) var(--padding-xl);
    box-sizing: border-box;
  }
`;
const InstagramIcon = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 0rem var(--padding-61xl);
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: var(--body-text-normal-16-size);
  color: var(--color-black);
  font-family: var(--body-text-normal-16);
  @media screen and (max-width: 750px) {
    padding-bottom: var(--padding-33xl);
    box-sizing: border-box;
  }
`;
const HowItWorks = styled.h1`
  margin: 0;
  position: relative;
  font-size: inherit;
  letter-spacing: 0.25px;
  line-height: 140%;
  font-weight: 700;
  font-family: inherit;
  @media screen and (max-width: 1050px) {
    font-size: var(--font-size-13xl);
    line-height: 2.81rem;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-5xl);
    line-height: 2.13rem;
  }
`;
const TextSavi = styled.div`
  position: relative;
  line-height: 140%;
`;
const LinkItemFrame = styled.div`
  border-radius: var(--br-81xl);
  background-color: var(--color-darkmagenta-100);
  width: 1.75rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-9xs);
  box-sizing: border-box;
`;
const ButtonFrame = styled.div`
  border-radius: var(--br-81xl);
  background-color: var(--color-darkmagenta-100);
  width: 1.88rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-9xs);
  box-sizing: border-box;
`;
const ButtonFrame1 = styled.div`
  align-self: stretch;
  border-radius: var(--br-81xl);
  background-color: var(--color-darkmagenta-100);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-9xs);
`;
const HeaderCTABlockFrame = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-51xl);
`;
const FrameRightNest = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 5.75rem;
`;
const HeaderLinkBlockFrame = styled.div`
  width: 1.94rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-51xl);
`;
const SignUpIn = styled.div`
  position: relative;
  line-height: 140%;
  font-weight: 600;
  @media screen and (max-width: 450px) {
    font-size: var(--body-text-normal-16-size);
    line-height: 1.38rem;
  }
`;
const CreateAccountWith = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--body-text-normal-16-size);
  letter-spacing: 0.15px;
  line-height: 140%;
`;
const WalletIntegrationFrame = styled.div`
  width: 16.63rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const JoinOrCreate = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 140%;
  font-weight: 600;
  @media screen and (max-width: 450px) {
    font-size: var(--body-text-normal-16-size);
    line-height: 1.38rem;
  }
`;
const WalletIntegrationFrame1 = styled.div`
  width: 18.94rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const AutomatedContributionsParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const WalletIntegrationFrame2 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-10xs);
`;
const WalletIntegrationFrame3 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 0rem 0rem var(--padding-10xs);
`;
const ContributionAnalyticsFrame = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl);
  min-width: 12.75rem;
  font-size: var(--font-size-xl);
  color: var(--main-text);
`;
const FrameLeftNest = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.06rem;
  font-size: var(--body-text-normal-16-size);
  color: var(--color-black);
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const AdminAnalyticsFrame = styled.div`
  width: 22.63rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-11xl);
  min-width: 22.63rem;
  max-width: 100%;
  @media screen and (max-width: 1050px) {
    flex: 1;
  }
  @media screen and (max-width: 450px) {
    min-width: 100%;
  }
`;
const DividerVectorChild = styled.div`
  position: relative;
  background-color: var(--color-plum-100);
  width: 43.75rem;
  height: 31.25rem;
  display: none;
  max-width: 100%;
`;
const YoungAfricanWomanSellingLoIcon = styled.img`
  position: relative;
  width: 43.75rem;
  height: 26.81rem;
  object-fit: cover;
  display: none;
  max-width: 100%;
`;
const TwitterSocialIconChild = styled.div`
  position: relative;
  border-radius: var(--br-81xl);
  background-color: var(--white);
  width: 10.44rem;
  height: 2.5rem;
  display: none;
`;
const SuccessIcon = styled.img`
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 1;
`;
const JoinedSuccessful = styled.div`
  position: relative;
  font-size: var(--assistive-text-medium-12-size);
  letter-spacing: 0.35px;
  line-height: 140%;
  font-family: var(--body-text-normal-16);
  color: var(--main-text);
  text-align: left;
  z-index: 1;
`;
const TwitterSocialIcon = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-5xs) 0.69rem var(--padding-5xs) var(--padding-3xs);
  background-color: var(--white);
  border-radius: var(--br-81xl);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.69rem;
  white-space: nowrap;
  z-index: 2;
  &:hover {
    background-color: var(--color-gainsboro);
  }
`;
const InstagramSocialIcon = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0rem 6.31rem 0rem var(--padding-xl);
  @media screen and (max-width: 450px) {
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const ForMoreEnquiriesText = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-5xs) 0.38rem var(--padding-5xs) var(--padding-3xs);
  background-color: var(--white);
  border-radius: var(--br-81xl);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  white-space: nowrap;
  z-index: 2;
  &:hover {
    background-color: var(--color-gainsboro);
  }
`;
const FrameChild = styled.div`
  position: relative;
  border-radius: var(--br-81xl);
  background-color: var(--white);
  width: 10.44rem;
  height: 2.5rem;
  display: none;
  z-index: 0;
`;
const DefaultLineChartGradient = styled.img`
  position: absolute;
  margin: 0 !important;
  right: -0.02rem;
  bottom: -1.1rem;
  width: 6.71rem;
  height: 4.19rem;
  object-fit: contain;
  z-index: 1;
`;
const Savings = styled.p`
  margin: 0;
`;
const SavingsGrowth = styled.div`
  position: relative;
  letter-spacing: 0.35px;
  line-height: 140%;
  font-weight: 500;
  z-index: 2;
`;
const RectangleParent = styled.div`
  border-radius: var(--br-81xl);
  background-color: var(--white);
  width: 10.44rem;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-10xs) 0.94rem;
  box-sizing: border-box;
  position: relative;
  z-index: 2;
`;
const CopyrightTextInner = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0rem 8.06rem 0rem var(--padding-xl);
  @media screen and (max-width: 450px) {
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const CopyrightText = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 2var (--padding-xs) 0.75rem 2.63rem;
  box-sizing: border-box;
  gap: var(--gap-2xl);
  background-image: url("/youngafricanwomansellinglocalmarketsmilingusinghermobilephoneyoungafricanwomansellinglocalmarket166609762-1@2x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  max-width: 100%;
  z-index: 1;
  @media screen and (max-width: 450px) {
    padding-top: 8.63rem;
    padding-bottom: 1.69rem;
    box-sizing: border-box;
  }
`;
const DividerVector1 = styled.div`
  flex: 1;
  background-color: var(--color-plum-100);
  height: 31.38rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0rem 0rem 4.5rem var(--padding-12xs);
  box-sizing: border-box;
  max-width: 100%;
  @media screen and (max-width: 750px) {
    padding-bottom: 2.94rem;
    box-sizing: border-box;
  }
`;
const FooterFrame = styled.div`
  flex: 1;
  height: 26.69rem;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  min-width: 28.44rem;
  max-width: 100%;
  font-size: var(--assistive-text-medium-12-size);
  color: var(--main-text);
  @media screen and (max-width: 750px) {
    min-width: 100%;
  }
`;
const NotificationFrame = styled.section`
  width: 75.81rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-xl);
  box-sizing: border-box;
  gap: 6.94rem;
  min-height: 36.88rem;
  max-width: 100%;
  text-align: left;
  font-size: var(--headline-bold-40-size);
  color: var(--primary-color);
  font-family: var(--body-text-normal-16);
  @media screen and (max-width: 1050px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 750px) {
    gap: 3.44rem;
  }
  @media screen and (max-width: 450px) {
    gap: 1.75rem;
  }
`;
const ExchangeWalletNotification = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  min-width: 14.56rem;
`;
const ExchangeWalletNotification1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  min-width: 14.19rem;
`;
const SavingsProgressVector = styled.div`
  width: 64.81rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-41xl);
  max-width: 100%;
  font-size: var(--font-size-xl);
  color: var(--main-text);
  @media screen and (max-width: 1050px) {
    gap: var(--gap-11xl);
  }
`;
const SuccessInstance = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-61xl) var(--padding-xl);
  box-sizing: border-box;
  gap: 2rem;
  max-width: 100%;
  @media screen and (max-width: 750px) {
    gap: var(--gap-base);
  }
  @media screen and (max-width: 450px) {
    padding-top: var(--padding-33xl);
    padding-bottom: var(--padding-33xl);
    box-sizing: border-box;
  }
`;
const WhatOurUsers = styled.h1`
  margin: 0;
  position: relative;
  font-size: inherit;
  letter-spacing: 0.25px;
  line-height: 140%;
  font-weight: 700;
  font-family: inherit;
  display: inline-block;
  max-width: 100%;
  @media screen and (max-width: 1050px) {
    font-size: var(--font-size-13xl);
    line-height: 2.81rem;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-5xl);
    line-height: 2.13rem;
  }
`;
const SaviHasTransformed = styled.div`
  flex: 1;
  position: relative;
  line-height: 140%;
`;
const InstagramIcon1 = styled.div`
  align-self: stretch;
  background-color: var(--white);
  border-top: 2px dashed var(--primary-color);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-12xl) var(--padding-3xl) var(--padding-10xl)
    var(--padding-xl);
`;
const EnquiriesHelpLinkChild = styled.img`
  position: absolute;
  margin: 0 !important;
  bottom: 0.02rem;
  left: 8.69rem;
  width: 1.13rem;
  height: 1.44rem;
`;
const EnquiriesHelpLink = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0rem 0rem var(--padding-4xl);
  position: relative;
`;
const SocialIconsFrameChild = styled.img`
  position: relative;
  border-radius: 50%;
  width: 3.13rem;
  height: 3.13rem;
  object-fit: cover;
  min-height: 3.13rem;
`;
const WidowerAssociation = styled.div`
  position: relative;
  line-height: 140%;
  font-weight: 200;
  color: var(--grey-500);
`;
const AderemirekunAyomideText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xs);
`;
const SocialIconsFrame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-xl);
`;
const SaviText = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 0rem 0rem;
  box-sizing: border-box;
  gap: var(--gap-xl);
  min-width: 16.44rem;
  max-width: 100%;
`;
const SaviHasTransformedTheWayIWrapper = styled.div`
  align-self: stretch;
  background-color: var(--white);
  border-top: 2px dashed var(--primary-color);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-12xl) var(--padding-2xl) var(--padding-10xl);
`;
const EllipseParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-2xl);
`;
const IveFinallyFoundASavingsPWrapper = styled.div`
  align-self: stretch;
  background-color: var(--white);
  border-top: 2px dashed var(--primary-color);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xl) 1.19rem var(--padding-lg) var(--padding-lg);
`;
const PolygonIcon = styled.img`
  position: absolute;
  margin: 0 !important;
  bottom: 0.03rem;
  left: 8.94rem;
  width: 1.13rem;
  height: 1.44rem;
`;
const DividerVector2 = styled.div`
  width: 73.56rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-41xl);
  max-width: 100%;
  font-size: var(--body-text-normal-16-size);
  color: var(--color-black);
  @media screen and (max-width: 1200px) {
    gap: var(--gap-11xl);
  }
`;
const TestimonialsFrame = styled.div`
  align-self: stretch;
  background-color: #f2f4f7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-61xl) var(--padding-xl) var(--padding-61xl)
    var(--padding-2xl);
  box-sizing: border-box;
  gap: var(--gap-11xl);
  max-width: 100%;
  z-index: 1;
  margin-top: -0.12rem;
  @media screen and (max-width: 750px) {
    padding-top: var(--padding-61xl);
    padding-bottom: var(--padding-33xl);
    box-sizing: border-box;
  }
`;
const WhySaviFrame = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-9xs) 0rem 0rem;
  box-sizing: border-box;
  max-width: 100%;
`;
const HowItWorksFrame = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0rem var(--padding-12xs) 0rem 0rem;
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: var(--headline-bold-40-size);
  color: var(--primary-color);
  font-family: var(--body-text-normal-16);
`;
const Testimonials = styled.div`
  flex: 1;
  position: relative;
  line-height: 1.25rem;
`;
const LinkItem1 = styled.div`
  width: 6.19rem;
  height: 4.7rem;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-5xl) var(--padding-5xs);
  box-sizing: border-box;
`;
const LinkItem2 = styled.div`
  width: 3.13rem;
  height: 4.7rem;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-5xl) var(--padding-5xs);
  box-sizing: border-box;
`;
const Savi2 = styled.h1`
  margin: 0;
  position: relative;
  font-size: inherit;
  letter-spacing: 0.15px;
  line-height: 140%;
  font-weight: 500;
  font-family: inherit;
  @media screen and (max-width: 1050px) {
    font-size: 1.63rem;
    line-height: 2.25rem;
  }
  @media screen and (max-width: 450px) {
    font-size: 1.19rem;
    line-height: 1.69rem;
  }
`;
const SaviWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 2.19rem 0rem 0rem;
`;
const ForMoreEnquiries = styled.div`
  position: relative;
  letter-spacing: 0.15px;
  line-height: 140%;
`;
const ForMoreEnquiriesParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 1.13rem;
  text-align: left;
  font-size: var(--body-text-normal-16-size);
  font-family: var(--body-text-normal-16);
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const HelpsupportEasylendComText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 2.5rem;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    gap: var(--gap-xl);
  }
`;
const ForMoreEnquiriesLink = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 0rem 0rem 2.25rem;
  box-sizing: border-box;
  max-width: 100%;
  font-size: var(--font-size-13xl);
  color: var(--white);
  font-family: var(--font-bodoni-moda);
`;
const DividerIcon = styled.img`
  align-self: stretch;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  opacity: 0.2;
`;
const SocialIconsWhiteInstagr = styled.img`
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  min-height: 1.5rem;
`;
const CopyrightNotice = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const DividerLine = styled.div`
  width: 76rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: var(--gap-xl);
  max-width: 100%;
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const CopyrightText1 = styled.div`
  width: 79.88rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  max-width: 100%;
  text-align: left;
  font-size: var(--body-text-normal-16-size);
  color: var(--white);
`;
const Footer = styled.section`
  align-self: stretch;
  background-color: var(--primary-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 3.5rem var(--padding-24xl) var(--padding-24xl);
  box-sizing: border-box;
  gap: var(--gap-41xl);
  max-width: 100%;
  text-align: center;
  font-size: var(--paragraph-p3-regular-size);
  color: var(--neutral-gray-900);
  font-family: var(--body-text-normal-16);
  @media screen and (max-width: 1200px) {
    padding-left: var(--padding-2xl);
    padding-right: var(--padding-2xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 750px) {
    gap: var(--gap-11xl);
  }
`;
const LandingPageRoot = styled.div`
  position: relative;
  background-color: var(--white);
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  letter-spacing: normal;
`;

const LandingPage = () => {
  return (
    <LandingPageRoot>
      <MainHeader>
        <LeftNest>
          <HeaderLinkBlock>
            <LinkItem>
              <Savi>Savi.</Savi>
            </LinkItem>
          </HeaderLinkBlock>
        </LeftNest>
        <FrameFrame>
          <Faqs>FAQs</Faqs>
          <RightNest>
            <HeaderLinkBlock>
             
                <Link to="/signin"  style={{ textDecoration: 'none' }}>
               <Button>  <Apply>Get Started</Apply>
              </Button>  </Link>
              
            </HeaderLinkBlock>
          </RightNest>
        </FrameFrame>
      </MainHeader>
      <FirstFrame>
        <SecondFrame>
          <ThirdFrame>
            <AchieveFinancialSuccessContainer>
              <AchieveFinancialSuccess>{`Achieve Financial Success with `}</AchieveFinancialSuccess>
              <Savi1>{`Savi: `}</Savi1>
              <AchieveFinancialSuccess>{`The Future of `}</AchieveFinancialSuccess>
              <Savi1>Smart Savings</Savi1>
              <AchieveFinancialSuccess>.</AchieveFinancialSuccess>
            </AchieveFinancialSuccessContainer>
            <ExperienceTheConvenience>
              Experience the convenience of secure group savings and
              personalized savings plans with Savi. Take control of your
              finances and unlock a brighter financial future.
            </ExperienceTheConvenience>
            <Buttondefault>
              <Link to="/signin"  style={{ textDecoration: 'none' }}>
               <DividerVector>Get Started</DividerVector>
              </Link>
             
            </Buttondefault>
          </ThirdFrame>
          <WrapperCopyrightText>
            <CopyrightTextIcon
              loading="eager"
              alt=""
              src="/frame-38813701@2x.png"
            />
          </WrapperCopyrightText>
        </SecondFrame>
      </FirstFrame>
      <InstagramIcon>
        <TwitterIcon>
          <YouTubeIcon>
            <UsersIcon loading="eager" alt="" src="/users.svg" />
            <JoinThriftGroups>Join Thrift Groups</JoinThriftGroups>
            <SaveCollectivelyWith>
              Save collectively with rotating lump sum payouts, eliminating
              risks of traditional methods.
            </SaveCollectivelyWith>
            <HelpSupportText>
              <HeaderLinkBlock>
                <LearnMore>Learn more</LearnMore>
              </HeaderLinkBlock>
              <ArrowIcon alt="" src="/arrow-1.svg" />
            </HelpSupportText>
          </YouTubeIcon>
          <YouTubeIcon1>
            <UsersIcon loading="eager" alt="" src="/moneywithdrawal.svg" />
            <JoinThriftGroups>Hassle-Free Cashouts</JoinThriftGroups>
            <SaveCollectivelyWith>
              Enjoy rotating lump sum payouts, ensuring fair distribution among
              group members.
            </SaveCollectivelyWith>
            <FrameParent>
              <HeaderLinkBlock>
                <LearnMore>Learn more</LearnMore>
              </HeaderLinkBlock>
              <ArrowIcon alt="" src="/arrow-1.svg" />
            </FrameParent>
          </YouTubeIcon1>
          <YouTubeIcon2>
            <UsersIcon loading="eager" alt="" src="/shieldalt.svg" />
            <JoinThriftGroups>Secure and Convenient</JoinThriftGroups>
            <SaveCollectivelyWith>
              Enjoy peace of mind with robust security measures and
              user-friendly wallet management.
            </SaveCollectivelyWith>
            <FrameParent>
              <HeaderLinkBlock>
                <LearnMore>Learn more</LearnMore>
              </HeaderLinkBlock>
              <ArrowIcon alt="" src="/arrow-1.svg" />
            </FrameParent>
          </YouTubeIcon2>
          <YouTubeIcon3>
            <UsersIcon loading="eager" alt="" src="/walletalt.svg" />
            <JoinThriftGroups>Easy Wallet Management</JoinThriftGroups>
            <SaveCollectivelyWith>
              Seamlessly manage your funds, add money, and withdraw when you
              need it.
            </SaveCollectivelyWith>
            <FrameParent>
              <HeaderLinkBlock>
                <LearnMore>Learn more</LearnMore>
              </HeaderLinkBlock>
              <ArrowIcon alt="" src="/arrow-4.svg" />
            </FrameParent>
          </YouTubeIcon3>
        </TwitterIcon>
      </InstagramIcon>
      <NotificationFrame>
        <AdminAnalyticsFrame>
          <HowItWorks>{`How It Works `}</HowItWorks>
          <FrameLeftNest>
            <HeaderLinkBlockFrame>
              <LinkItemFrame>
                <TextSavi>1</TextSavi>
              </LinkItemFrame>
              <FrameRightNest>
                <HeaderCTABlockFrame>
                  <ButtonFrame>
                    <TextSavi>2</TextSavi>
                  </ButtonFrame>
                  <ButtonFrame1>
                    <TextSavi>3</TextSavi>
                  </ButtonFrame1>
                </HeaderCTABlockFrame>
                <ButtonFrame1>
                  <TextSavi>4</TextSavi>
                </ButtonFrame1>
              </FrameRightNest>
            </HeaderLinkBlockFrame>
            <ContributionAnalyticsFrame>
              <WalletIntegrationFrame>
                <SignUpIn>Sign Up in Seconds</SignUpIn>
                <CreateAccountWith>
                  Create account with Savvi and start saving.
                </CreateAccountWith>
              </WalletIntegrationFrame>
              <WalletIntegrationFrame1>
                <JoinOrCreate>Join or Create Thrift Groups</JoinOrCreate>
                <CreateAccountWith>
                  Create your account quickly and start your savings journey
                  within moments.
                </CreateAccountWith>
              </WalletIntegrationFrame1>
              <WalletIntegrationFrame2>
                <AutomatedContributionsParent>
                  <JoinOrCreate>Automated Contributions</JoinOrCreate>
                  <CreateAccountWith>
                    Schedule automatic transfers from your wallet to your
                    savings group for hassle-free saving.
                  </CreateAccountWith>
                </AutomatedContributionsParent>
              </WalletIntegrationFrame2>
              <WalletIntegrationFrame3>
                <AutomatedContributionsParent>
                  <JoinOrCreate>Track and Celebrate</JoinOrCreate>
                  <CreateAccountWith>
                    Monitor your savings growth, view contributions, and
                    celebrate milestones on our user-friendly dashboard.
                  </CreateAccountWith>
                </AutomatedContributionsParent>
              </WalletIntegrationFrame3>
            </ContributionAnalyticsFrame>
          </FrameLeftNest>
        </AdminAnalyticsFrame>
        <FooterFrame>
          <DividerVector1>
            <DividerVectorChild />
            <CopyrightText>
              <YoungAfricanWomanSellingLoIcon
                alt=""
                src="/youngafricanwomansellinglocalmarketsmilingusinghermobilephoneyoungafricanwomansellinglocalmarket166609762-1@2x.png"
              />
              <InstagramSocialIcon>
                <TwitterSocialIcon>
                  <TwitterSocialIconChild />
                  <SuccessIcon alt="" src="/success.svg" />
                  <JoinedSuccessful>Joined successful</JoinedSuccessful>
                </TwitterSocialIcon>
              </InstagramSocialIcon>
              <ForMoreEnquiriesText>
                <TwitterSocialIconChild />
                <SuccessIcon alt="" src="/success.svg" />
                <JoinedSuccessful>Joined Saving Group</JoinedSuccessful>
              </ForMoreEnquiriesText>
              <CopyrightTextInner>
                <RectangleParent>
                  <FrameChild />
                  <DefaultLineChartGradient
                    loading="eager"
                    alt=""
                    src="/default-line-chart-gradient.svg"
                  />
                  <SavingsGrowth>
                    <Savings>{`Savings `}</Savings>
                    <Savings>growth</Savings>
                  </SavingsGrowth>
                </RectangleParent>
              </CopyrightTextInner>
            </CopyrightText>
          </DividerVector1>
        </FooterFrame>
      </NotificationFrame>
      <HowItWorksFrame>
        <WhySaviFrame>
          <SuccessInstance>
            <HowItWorks>Why use Savi?</HowItWorks>
            <SavingsProgressVector>
              <ExchangeWalletNotification>
                <UsersIcon loading="eager" alt="" src="/exchange.svg" />
                <SignUpIn>Contribution Analytics</SignUpIn>
                <CreateAccountWith>
                  Admins gain valuable insights into group contributions and
                  track member participation.
                </CreateAccountWith>
              </ExchangeWalletNotification>
              <ExchangeWalletNotification1>
                <UsersIcon loading="eager" alt="" src="/wallet.svg" />
                <JoinOrCreate>Wallet Integration</JoinOrCreate>
                <CreateAccountWith>
                  Add funds to your wallet easily using various payment methods
                  and withdraw securely.
                </CreateAccountWith>
              </ExchangeWalletNotification1>
              <ExchangeWalletNotification1>
                <UsersIcon loading="eager" alt="" src="/notification.svg" />
                <JoinOrCreate>Notifications and Reminders</JoinOrCreate>
                <CreateAccountWith>
                  Stay informed about group activities, cashouts, and important
                  updates.
                </CreateAccountWith>
              </ExchangeWalletNotification1>
            </SavingsProgressVector>
          </SuccessInstance>
          <TestimonialsFrame>
            <WhatOurUsers>What our users say?</WhatOurUsers>
            <DividerVector2>
              <SaviText>
                <EnquiriesHelpLink>
                  <InstagramIcon1>
                    <SaviHasTransformed>
                      "Savi has transformed the way I save money. Being part of
                      a thrift group has made it easier to stay motivated and
                      accountable. With Savi, I've achieved my savings goals
                      faster than ever before!"
                    </SaviHasTransformed>
                  </InstagramIcon1>
                  <EnquiriesHelpLinkChild
                    loading="eager"
                    alt=""
                    src="/polygon-1.svg"
                  />
                </EnquiriesHelpLink>
                <SocialIconsFrame>
                  <SocialIconsFrameChild
                    loading="eager"
                    alt=""
                    src="/ellipse-4@2x.png"
                  />
                  <AderemirekunAyomideText>
                    <TextSavi>Aderemirekun Ayomide</TextSavi>
                    <WidowerAssociation>Widower Association</WidowerAssociation>
                  </AderemirekunAyomideText>
                </SocialIconsFrame>
              </SaviText>
              <SaviText>
                <EnquiriesHelpLink>
                  <SaviHasTransformedTheWayIWrapper>
                    <SaviHasTransformed>
                      "Savi has transformed the way I save money. Being part of
                      a thrift group has made it easier to stay motivated and
                      accountable. With Savi, I've achieved my savings goals
                      faster than ever before!"
                    </SaviHasTransformed>
                  </SaviHasTransformedTheWayIWrapper>
                  <EnquiriesHelpLinkChild alt="" src="/polygon-1.svg" />
                </EnquiriesHelpLink>
                <EllipseParent>
                  <SocialIconsFrameChild alt="" src="/ellipse-4@2x.png" />
                  <AderemirekunAyomideText>
                    <TextSavi>Aderemirekun Ayomide</TextSavi>
                    <WidowerAssociation>Widower Association</WidowerAssociation>
                  </AderemirekunAyomideText>
                </EllipseParent>
              </SaviText>
              <SaviText>
                <EnquiriesHelpLink>
                  <IveFinallyFoundASavingsPWrapper>
                    <SaviHasTransformed>
                      I've finally found a savings platform that understands my
                      needs. Savi's personal savings feature has made it
                      effortless for me to reach my financial milestones. It's
                      empowering to have control over my savings journey
                    </SaviHasTransformed>
                  </IveFinallyFoundASavingsPWrapper>
                  <PolygonIcon alt="" src="/polygon-1-2.svg" />
                </EnquiriesHelpLink>
                <SocialIconsFrame>
                  <SocialIconsFrameChild alt="" src="/ellipse-4@2x.png" />
                  <AderemirekunAyomideText>
                    <TextSavi>Aderemirekun Ayomide</TextSavi>
                    <WidowerAssociation>Widower Association</WidowerAssociation>
                  </AderemirekunAyomideText>
                </SocialIconsFrame>
              </SaviText>
            </DividerVector2>
          </TestimonialsFrame>
        </WhySaviFrame>
      </HowItWorksFrame>
      <Footer>
        <LinkItem1>
          <Testimonials>Testimonials</Testimonials>
        </LinkItem1>
        <LinkItem2>
          <Testimonials>FAQs</Testimonials>
        </LinkItem2>
        <ForMoreEnquiriesLink>
          <HelpsupportEasylendComText>
            <SaviWrapper>
              <Savi2>Savi.</Savi2>
            </SaviWrapper>
            <ForMoreEnquiriesParent>
              <ForMoreEnquiries>For more enquiries:</ForMoreEnquiries>
              <LearnMore>helpsupport@easylend.com</LearnMore>
            </ForMoreEnquiriesParent>
          </HelpsupportEasylendComText>
        </ForMoreEnquiriesLink>
        <CopyrightText1>
          <DividerIcon loading="eager" alt="" src="/divider.svg" />
          <DividerLine>
            <ForMoreEnquiries>
              © 2023 EasyLend. All rights reserved
            </ForMoreEnquiries>
            <CopyrightNotice>
              <SocialIconsWhiteInstagr
                loading="eager"
                alt=""
                src="/social-icons--white--instagram.svg"
              />
              <SocialIconsWhiteInstagr
                loading="eager"
                alt=""
                src="/social-icons--white--twitter.svg"
              />
              <SocialIconsWhiteInstagr
                loading="eager"
                alt=""
                src="/social-icons--white--youtube.svg"
              />
            </CopyrightNotice>
          </DividerLine>
        </CopyrightText1>
      </Footer>
    </LandingPageRoot>
  );
};

export default LandingPage;
