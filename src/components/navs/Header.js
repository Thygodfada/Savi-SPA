import { useState, useCallback, useEffect, useRef } from 'react';
import '../../App.css';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PortalPopup from '../PortalPopup';
import LogoutModal from '../LogoutModal';
import CreateSavingsGroupForm from '../../pages/group/CreateNewSavingsGroup';
import Profile from './Profile';
import axios from 'axios';

const Header = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);
  const [imageCheck, setImageCheck]=useState(null);

  const [isNewGroup, setNewGroup] = useState(false);

  const openNewGroupForm = () => {
    setNewGroup(true);
  };
  const closeNewGroupForm = () => {
    setNewGroup(false);
  };

  if(localStorage.getItem('userImage')==null || localStorage.getItem('userImage')===""){
    axios.get(`https://localhost:7226/api/User/getUserById?userId=${localStorage.getItem('userId')}`)
    .then(response => {
      const img = response.data.data.imageUrl;
      localStorage.setItem('userImage',img);
      console.log("img",img);
      setImageCheck(img);
    })
    .catch(error => {
      // Handle error
      console.error("Error fetching data:", error);
    });
  }

  const dropdownRef = useRef(null);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const closeLogoutModal = useCallback(() => {
    setLogoutModalOpen(false);
  }, []);

  useEffect(() => {
    document.body.style.zoom = '86%';
  }, []);

  const navigate = useNavigate();

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };
  const openLogoutModal = useCallback(() => {
    setLogoutModalOpen(true);
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (localStorage.getItem('fullname') == null) {
      navigate('/signin');
    }
  }, []);
  return (
    <>
      <DashboardRoot>
        <Logo>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Savi1 style={{ color: '#b5179e' }}>Savi.</Savi1>
          </Link>
        </Logo>
        <div
          style={{
            height: '100%',
            marginLeft: '23em',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <SearchBarWrapper>
              <SearchBar1>
                <AddParent>
                  <ChevronDownIcon2 alt="" src="/search-alt.png" />
                  <SearchInput type="text" placeholder="Search" />
                </AddParent>
              </SearchBar1>
            </SearchBarWrapper>
          </div>
          <div ref={dropdownRef}>
            <AvatardefaultParent onClick={toggleDropdown}>
              <AvatardefaultIcon alt="" src={localStorage.getItem('userImage')==null?imageCheck:localStorage.getItem('userImage')} />
              <Savi>{localStorage.getItem('fullname').split(' ')[0]}</Savi>
              {isDropdownOpen && (
               <DropdownContent>
               <DropdownList>
                 <ListItem onClick={openNewGroupForm}>Profile</ListItem>
                 <ListItem>Settings</ListItem>
                 <ListItem onClick={openLogoutModal}>Logout</ListItem>
               </DropdownList>
             </DropdownContent>
              )}
            </AvatardefaultParent>
          </div>
        </div>
      </DashboardRoot>
      
      {isLogoutModalOpen && (
      <PortalPopup
        overlayColor="rgba(113, 113, 113, 0.3)"
        placement="Centered"
        onOutsideClick={closeLogoutModal}
      >
        <LogoutModal onClose={closeLogoutModal} />
      </PortalPopup>
    )}

      {isNewGroup && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeNewGroupForm}
        >
          <Profile onClose={closeNewGroupForm} />
        </PortalPopup>
      )}
    </>
  );
};

export default Header;

const DropdownList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  padding: 10px 30px 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #808080;
    color:white
  }
`;

const DropdownContent = styled.div`
  position: absolute;
  top: 100%;
  right: 1;
  background-color: white;
  border: 1px solid #ccc;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 999;
`;


const Savi = styled.div`
  margin-left: 10px;
  margin-top: 5px;
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.15000000596046448px;
  text-align: left;
`;
const Savi1 = styled.b``;
const ChevronDownIcon2 = styled.img`
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;

const AddParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const SearchBar1 = styled.div`
  border-radius: var(--br-81xl);
  background-color: var(--white);
  border: 1px solid var(--grey-300);
  box-sizing: border-box;
  width: 19.25rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-3xs) var(--padding-5xl);
`;

const SearchBarWrapper = styled.div`
  margin-top: 1.5em;
  color: var(--grey-400);
`;

const AvatardefaultIcon = styled.img`
  position: relative;
  border-radius: var(--br-181xl);
  width: 2rem;
  height: 2rem;
  object-fit: cover;
`;

const AvatardefaultParent = styled.div`
  display: flex;
  cursor: pointer;
  margin-right: 4em;

  margin-top: 1.5em;
`;

const Logo = styled.div`
  position: absolute;
  top: 0rem;
  left: 0rem;
  font-size: 2rem;
  margin-left: 0.7em;
  margin-top: 0.7em;
  color: var(--primary-color);
  font-family: var(--font-bodoni-moda);
`;

const SearchInput = styled.input`
  border: none;
  outline: none;

  &:focus {
    outline: none;
    border: none;
  }
`;

const DashboardRoot = styled.div`
  position: fixed;
  width: 100%;
  height: 6.5em;
  box-sizing: border-box; /* Include the border in the total width/height */
  text-align: left;
  font-size: var(--input-small-medium-size);
  color: #101828;
  font-family: var(--text-md-medium);
  top: 0em;
  background:white;
   z-index: 10;
`;
