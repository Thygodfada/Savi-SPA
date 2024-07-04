import { useState, useCallback } from "react";
import Frame from "./Frame";
import PortalPopup from "./PortalPopup";
import styled from "styled-components";

const YemiJohnson = styled.div`
  position: relative;
  letter-spacing: 0.15px;
  line-height: 140%;
  font-weight: 600;
  display: inline-block;
  width: 8.25rem;
`;
const FrameChild = styled.div`
  position: relative;
  border-radius: 50%;
  background-color: var(--main-primary-color);
  width: 0.88rem;
  height: 0.88rem;
`;
const ActiveNow = styled.div`
  position: relative;
  letter-spacing: 0.15px;
  line-height: 140%;
`;
const EllipseParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  text-align: right;
  color: var(--grey-500);
`;
const YemiJohnsonParent = styled.div`
  width: 14.13rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-11xs);
`;
const DotsHorizontalIcon1 = styled.img`
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
  cursor: pointer;
`;
const MessageExpanded = styled.div`
  background-color: var(--white);
  box-shadow: var(--card-shadow);
  border: 1px solid var(--grey-200);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-base) var(--padding-13xl);
  gap: 17.69rem;
`;
const Divider3 = styled.div`
  position: relative;
  background-color: var(--grey-200);
  width: 12.88rem;
  height: 0.06rem;
`;
const DividerParent = styled.div`
  width: 33.94rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 2.5rem;
  text-align: right;
  font-size: var(--text-md-medium-size);
  color: var(--grey-500);
  font-family: var(--text-md-medium);
`;
const Text3 = styled.div`
  position: absolute;
  top: calc(50% - 9px);
  left: calc(50% - 12px);
  line-height: 0.88rem;
  font-weight: 500;
  display: none;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.13rem;
`;
const Avatardefault = styled.div`
  position: relative;
  border-radius: var(--br-181xl);
  width: 4rem;
  height: 4rem;
  background-image: url("/avatardefault@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
`;
const JonnyJohn = styled.div`
  position: relative;
  letter-spacing: 0.15px;
  line-height: 140%;
  font-weight: 600;
`;
const FrameItem = styled.div`
  position: relative;
  border-radius: 50%;
  background-color: var(--grey-300);
  width: 0.5rem;
  height: 0.5rem;
`;
const Am = styled.div`
  position: relative;
  letter-spacing: 0.15px;
  line-height: 140%;
  color: var(--grey-500);
  text-align: right;
`;
const YemiJohnsonGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const LoremIpsumDolor3 = styled.div`
  position: relative;
  letter-spacing: 0.15px;
  line-height: 140%;
  color: var(--grey-500);
  display: inline-block;
  width: 28.69rem;
`;
const FrameGroup = styled.div`
  width: 28.69rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  text-align: left;
  font-size: var(--text-md-medium-size);
  color: var(--main-text);
  font-family: var(--text-md-medium);
`;
const AvatardefaultParent = styled.div`
  width: 33.69rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const Avatardefault1 = styled.div`
  position: relative;
  border-radius: var(--br-181xl);
  width: 4rem;
  height: 4rem;
  background-image: url("/avatardefault1@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
`;
const FrameDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  text-align: left;
  font-size: var(--text-md-medium-size);
  color: var(--main-text);
  font-family: var(--text-md-medium);
`;
const AvatardefaultGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const LoremIpsumDolor5 = styled.div`
  position: relative;
  letter-spacing: 0.15px;
  line-height: 140%;
  color: var(--grey-500);
  display: inline-block;
  width: 28.63rem;
`;
const Divider5 = styled.div`
  position: relative;
  background-color: var(--grey-200);
  width: 33.69rem;
  height: 0.06rem;
`;
const WriteMessage = styled.div`
  border-radius: var(--br-5xs);
  background-color: var(--grey-50);
  width: 33.69rem;
  height: 4.88rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xl);
  box-sizing: border-box;
`;
const ImageSquareIcon1 = styled.img`
  position: relative;
  width: 2rem;
  height: 2rem;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const ImageSquareParent = styled.div`
  width: 9.75rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-13xl);
`;
const Send = styled.div`
  position: relative;
  line-height: 1.25rem;
  font-weight: 600;
`;
const SendButton = styled.div`
  border-radius: var(--br-7xs);
  background-color: var(--primary-color);
  width: 7.31rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xs) var(--padding-base);
  box-sizing: border-box;
`;
const FrameParent2 = styled.div`
  width: 33.69rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 16.56rem;
  font-size: var(--input-small-medium-size);
  color: var(--white);
`;
const WriteMessageParent = styled.div`
  width: 33.69rem;
  height: 4.88rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base);
  text-align: left;
  font-size: var(--text-md-medium-size);
  color: var(--grey-500);
  font-family: var(--text-md-medium);
`;
const FrameParent = styled.div`
  background-color: var(--white);
  width: 37.31rem;
  height: 35.94rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-base) var(--padding-13xl);
  box-sizing: border-box;
  gap: var(--gap-13xl);
  text-align: center;
  font-size: var(--badge-for-small-size-size);
  color: var(--white);
  font-family: var(--assistive-2-medium);
`;
const MessagePopupRoot = styled.div`
  position: relative;
  height: 40.81rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
  text-align: left;
  font-size: var(--text-md-medium-size);
  color: var(--main-text);
  font-family: var(--text-md-medium);
`;

const MessagePopup = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  return (
    <>
      <MessagePopupRoot>
        <MessageExpanded>
          <YemiJohnsonParent>
            <YemiJohnson>Yemi Johnson</YemiJohnson>
            <EllipseParent>
              <FrameChild />
              <ActiveNow>Active now</ActiveNow>
            </EllipseParent>
          </YemiJohnsonParent>
          <DotsHorizontalIcon1
            alt=""
            src="/dotshorizontal@2x.png"
            onClick={openFrame}
          />
        </MessageExpanded>
        <FrameParent>
          <DividerParent>
            <Divider3 />
            <ActiveNow>Today</ActiveNow>
            <Divider3 />
          </DividerParent>
          <AvatardefaultParent>
            <Avatardefault>
              <Text3>SA</Text3>
            </Avatardefault>
            <FrameGroup>
              <YemiJohnsonGroup>
                <JonnyJohn>Yemi Johnson</JonnyJohn>
                <FrameItem />
                <Am>8:15am</Am>
              </YemiJohnsonGroup>
              <LoremIpsumDolor3>{`Lorem ipsum dolor sit amet consect Commodo nibh ultricies pulvinar `}</LoremIpsumDolor3>
            </FrameGroup>
          </AvatardefaultParent>
          <AvatardefaultGroup>
            <Avatardefault1>
              <Text3>SA</Text3>
            </Avatardefault1>
            <FrameDiv>
              <YemiJohnsonGroup>
                <JonnyJohn>Jonny John</JonnyJohn>
                <FrameItem />
                <Am>8:16am</Am>
              </YemiJohnsonGroup>
              <LoremIpsumDolor3>{`Lorem ipsum dolor sit amet consect Commodo nibh ultricies pulvinar `}</LoremIpsumDolor3>
            </FrameDiv>
          </AvatardefaultGroup>
          <AvatardefaultGroup>
            <Avatardefault>
              <Text3>SA</Text3>
            </Avatardefault>
            <FrameDiv>
              <YemiJohnsonGroup>
                <JonnyJohn>Yemi Johnson</JonnyJohn>
                <FrameItem />
                <Am>8:30am</Am>
              </YemiJohnsonGroup>
              <LoremIpsumDolor5>{`Lorem ipsum dolor sit amet consect Commodo nibh ultricies pulvinar `}</LoremIpsumDolor5>
            </FrameDiv>
          </AvatardefaultGroup>
          <Divider5 />
          <WriteMessageParent>
            <WriteMessage>
              <ActiveNow>Write a message</ActiveNow>
            </WriteMessage>
            <FrameParent2>
              <ImageSquareParent>
                <ImageSquareIcon1 alt="" src="/imagesquare@2x.png" />
                <ImageSquareIcon1 alt="" src="/linkalt1@2x.png" />
                <ImageSquareIcon1 alt="" src="/facesmile@2x.png" />
              </ImageSquareParent>
              <SendButton>
                <Send>Send</Send>
              </SendButton>
            </FrameParent2>
          </WriteMessageParent>
        </FrameParent>
      </MessagePopupRoot>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <Frame onClose={closeFrame} />
        </PortalPopup>
      )}
    </>
  );
};

export default MessagePopup;
