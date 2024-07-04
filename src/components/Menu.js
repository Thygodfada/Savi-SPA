import { useState, useCallback } from "react";
import UploadYourPicture from "./UploadYourPicture";
import PortalPopup from "./PortalPopup";
import styled from "styled-components";

const UploadPicture = styled.div`
  position: relative;
  letter-spacing: 0.15px;
  line-height: 140%;
  font-weight: 600;
  cursor: pointer;
`;
const ChangePassword = styled.div`
  position: relative;
  letter-spacing: 0.15px;
  line-height: 140%;
  font-weight: 600;
`;
const MenuRoot = styled.div`
  position: relative;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xs);
  box-sizing: border-box;
  gap: var(--gap-3xs);
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
  text-align: center;
  font-size: var(--font-size-3xs-1);
  color: var(--main-text);
  font-family: var(--text-md-medium);
`;

const Menu = () => {
  const [isUploadYourPictureOpen, setUploadYourPictureOpen] = useState(false);

  const openUploadYourPicture = useCallback(() => {
    setUploadYourPictureOpen(true);
  }, []);

  const closeUploadYourPicture = useCallback(() => {
    setUploadYourPictureOpen(false);
  }, []);

  return (
    <>
      <MenuRoot>
        <UploadPicture onClick={openUploadYourPicture}>
          Upload Picture
        </UploadPicture>
        <ChangePassword>Change Password</ChangePassword>
      </MenuRoot>
      {isUploadYourPictureOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeUploadYourPicture}
        >
          <UploadYourPicture onClose={closeUploadYourPicture} />
        </PortalPopup>
      )}
    </>
  );
};

export default Menu;
