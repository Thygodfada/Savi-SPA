import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { SidebarDataAdmin } from './SidebarDataAdmin';
import { Link, useLocation } from 'react-router-dom';
import PortalPopup from '../PortalPopup';
import LogoutModal from '../LogoutModal';

function SidebarAdmin() {
  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);

  const onFeature4Container1Click = useCallback(() => {}, []);

  const onFeature4ContainerClick = useCallback(() => {}, []);

  useEffect(() => {
    document.body.style.zoom = '86%';
  }, []);

  const onFeature5ContainerClick = useCallback(() => {}, []);

  const openLogoutModal = useCallback(() => {
    setLogoutModalOpen(true);
  }, []);

  const closeLogoutModal = useCallback(() => {
    setLogoutModalOpen(false);
  }, []);

  const location = useLocation();

  return (
    <>
    <div style={{ float: 'left' }}>
      <SideBardefault>
        <FrameParent31>
          <OverviewParent>
            <Savi>Overview</Savi>
            <Feature1Parent>
              {SidebarDataAdmin.map(
                (val, key) => {
                  if (val.link === '/dashboard') {
                    return location.pathname === '/dashboard' ? (
                      <>
                      <Link style={{textDecoration:'none',color:'inherit'}} to={val.link}>
                        <Feature1>
                          <VuesaxbulkhomeIcon1 alt="" src={val.iconActive} />
                          <Dashboard1>{val.title}</Dashboard1>
                        </Feature1>
                      </Link>
                        
                      </>
                    ) : (
                      <Link style={{textDecoration:'none',color:'inherit'}} to={val.link}>
                      <Feature3>
                        <VuesaxbulkhomeIcon1 alt="" src={val.icon} />
                        <Savi>{val.title}</Savi>
                      </Feature3>
                      </Link>
                    );
                  } else if(val.link === '/user-groups' || val.link === '/explore-group-details' || val.link === '/group-transactions'){
                    return location.pathname === '/user-groups' ? (
                      <>
                      <Link style={{textDecoration:'none',color:'inherit'}} to={val.link}>
                        <Feature1>
                        <BulkhomeIcon>{val.iconActive}</BulkhomeIcon>
                          <Dashboard1>{val.title}</Dashboard1>
                        </Feature1>
                        </Link>
                      </>
                    ):location.pathname === '/group-transactions' ?  ( 
                    <Link style={{textDecoration:'none',color:'inherit'}} to={val.link}>
                    <Feature1>
                    <BulkhomeIcon>{val.iconActive}</BulkhomeIcon>
                      <Dashboard1>{val.title}</Dashboard1>
                    </Feature1>
                    </Link>
                ):location.pathname === '/explore-group-details' ?  ( 
                  <Link style={{textDecoration:'none',color:'inherit'}} to={val.link}>
                  <Feature1>
                  <BulkhomeIcon>{val.iconActive}</BulkhomeIcon>
                    <Dashboard1>{val.title}</Dashboard1>
                  </Feature1>
                  </Link>
              ):(
                      <Link style={{textDecoration:'none',color:'inherit'}} to={val.link}>
                      <Feature3>
                      <BulkhomeIcon>{val.icon}</BulkhomeIcon>
                        <Savi>{val.title}</Savi>
                      </Feature3>
                      </Link>
                    );
                  }
                  else if(val.link === '/defaulting-users' ){
                    return location.pathname === '/defaulting-users' ? (
                      <>
                      <Link style={{textDecoration:'none',color:'inherit'}} to={val.link}>
                        <Feature1>
                        
                          <BulkhomeIcon>{val.iconActive}</BulkhomeIcon>
                          <Dashboard1>{val.title}</Dashboard1>
                        </Feature1>
                        </Link>
                      </>
                    ) :(
                      <Link style={{textDecoration:'none',color:'inherit'}} to={val.link}>
                      <Feature3>
                      <BulkhomeIcon>{val.icon}</BulkhomeIcon>
                        <Savi>{val.title}</Savi>
                      </Feature3>
                      </Link>
                    );
                  }
                  else if(val.link === '/users'){
                    return location.pathname === '/users' ? (
                      <>
                      <Link style={{textDecoration:'none',color:'inherit'}} to={val.link}>
                        <Feature1>
                          <VuesaxbulkhomeIcon1 alt="" src={val.iconActive} />
                          <Dashboard1>{val.title}</Dashboard1>
                        </Feature1>
                        </Link>
                      </>
                    ) : (
                      <Link style={{textDecoration:'none',color:'inherit'}} to={val.link}>
                      <Feature3>
                        <VuesaxbulkhomeIcon1 alt="" src={val.icon} />
                        <Savi>{val.title}</Savi>
                      </Feature3>
                      </Link>
                    );
                  }

                  else if(val.link === '/complaints'){
                    return location.pathname === '/complaints' ? (
                      <>
                      <Link style={{textDecoration:'none',color:'inherit'}} to={val.link}>
                        <Feature1>
                        <BulkhomeIcon>{val.iconActive}</BulkhomeIcon>
                          <Dashboard1>{val.title}</Dashboard1>
                        </Feature1>
                        </Link>
                      </>
                    ) : (
                      <Link style={{textDecoration:'none',color:'inherit'}} to={val.link}>
                      <Feature3>
                      <BulkhomeIcon>{val.icon}</BulkhomeIcon>
                        <Savi>{val.title}</Savi>
                      </Feature3>
                      </Link>
                    );
                  }
                }
              )}
            </Feature1Parent>
            
          </OverviewParent>

          <OverviewParent>
            <Savi>Others</Savi>
            <Feature1Parent>
            { location.pathname === '/settings' ? (
                      <>
                      <Link style={{textDecoration:'none',color:'inherit'}} to="/settings">
                        <Feature1>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M2 12.88V11.12C2 10.08 2.85 9.22 3.9 9.22C5.71 9.22 6.45 7.94 5.54 6.37C5.02 5.47 5.33 4.3 6.24 3.78L7.97 2.79C8.76 2.32 9.78 2.6 10.25 3.39L10.36 3.58C11.26 5.15 12.74 5.15 13.65 3.58L13.76 3.39C14.23 2.6 15.25 2.32 16.04 2.79L17.77 3.78C18.68 4.3 18.99 5.47 18.47 6.37C17.56 7.94 18.3 9.22 20.11 9.22C21.15 9.22 22.01 10.07 22.01 11.12V12.88C22.01 13.92 21.16 14.78 20.11 14.78C18.3 14.78 17.56 16.06 18.47 17.63C18.99 18.54 18.68 19.7 17.77 20.22L16.04 21.21C15.25 21.68 14.23 21.4 13.76 20.61L13.65 20.42C12.75 18.85 11.27 18.85 10.36 20.42L10.25 20.61C9.78 21.4 8.76 21.68 7.97 21.21L6.24 20.22C5.33 19.7 5.02 18.53 5.54 17.63C6.45 16.06 5.71 14.78 3.9 14.78C2.85 14.78 2 13.92 2 12.88Z" fill="white"/>
<path d="M12 15.25C13.7949 15.25 15.25 13.7949 15.25 12C15.25 10.2051 13.7949 8.75 12 8.75C10.2051 8.75 8.75 10.2051 8.75 12C8.75 13.7949 10.2051 15.25 12 15.25Z" fill="white"/>
</svg>

                        <Savi>Settings</Savi>
                        </Feature1>
                      </Link>
                      </>
                    ) : (
                      <Link style={{textDecoration:'none',color:'inherit'}} to="/settings">
                      <Feature3>
                      <VuesaxbulkhomeIcon1 alt="" src="/setting-2.png" />
                      <Savi>Settings</Savi>
                      </Feature3>
                    </Link>
                    )}
              <Feature3 onClick={openLogoutModal}>
                <VuesaxbulkhomeIcon1 alt="" src="/logout.png" />
                <Savi>Logout</Savi>
              </Feature3>
            </Feature1Parent>
          </OverviewParent>
        </FrameParent31>
        {/* <Navbar /> */}
      </SideBardefault>
    </div>
    {isLogoutModalOpen && (
      <PortalPopup
        overlayColor="rgba(113, 113, 113, 0.3)"
        placement="Centered"
        onOutsideClick={closeLogoutModal}
      >
        <LogoutModal onClose={closeLogoutModal} />
      </PortalPopup>
    )}
    </>
  );
}

export default SidebarAdmin;

const OverviewParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
`;


const Feature1 = styled.div`
  border-radius: var(--br-5xs);
  background-color: var(--primary-color);
  width: 13.94rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-3xs);
  box-sizing: border-box;
  gap: var(--gap-3xs);
  color: var(--white);

  

`;

const FrameParent31 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  text-align: left;
  font-size: var(--text-md-medium-size);
  color: var(--grey-400);
  font-family: var(--text-md-medium);
`;

const Dashboard1 = styled.div`
  position: relative;
  letter-spacing: 0.15px;
  line-height: 140%;
  font-weight: 600;
`;
const Savi = styled.div`
  position: relative;
  letter-spacing: 0.15px;
  line-height: 140%;
  //color: black;

  &:hover {
    color: white;
  }
`;

const Feature1Parent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  color: var(--main-text);
`;

const Feature3 = styled.div`
  border-radius: var(--br-5xs);
  background-color: var(--white);
  width: 13.94rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-3xs);
  box-sizing: border-box;
  gap: var(--gap-3xs);
  cursor: pointer;

  &:hover {
    background-color: #b5179e;
    color: white;
    border-radius: 8px;
    cursor: pointer;
  }
`;

const VuesaxbulkhomeIcon1 = styled.img`
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  object-fit: cover;
`;
const BulkhomeIcon = styled.div`
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
`;
const SideBardefault = styled.div`
  position: fixed;
  top: 6rem;
  left: 0rem;
  background-color: var(--white);
  // height: 100vh;
  // overflow-y:scroll;
  // overflow-x:hidden;
  width: 17.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xl);
  box-sizing: border-box;
  gap: var(--gap-5xl);
  text-align: center;
  font-size: 2rem;
  color: var(--primary-color);
  font-family: var(--font-bodoni-moda);
`;
