import styled from "styled-components";

const Placeholder = styled.div`
  position: relative;
  letter-spacing: 0.01em;
  line-height: 1.25rem;
  font-weight: 600;
  display: none;
  z-index: 0;
`;
const Avatar06Icon2 = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const Avatar1 = styled.div`
  position: relative;
  border-radius: var(--br-980xl);
  width: 2.38rem;
  height: 2.38rem;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 1;
`;
const StatusIcon1 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: -0.31rem;
  left: 1.94rem;
  width: 0.75rem;
  height: 0.75rem;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
  display: none;
  z-index: 2;
`;
const StatusIconForCircular1 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: -0.06rem;
  left: 1.63rem;
  width: 0.75rem;
  height: 0.75rem;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
  display: none;
  z-index: 3;
`;
const StatusOffline1 = styled.div`
  position: absolute;
  margin: 0 !important;
  top: -0.25rem;
  right: -0.25rem;
  border-radius: 50%;
  background-color: var(--slate-400);
  border: 2px solid var(--white);
  box-sizing: border-box;
  width: 0.63rem;
  height: 0.63rem;
  display: none;
  z-index: 4;
`;
const StatusOfflineForCircular1 = styled.div`
  position: absolute;
  margin: 0 !important;
  top: 0rem;
  right: 0.06rem;
  border-radius: 50%;
  background-color: var(--slate-400);
  border: 2px solid var(--white);
  box-sizing: border-box;
  width: 0.63rem;
  height: 0.63rem;
  display: none;
  z-index: 5;
`;
const StatusOnline1 = styled.div`
  position: absolute;
  margin: 0 !important;
  top: -0.25rem;
  right: -0.25rem;
  border-radius: 50%;
  background-color: var(--teal-500);
  border: 2px solid var(--white);
  box-sizing: border-box;
  width: 0.63rem;
  height: 0.63rem;
  display: none;
  z-index: 6;
`;
const StatusOnlineForCircular1 = styled.div`
  position: absolute;
  margin: 0 !important;
  top: 0rem;
  right: 0.06rem;
  border-radius: 50%;
  background-color: var(--teal-500);
  border: 2px solid var(--white);
  box-sizing: border-box;
  width: 0.63rem;
  height: 0.63rem;
  display: none;
  z-index: 7;
`;
const StatusAway1 = styled.div`
  position: absolute;
  margin: 0 !important;
  top: -0.25rem;
  right: -0.31rem;
  border-radius: 50%;
  background-color: var(--yellow-500);
  border: 2px solid var(--white);
  box-sizing: border-box;
  width: 0.63rem;
  height: 0.63rem;
  display: none;
  z-index: 8;
`;
const StatusAwayForCircular1 = styled.div`
  position: absolute;
  margin: 0 !important;
  top: 0rem;
  right: 0rem;
  border-radius: 50%;
  background-color: var(--yellow-500);
  border: 2px solid var(--white);
  box-sizing: border-box;
  width: 0.63rem;
  height: 0.63rem;
  display: none;
  z-index: 9;
`;
const StatusDoNotDisturb1 = styled.div`
  position: absolute;
  margin: 0 !important;
  top: -0.25rem;
  right: -0.31rem;
  border-radius: 50%;
  background-color: var(--red-500);
  border: 2px solid var(--white);
  box-sizing: border-box;
  width: 0.63rem;
  height: 0.63rem;
  display: none;
  z-index: 10;
`;
const StatusDoNotDisturbForCirc1 = styled.div`
  position: absolute;
  margin: 0 !important;
  top: 0rem;
  right: 0rem;
  border-radius: 50%;
  background-color: var(--red-500);
  border: 2px solid var(--white);
  box-sizing: border-box;
  width: 0.63rem;
  height: 0.63rem;
  display: none;
  z-index: 11;
`;
const AvatarSmall = styled.div`
  border-radius: var(--br-980xl);
  background-color: var(--gray-500);
  width: 2.38rem;
  height: 2.38rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const Avatar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Subtitle = styled.div`
  align-self: stretch;
  position: relative;
  letter-spacing: 0.01em;
  line-height: 1.25rem;
`;
const Text1 = styled.div`
  align-self: stretch;
  position: relative;
  letter-spacing: 0.01em;
  line-height: 1.25rem;
  font-weight: 500;
  color: var(--gray-800);
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  color: var(--gray-500);
`;
const Heading = styled.div`
  align-self: stretch;
  background-color: var(--gray-100);
  display: none;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xs) var(--padding-xl);
  gap: var(--gap-3xs);
  z-index: 0;
  text-align: center;
  color: var(--white);
`;
const Label1 = styled.div`
  flex: 1;
  position: relative;
  letter-spacing: 0.01em;
  font-weight: 600;
  display: none;
`;
const Secondary = styled.div`
  position: relative;
  letter-spacing: 0.01em;
  font-weight: 500;
  color: var(--slate-500);
  text-align: center;
  display: none;
`;
const Label = styled.div`
  align-self: stretch;
  display: none;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const EnvelopeIcon1 = styled.img`
  position: relative;
  width: 0.88rem;
  height: 0.88rem;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
  display: none;
`;
const AvatarIcon2 = styled.img`
  position: relative;
  border-radius: var(--br-980xl);
  width: 1.13rem;
  height: 1.13rem;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
  display: none;
`;
const Email = styled.div`
  position: relative;
  letter-spacing: 0.01em;
  font-weight: 500;
  display: none;
`;
const Leading = styled.div`
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-3xs) var(--padding-xs);
  gap: var(--gap-5xs);
`;
const Divider2 = styled.div`
  align-self: stretch;
  position: relative;
  background-color: var(--gray-200);
  width: 0.06rem;
  display: none;
`;
const Avatar2 = styled.div`
  position: relative;
  border-radius: var(--br-980xl);
  width: 1rem;
  height: 1rem;
  overflow: hidden;
  flex-shrink: 0;
`;
const StarsIcon27 = styled.img`
  position: relative;
  width: 0.75rem;
  height: 0.75rem;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
  display: none;
`;
const Status27 = styled.div`
  position: relative;
  border-radius: 50%;
  background-color: var(--gray-500);
  width: 0.38rem;
  height: 0.38rem;
  display: none;
`;
const Placeholder2 = styled.div`
  position: relative;
  letter-spacing: 0.01em;
  line-height: 1rem;
  font-weight: 500;
`;
const Placeholder1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0rem var(--padding-9xs);
  gap: var(--gap-6xs);
`;
const XLgIcon27 = styled.img`
  position: relative;
  width: 0.5rem;
  height: 0.5rem;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const CloseIcon = styled.div`
  border-radius: var(--br-980xl);
  background-color: var(--gray-200);
  width: 0.94rem;
  height: 0.94rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const BadgeAndTag = styled.div`
  border-radius: var(--br-980xl);
  border: 1px solid var(--gray-200);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-7xs);
  gap: var(--gap-12xs);
`;
const Badge = styled.div`
  display: none;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Tags = styled.div`
  display: none;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-8xs-5);
  gap: var(--gap-8xs);
`;
const Placeholder8 = styled.div`
  flex: 1;
  position: relative;
  letter-spacing: 0.01em;
  font-weight: 500;
`;
const Placeholder7 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xs) var(--padding-xs);
  font-size: var(--input-default-medium-size);
`;
const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  font-size: var(--xs-regular-size);
`;
const Rectangle1 = styled.div`
  position: absolute;
  height: 75%;
  width: 75%;
  top: 25%;
  right: 0%;
  bottom: 0%;
  left: 25%;
  border-radius: var(--br-10xs);
  border: 1px solid var(--gray-500);
  box-sizing: border-box;
`;
const VectorIcon1 = styled.img`
  position: absolute;
  height: 68.75%;
  width: 68.75%;
  top: 0%;
  right: 31.25%;
  bottom: 31.25%;
  left: 0%;
  border-radius: var(--br-11xs);
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const Copy = styled.div`
  position: relative;
  width: 0.88rem;
  height: 0.88rem;
  display: none;
`;
const Input1 = styled.div`
  align-self: stretch;
  background-color: var(--white);
  border-bottom: 1px solid var(--gray-200);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  font-size: var(--input-default-medium-size);
  color: var(--gray-500);
`;
const ThisIsA1 = styled.div`
  position: relative;
  letter-spacing: 0.01em;
  font-weight: 500;
  color: var(--gray-400);
  display: none;
`;
const InputSmall = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const Input = styled.div`
  align-self: stretch;
  display: none;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xs) var(--padding-5xs);
  z-index: 1;
`;
const DropdownHeading = styled.div`
  align-self: stretch;
  display: none;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xs) var(--padding-xs);
  font-size: var(--xs-regular-size);
  color: var(--gray-400);
`;
const BellIcon9 = styled.img`
  position: relative;
  width: 1rem;
  height: 1rem;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
  display: none;
`;
const Ellipse12 = styled.div`
  position: relative;
  border-radius: 50%;
  background-color: var(--gray-500);
  width: 0.44rem;
  height: 0.44rem;
  display: none;
`;
const Avatar04 = styled.div`
  position: relative;
  border-radius: var(--br-980xl);
  width: 1.25rem;
  height: 1.25rem;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
`;
const DropdownItem1 = styled.div`
  position: relative;
  letter-spacing: 0.01em;
  line-height: 1.25rem;
  font-weight: 500;
`;
const Secondary1 = styled.div`
  position: relative;
  font-size: var(--xs-regular-size);
  letter-spacing: 0.01em;
  line-height: 1rem;
  color: var(--gray-500);
  display: none;
`;
const Avatar5 = styled.div`
  position: relative;
  border-radius: var(--br-980xl);
  width: 0.88rem;
  height: 0.88rem;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
`;
const StarsIcon30 = styled.img`
  position: relative;
  width: 0.63rem;
  height: 0.63rem;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
  display: none;
`;
const Status30 = styled.div`
  position: relative;
  border-radius: 50%;
  background-color: var(--blue-500);
  width: 0.31rem;
  height: 0.31rem;
  display: none;
`;
const Placeholder9 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0rem var(--padding-10xs-5);
  gap: var(--gap-6xs);
`;
const CloseIcon3 = styled.div`
  border-radius: var(--br-980xl);
  background-color: var(--blue-200);
  width: 0.88rem;
  height: 0.88rem;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const BadgeAndTagSmall = styled.div`
  border-radius: var(--br-980xl);
  background-color: var(--blue-100);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-12xs) var(--padding-10xs);
  gap: var(--gap-12xs);
`;
const Badge3 = styled.div`
  display: none;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: var(--badge-for-small-size-size);
  color: var(--blue-500);
`;
const Content1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-3xs);
`;
const B = styled.div`
  position: relative;
  font-size: var(--xs-regular-size);
  letter-spacing: 0.01em;
  line-height: 1rem;
  font-weight: 500;
  color: var(--gray-400);
  display: none;
`;
const Status31 = styled.div`
  position: relative;
  border-radius: 50%;
  background-color: var(--white);
  width: 0.31rem;
  height: 0.31rem;
  display: none;
`;
const CloseIcon4 = styled.div`
  border-radius: var(--br-980xl);
  background-color: var(--blue-300);
  width: 0.88rem;
  height: 0.88rem;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const BadgeAndTagSmall1 = styled.div`
  border-radius: var(--br-980xl);
  background-color: var(--blue-500);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-12xs) var(--padding-10xs);
  gap: var(--gap-12xs);
`;
const Badge4 = styled.div`
  display: none;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: var(--badge-for-small-size-size);
  color: var(--white);
`;
const DropdownItem = styled.div`
  align-self: stretch;
  border-radius: var(--br-7xs);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-5xs) var(--padding-xs);
  gap: var(--gap-xs);
`;
const DropdownItem4 = styled.div`
  align-self: stretch;
  border-radius: var(--br-7xs);
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-5xs) var(--padding-xs);
  gap: var(--gap-xs);
  font-size: var(--input-small-medium-size);
`;
const List1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xs) var(--padding-5xs) 0rem;
  z-index: 2;
  font-size: var(--text-md-medium-size);
`;
const DropdownDivider2 = styled.div`
  align-self: stretch;
  position: relative;
  background-color: var(--gray-200);
  height: 0.06rem;
`;
const Divider11 = styled.div`
  align-self: stretch;
  display: none;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xs);
  z-index: 3;
`;
const DropdownHeading1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xs) var(--padding-xs);
  font-size: var(--xs-regular-size);
  color: var(--gray-400);
`;
const BellIcon10 = styled.img`
  position: relative;
  width: 1rem;
  height: 1rem;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const Ellipse16 = styled.div`
  position: relative;
  border-radius: 50%;
  background-color: var(--gray-500);
  width: 0.44rem;
  height: 0.44rem;
`;
const Avatar044 = styled.div`
  position: relative;
  border-radius: var(--br-980xl);
  width: 1.25rem;
  height: 1.25rem;
  overflow: hidden;
  flex-shrink: 0;
`;
const Secondary5 = styled.div`
  position: relative;
  font-size: var(--xs-regular-size);
  letter-spacing: 0.01em;
  line-height: 1rem;
  color: var(--gray-500);
`;
const Badge11 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: var(--badge-for-small-size-size);
  color: var(--blue-500);
`;
const B4 = styled.div`
  position: relative;
  font-size: var(--xs-regular-size);
  letter-spacing: 0.01em;
  line-height: 1rem;
  font-weight: 500;
  color: var(--gray-400);
`;
const Badge12 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: var(--badge-for-small-size-size);
  color: var(--white);
`;
const List2 = styled.div`
  align-self: stretch;
  display: none;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-5xs);
  z-index: 4;
`;
const Divider21 = styled.div`
  align-self: stretch;
  display: none;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xs);
  z-index: 5;
`;
const List3 = styled.div`
  align-self: stretch;
  display: none;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-5xs);
  z-index: 6;
`;
const Bar1 = styled.div`
  position: relative;
  border-radius: var(--br-980xl);
  background-color: var(--gray-200);
  width: 0.38rem;
  height: 9.38rem;
`;
const Scrollbar = styled.div`
  margin: 0 !important;
  position: absolute;
  top: 3.5rem;
  right: 0rem;
  display: none;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs);
  z-index: 7;
`;
const DropdownMenuRoot = styled.div`
  position: relative;
  border-radius: var(--br-5xs);
  background-color: var(--white);
  box-shadow: var(--drop-shadow-lg);
  border: 1px solid var(--gray-200);
  box-sizing: border-box;
  width: 14.63rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 0rem var(--padding-5xs);
  max-width: 100%;
  max-height: 100%;
  text-align: left;
  font-size: var(--input-small-medium-size);
  color: var(--gray-800);
  font-family: var(--text-md-medium);
`;

const DropdownMenu1 = () => {
  return (
    <DropdownMenuRoot>
      <Heading>
        <Avatar>
          <AvatarSmall>
            <Placeholder>A</Placeholder>
            <Avatar1>
              <Avatar06Icon2 alt="" />
            </Avatar1>
            <StatusIcon1 alt="" />
            <StatusIconForCircular1 alt="" />
            <StatusOffline1 />
            <StatusOfflineForCircular1 />
            <StatusOnline1 />
            <StatusOnlineForCircular1 />
            <StatusAway1 />
            <StatusAwayForCircular1 />
            <StatusDoNotDisturb1 />
            <StatusDoNotDisturbForCirc1 />
          </AvatarSmall>
        </Avatar>
        <Body>
          <Subtitle>Subtitle</Subtitle>
          <Text1>Text</Text1>
        </Body>
      </Heading>
      <Input>
        <InputSmall>
          <Label>
            <Label1>Label</Label1>
            <Secondary>Secondary</Secondary>
          </Label>
          <Input1>
            <Leading>
              <EnvelopeIcon1 alt="" />
              <AvatarIcon2 alt="" />
              <Email>Email</Email>
              <EnvelopeIcon1 alt="" />
            </Leading>
            <Divider2 />
            <Content>
              <Tags>
                <Badge>
                  <BadgeAndTag>
                    <Avatar2>
                      <Avatar06Icon2 alt="" />
                    </Avatar2>
                    <StarsIcon27 alt="" />
                    <Placeholder1>
                      <Status27 />
                      <Placeholder2>Maria</Placeholder2>
                    </Placeholder1>
                    <StarsIcon27 alt="" />
                    <CloseIcon>
                      <XLgIcon27 alt="" />
                    </CloseIcon>
                  </BadgeAndTag>
                </Badge>
                <Badge>
                  <BadgeAndTag>
                    <Avatar2>
                      <Avatar06Icon2 alt="" />
                    </Avatar2>
                    <StarsIcon27 alt="" />
                    <Placeholder1>
                      <Status27 />
                      <Placeholder2>Susan</Placeholder2>
                    </Placeholder1>
                    <StarsIcon27 alt="" />
                    <CloseIcon>
                      <XLgIcon27 alt="" />
                    </CloseIcon>
                  </BadgeAndTag>
                </Badge>
                <Badge>
                  <BadgeAndTag>
                    <Avatar2>
                      <Avatar06Icon2 alt="" />
                    </Avatar2>
                    <StarsIcon27 alt="" />
                    <Placeholder1>
                      <Status27 />
                      <Placeholder2>Alex</Placeholder2>
                    </Placeholder1>
                    <StarsIcon27 alt="" />
                    <CloseIcon>
                      <XLgIcon27 alt="" />
                    </CloseIcon>
                  </BadgeAndTag>
                </Badge>
              </Tags>
              <Placeholder7>
                <Placeholder8>Input-sm</Placeholder8>
              </Placeholder7>
            </Content>
            <Divider2 />
            <Leading>
              <AvatarIcon2 alt="" />
              <Copy>
                <Rectangle1 />
                <VectorIcon1 alt="" />
              </Copy>
              <Email>Copy</Email>
              <EnvelopeIcon1 alt="" />
            </Leading>
          </Input1>
          <ThisIsA1>This is a feedback message</ThisIsA1>
        </InputSmall>
      </Input>
      <List1>
        <DropdownHeading>
          <Placeholder2>HEADING</Placeholder2>
        </DropdownHeading>
        <DropdownItem>
          <BellIcon9 alt="" />
          <Ellipse12 />
          <Avatar04>
            <Avatar06Icon2 alt="" />
          </Avatar04>
          <Content1>
            <DropdownItem1>Male</DropdownItem1>
            <Secondary1>@secondary</Secondary1>
            <Badge3>
              <BadgeAndTagSmall>
                <Avatar5>
                  <Avatar06Icon2 alt="" />
                </Avatar5>
                <StarsIcon30 alt="" />
                <Placeholder9>
                  <Status30 />
                  <Placeholder2>New</Placeholder2>
                </Placeholder9>
                <StarsIcon30 alt="" />
                <CloseIcon3>
                  <XLgIcon27 alt="" />
                </CloseIcon3>
              </BadgeAndTagSmall>
            </Badge3>
          </Content1>
          <B>⌘+B</B>
          <Badge4>
            <BadgeAndTagSmall1>
              <Avatar5>
                <Avatar06Icon2 alt="" />
              </Avatar5>
              <StarsIcon30 alt="" />
              <Placeholder9>
                <Status31 />
                <Placeholder2>2</Placeholder2>
              </Placeholder9>
              <StarsIcon30 alt="" />
              <CloseIcon4>
                <XLgIcon27 alt="" />
              </CloseIcon4>
            </BadgeAndTagSmall1>
          </Badge4>
          <BellIcon9 alt="" />
        </DropdownItem>
        <DropdownItem>
          <BellIcon9 alt="" />
          <Ellipse12 />
          <Avatar04>
            <Avatar06Icon2 alt="" />
          </Avatar04>
          <Content1>
            <DropdownItem1>Female</DropdownItem1>
            <Secondary1>@secondary</Secondary1>
            <Badge3>
              <BadgeAndTagSmall>
                <Avatar5>
                  <Avatar06Icon2 alt="" />
                </Avatar5>
                <StarsIcon30 alt="" />
                <Placeholder9>
                  <Status30 />
                  <Placeholder2>New</Placeholder2>
                </Placeholder9>
                <StarsIcon30 alt="" />
                <CloseIcon3>
                  <XLgIcon27 alt="" />
                </CloseIcon3>
              </BadgeAndTagSmall>
            </Badge3>
          </Content1>
          <B>⌘+B</B>
          <Badge4>
            <BadgeAndTagSmall1>
              <Avatar5>
                <Avatar06Icon2 alt="" />
              </Avatar5>
              <StarsIcon30 alt="" />
              <Placeholder9>
                <Status31 />
                <Placeholder2>2</Placeholder2>
              </Placeholder9>
              <StarsIcon30 alt="" />
              <CloseIcon4>
                <XLgIcon27 alt="" />
              </CloseIcon4>
            </BadgeAndTagSmall1>
          </Badge4>
          <BellIcon9 alt="" />
        </DropdownItem>
        <DropdownItem4>
          <BellIcon9 alt="" />
          <Ellipse12 />
          <Avatar04>
            <Avatar06Icon2 alt="" />
          </Avatar04>
          <Content1>
            <DropdownItem1>Downloads</DropdownItem1>
            <Secondary1>@secondary</Secondary1>
            <Badge3>
              <BadgeAndTagSmall>
                <Avatar5>
                  <Avatar06Icon2 alt="" />
                </Avatar5>
                <StarsIcon30 alt="" />
                <Placeholder9>
                  <Status30 />
                  <Placeholder2>New</Placeholder2>
                </Placeholder9>
                <StarsIcon30 alt="" />
                <CloseIcon3>
                  <XLgIcon27 alt="" />
                </CloseIcon3>
              </BadgeAndTagSmall>
            </Badge3>
          </Content1>
          <B>⌘+B</B>
          <Badge4>
            <BadgeAndTagSmall1>
              <Avatar5>
                <Avatar06Icon2 alt="" />
              </Avatar5>
              <StarsIcon30 alt="" />
              <Placeholder9>
                <Status31 />
                <Placeholder2>2</Placeholder2>
              </Placeholder9>
              <StarsIcon30 alt="" />
              <CloseIcon4>
                <XLgIcon27 alt="" />
              </CloseIcon4>
            </BadgeAndTagSmall1>
          </Badge4>
          <BellIcon9 alt="" />
        </DropdownItem4>
        <DropdownItem4>
          <BellIcon9 alt="" />
          <Ellipse12 />
          <Avatar04>
            <Avatar06Icon2 alt="" />
          </Avatar04>
          <Content1>
            <DropdownItem1>Team Account</DropdownItem1>
            <Secondary1>@secondary</Secondary1>
            <Badge3>
              <BadgeAndTagSmall>
                <Avatar5>
                  <Avatar06Icon2 alt="" />
                </Avatar5>
                <StarsIcon30 alt="" />
                <Placeholder9>
                  <Status30 />
                  <Placeholder2>New</Placeholder2>
                </Placeholder9>
                <StarsIcon30 alt="" />
                <CloseIcon3>
                  <XLgIcon27 alt="" />
                </CloseIcon3>
              </BadgeAndTagSmall>
            </Badge3>
          </Content1>
          <B>⌘+B</B>
          <Badge4>
            <BadgeAndTagSmall1>
              <Avatar5>
                <Avatar06Icon2 alt="" />
              </Avatar5>
              <StarsIcon30 alt="" />
              <Placeholder9>
                <Status31 />
                <Placeholder2>2</Placeholder2>
              </Placeholder9>
              <StarsIcon30 alt="" />
              <CloseIcon4>
                <XLgIcon27 alt="" />
              </CloseIcon4>
            </BadgeAndTagSmall1>
          </Badge4>
          <BellIcon9 alt="" />
        </DropdownItem4>
      </List1>
      <Divider11>
        <DropdownDivider2 />
      </Divider11>
      <List2>
        <DropdownHeading1>
          <Placeholder2>HEADING</Placeholder2>
        </DropdownHeading1>
        <DropdownItem>
          <BellIcon10 alt="" />
          <Ellipse16 />
          <Avatar044>
            <Avatar06Icon2 alt="" />
          </Avatar044>
          <Content1>
            <DropdownItem1>Dropdown item</DropdownItem1>
            <Secondary5>@secondary</Secondary5>
            <Badge11>
              <BadgeAndTagSmall>
                <Avatar5>
                  <Avatar06Icon2 alt="" />
                </Avatar5>
                <StarsIcon30 alt="" />
                <Placeholder9>
                  <Status30 />
                  <Placeholder2>New</Placeholder2>
                </Placeholder9>
                <StarsIcon30 alt="" />
                <CloseIcon3>
                  <XLgIcon27 alt="" />
                </CloseIcon3>
              </BadgeAndTagSmall>
            </Badge11>
          </Content1>
          <B4>⌘+B</B4>
          <Badge12>
            <BadgeAndTagSmall1>
              <Avatar5>
                <Avatar06Icon2 alt="" />
              </Avatar5>
              <StarsIcon30 alt="" />
              <Placeholder9>
                <Status31 />
                <Placeholder2>2</Placeholder2>
              </Placeholder9>
              <StarsIcon30 alt="" />
              <CloseIcon4>
                <XLgIcon27 alt="" />
              </CloseIcon4>
            </BadgeAndTagSmall1>
          </Badge12>
          <BellIcon10 alt="" />
        </DropdownItem>
        <DropdownItem>
          <BellIcon10 alt="" />
          <Ellipse16 />
          <Avatar044>
            <Avatar06Icon2 alt="" />
          </Avatar044>
          <Content1>
            <DropdownItem1>Dropdown item</DropdownItem1>
            <Secondary5>@secondary</Secondary5>
            <Badge11>
              <BadgeAndTagSmall>
                <Avatar5>
                  <Avatar06Icon2 alt="" />
                </Avatar5>
                <StarsIcon30 alt="" />
                <Placeholder9>
                  <Status30 />
                  <Placeholder2>New</Placeholder2>
                </Placeholder9>
                <StarsIcon30 alt="" />
                <CloseIcon3>
                  <XLgIcon27 alt="" />
                </CloseIcon3>
              </BadgeAndTagSmall>
            </Badge11>
          </Content1>
          <B4>⌘+B</B4>
          <Badge12>
            <BadgeAndTagSmall1>
              <Avatar5>
                <Avatar06Icon2 alt="" />
              </Avatar5>
              <StarsIcon30 alt="" />
              <Placeholder9>
                <Status31 />
                <Placeholder2>2</Placeholder2>
              </Placeholder9>
              <StarsIcon30 alt="" />
              <CloseIcon4>
                <XLgIcon27 alt="" />
              </CloseIcon4>
            </BadgeAndTagSmall1>
          </Badge12>
          <BellIcon10 alt="" />
        </DropdownItem>
        <DropdownItem>
          <BellIcon10 alt="" />
          <Ellipse16 />
          <Avatar044>
            <Avatar06Icon2 alt="" />
          </Avatar044>
          <Content1>
            <DropdownItem1>Dropdown item</DropdownItem1>
            <Secondary5>@secondary</Secondary5>
            <Badge11>
              <BadgeAndTagSmall>
                <Avatar5>
                  <Avatar06Icon2 alt="" />
                </Avatar5>
                <StarsIcon30 alt="" />
                <Placeholder9>
                  <Status30 />
                  <Placeholder2>New</Placeholder2>
                </Placeholder9>
                <StarsIcon30 alt="" />
                <CloseIcon3>
                  <XLgIcon27 alt="" />
                </CloseIcon3>
              </BadgeAndTagSmall>
            </Badge11>
          </Content1>
          <B4>⌘+B</B4>
          <Badge12>
            <BadgeAndTagSmall1>
              <Avatar5>
                <Avatar06Icon2 alt="" />
              </Avatar5>
              <StarsIcon30 alt="" />
              <Placeholder9>
                <Status31 />
                <Placeholder2>2</Placeholder2>
              </Placeholder9>
              <StarsIcon30 alt="" />
              <CloseIcon4>
                <XLgIcon27 alt="" />
              </CloseIcon4>
            </BadgeAndTagSmall1>
          </Badge12>
          <BellIcon10 alt="" />
        </DropdownItem>
        <DropdownItem>
          <BellIcon10 alt="" />
          <Ellipse16 />
          <Avatar044>
            <Avatar06Icon2 alt="" />
          </Avatar044>
          <Content1>
            <DropdownItem1>Dropdown item</DropdownItem1>
            <Secondary5>@secondary</Secondary5>
            <Badge11>
              <BadgeAndTagSmall>
                <Avatar5>
                  <Avatar06Icon2 alt="" />
                </Avatar5>
                <StarsIcon30 alt="" />
                <Placeholder9>
                  <Status30 />
                  <Placeholder2>New</Placeholder2>
                </Placeholder9>
                <StarsIcon30 alt="" />
                <CloseIcon3>
                  <XLgIcon27 alt="" />
                </CloseIcon3>
              </BadgeAndTagSmall>
            </Badge11>
          </Content1>
          <B4>⌘+B</B4>
          <Badge12>
            <BadgeAndTagSmall1>
              <Avatar5>
                <Avatar06Icon2 alt="" />
              </Avatar5>
              <StarsIcon30 alt="" />
              <Placeholder9>
                <Status31 />
                <Placeholder2>2</Placeholder2>
              </Placeholder9>
              <StarsIcon30 alt="" />
              <CloseIcon4>
                <XLgIcon27 alt="" />
              </CloseIcon4>
            </BadgeAndTagSmall1>
          </Badge12>
          <BellIcon10 alt="" />
        </DropdownItem>
      </List2>
      <Divider21>
        <DropdownDivider2 />
      </Divider21>
      <List3>
        <DropdownHeading1>
          <Placeholder2>HEADING</Placeholder2>
        </DropdownHeading1>
        <DropdownItem>
          <BellIcon10 alt="" />
          <Ellipse16 />
          <Avatar044>
            <Avatar06Icon2 alt="" />
          </Avatar044>
          <Content1>
            <DropdownItem1>Dropdown item</DropdownItem1>
            <Secondary5>@secondary</Secondary5>
            <Badge11>
              <BadgeAndTagSmall>
                <Avatar5>
                  <Avatar06Icon2 alt="" />
                </Avatar5>
                <StarsIcon30 alt="" />
                <Placeholder9>
                  <Status30 />
                  <Placeholder2>New</Placeholder2>
                </Placeholder9>
                <StarsIcon30 alt="" />
                <CloseIcon3>
                  <XLgIcon27 alt="" />
                </CloseIcon3>
              </BadgeAndTagSmall>
            </Badge11>
          </Content1>
          <B4>⌘+B</B4>
          <Badge12>
            <BadgeAndTagSmall1>
              <Avatar5>
                <Avatar06Icon2 alt="" />
              </Avatar5>
              <StarsIcon30 alt="" />
              <Placeholder9>
                <Status31 />
                <Placeholder2>2</Placeholder2>
              </Placeholder9>
              <StarsIcon30 alt="" />
              <CloseIcon4>
                <XLgIcon27 alt="" />
              </CloseIcon4>
            </BadgeAndTagSmall1>
          </Badge12>
          <BellIcon10 alt="" />
        </DropdownItem>
        <DropdownItem>
          <BellIcon10 alt="" />
          <Ellipse16 />
          <Avatar044>
            <Avatar06Icon2 alt="" />
          </Avatar044>
          <Content1>
            <DropdownItem1>Dropdown item</DropdownItem1>
            <Secondary5>@secondary</Secondary5>
            <Badge11>
              <BadgeAndTagSmall>
                <Avatar5>
                  <Avatar06Icon2 alt="" />
                </Avatar5>
                <StarsIcon30 alt="" />
                <Placeholder9>
                  <Status30 />
                  <Placeholder2>New</Placeholder2>
                </Placeholder9>
                <StarsIcon30 alt="" />
                <CloseIcon3>
                  <XLgIcon27 alt="" />
                </CloseIcon3>
              </BadgeAndTagSmall>
            </Badge11>
          </Content1>
          <B4>⌘+B</B4>
          <Badge12>
            <BadgeAndTagSmall1>
              <Avatar5>
                <Avatar06Icon2 alt="" />
              </Avatar5>
              <StarsIcon30 alt="" />
              <Placeholder9>
                <Status31 />
                <Placeholder2>2</Placeholder2>
              </Placeholder9>
              <StarsIcon30 alt="" />
              <CloseIcon4>
                <XLgIcon27 alt="" />
              </CloseIcon4>
            </BadgeAndTagSmall1>
          </Badge12>
          <BellIcon10 alt="" />
        </DropdownItem>
        <DropdownItem>
          <BellIcon10 alt="" />
          <Ellipse16 />
          <Avatar044>
            <Avatar06Icon2 alt="" />
          </Avatar044>
          <Content1>
            <DropdownItem1>Dropdown item</DropdownItem1>
            <Secondary5>@secondary</Secondary5>
            <Badge11>
              <BadgeAndTagSmall>
                <Avatar5>
                  <Avatar06Icon2 alt="" />
                </Avatar5>
                <StarsIcon30 alt="" />
                <Placeholder9>
                  <Status30 />
                  <Placeholder2>New</Placeholder2>
                </Placeholder9>
                <StarsIcon30 alt="" />
                <CloseIcon3>
                  <XLgIcon27 alt="" />
                </CloseIcon3>
              </BadgeAndTagSmall>
            </Badge11>
          </Content1>
          <B4>⌘+B</B4>
          <Badge12>
            <BadgeAndTagSmall1>
              <Avatar5>
                <Avatar06Icon2 alt="" />
              </Avatar5>
              <StarsIcon30 alt="" />
              <Placeholder9>
                <Status31 />
                <Placeholder2>2</Placeholder2>
              </Placeholder9>
              <StarsIcon30 alt="" />
              <CloseIcon4>
                <XLgIcon27 alt="" />
              </CloseIcon4>
            </BadgeAndTagSmall1>
          </Badge12>
          <BellIcon10 alt="" />
        </DropdownItem>
        <DropdownItem>
          <BellIcon10 alt="" />
          <Ellipse16 />
          <Avatar044>
            <Avatar06Icon2 alt="" />
          </Avatar044>
          <Content1>
            <DropdownItem1>Dropdown item</DropdownItem1>
            <Secondary5>@secondary</Secondary5>
            <Badge11>
              <BadgeAndTagSmall>
                <Avatar5>
                  <Avatar06Icon2 alt="" />
                </Avatar5>
                <StarsIcon30 alt="" />
                <Placeholder9>
                  <Status30 />
                  <Placeholder2>New</Placeholder2>
                </Placeholder9>
                <StarsIcon30 alt="" />
                <CloseIcon3>
                  <XLgIcon27 alt="" />
                </CloseIcon3>
              </BadgeAndTagSmall>
            </Badge11>
          </Content1>
          <B4>⌘+B</B4>
          <Badge12>
            <BadgeAndTagSmall1>
              <Avatar5>
                <Avatar06Icon2 alt="" />
              </Avatar5>
              <StarsIcon30 alt="" />
              <Placeholder9>
                <Status31 />
                <Placeholder2>2</Placeholder2>
              </Placeholder9>
              <StarsIcon30 alt="" />
              <CloseIcon4>
                <XLgIcon27 alt="" />
              </CloseIcon4>
            </BadgeAndTagSmall1>
          </Badge12>
          <BellIcon10 alt="" />
        </DropdownItem>
      </List3>
      <Scrollbar>
        <Bar1 />
      </Scrollbar>
    </DropdownMenuRoot>
  );
};

export default DropdownMenu1;
