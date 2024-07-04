import '../../App.css';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

import { useCallback, useEffect, useState } from 'react';

import SWCBarChart from './SWCBarChart';
import axios from 'axios';


const AdminDashBoard = () => {
  const [topbar, setTopBarTransactions] = useState([]);


  const getUserGroupTransactions = async () => {
    try {
      await axios
        .get(
          `https://localhost:7226/api/User/dashboard-user-data`
        )
        .then((response) => {        
          var dat = response.data.data;
            console.log("respo",dat);
            setTopBarTransactions(dat);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    } catch (error) {
      console.error('Error fetching dataa:', error);
    }
  };

  useEffect(() => {
    getUserGroupTransactions();
  }, []);



  return (
    <Container style={{ backgroundColor: '#F9FAFB' }}>
      <Row style={{ width: '100%' }}>
        <Col sm={12}>
          <WelcomeBackJohnDoeParent style={{ marginBottom: '1em' }}>
            <WelcomeBackJohn1>Welcome back Admin</WelcomeBackJohn1>
            <EmojiParent>
              <EmojiIcon1 alt="" src="/emoji@2x.png" />
              <Savi>Feb 26, 2024</Savi>
            </EmojiParent>
          </WelcomeBackJohnDoeParent>
        </Col>
      </Row>

      <Row>
        <Col md={3}>
          <FirstDiv>
            <Title>New Registrations</Title>
            <Number>{topbar[0]}</Number>
          </FirstDiv>
        </Col>
        <Col md={3}>
          <FirstDiv>
            <Title>New&nbsp;Saving Groups</Title>
            <Number>{topbar[1]}</Number>
          </FirstDiv>
        </Col>
        <Col md={3}>
          <FirstDiv>
            <Title>New&nbsp;Defaulting Users</Title>
            <Number>{topbar[2]}</Number>
          </FirstDiv>
        </Col>
      </Row>

      <Row>
        <BackG>
          <Row>
            <Col md={3}>
              <SecondDiv>
                <ImgIcon>
                  <svg
                    width="32"
                    height="26"
                    viewBox="0 0 32 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 8.82966C17.7334 8.82966 19.3292 9.41916 20.5977 10.4086C19.905 11.2383 19.4879 12.3062 19.4879 13.4714C19.4879 14.5348 19.8354 15.5172 20.4226 16.3115H11.5774C12.1647 15.5172 12.5121 14.5349 12.5121 13.4714C12.5121 12.3062 12.0951 11.2383 11.4024 10.4086C12.6709 9.41916 14.2666 8.82966 16 8.82966ZM7.72931 18.2647C11.0899 18.2647 13.9331 20.4803 14.8776 23.5305C15.0436 24.0664 14.9533 24.5996 14.6204 25.0512C14.2876 25.5027 13.8049 25.7465 13.2439 25.7465H2.21463C1.65363 25.7465 1.171 25.5027 0.838126 25.0512C0.505251 24.5996 0.415064 24.0664 0.581001 23.5305C1.52556 20.4804 4.36875 18.2647 7.72931 18.2647ZM24.2708 9.68866C22.1816 9.68866 20.4879 11.3823 20.4879 13.4715C20.4879 15.5607 22.1816 17.2543 24.2708 17.2543C26.3599 17.2543 28.0536 15.5607 28.0536 13.4715C28.0536 11.3823 26.3599 9.68866 24.2708 9.68866ZM7.72931 9.68866C5.64013 9.68866 3.9465 11.3823 3.9465 13.4715C3.9465 15.5607 5.64013 17.2543 7.72931 17.2543C9.8185 17.2543 11.5121 15.5607 11.5121 13.4715C11.5121 11.3823 9.8185 9.68866 7.72931 9.68866ZM24.2707 18.2647C27.6313 18.2647 30.4744 20.4803 31.4189 23.5305C31.5849 24.0664 31.4947 24.5996 31.1618 25.0512C30.8289 25.5027 30.3463 25.7465 29.7853 25.7465H18.7561C18.1951 25.7465 17.7124 25.5027 17.3796 25.0512C17.0467 24.5996 16.9565 24.0664 17.1224 23.5305C18.067 20.4804 20.9102 18.2647 24.2707 18.2647ZM16.0001 0.253662C18.0893 0.253662 19.7829 1.94729 19.7829 4.03647C19.7829 6.12566 18.0893 7.81929 16.0001 7.81929C13.9109 7.81929 12.2173 6.12566 12.2173 4.03647C12.2173 1.94729 13.9109 0.253662 16.0001 0.253662Z"
                      fill="#B5179E"
                    />
                  </svg>
                </ImgIcon>

                <InnerFrame>
                  <span>Total Savings Group</span>

                  <BoldNumber>{topbar[3]}</BoldNumber>
                </InnerFrame>
                <LastFrame>
                  {
                    topbar[6]>-1?(<PercentGreen>
                      +{topbar[5]}%
                      <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_212_23403)">
                        <path
                          d="M10.02 2L13.998 2L13.998 6L10.02 2Z"
                          fill="#34A853"
                        />
                        <path
                          d="M6.739 7.76405L11.361 3.14605L12.858 4.64305L8.235 9.26105L6.739 7.76405ZM3.841 10.707L5.291 9.25905L6.738 10.709L5.288 12.156L3.841 10.707ZM0.944002 13.601L2.394 12.154L3.841 13.602L2.39 15.05L0.944002 13.601Z"
                          fill="#34A853"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_212_23403">
                          <rect
                            width="16"
                            height="16"
                            fill="white"
                            transform="translate(16 16) rotate(-180)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                      <Des> than last month</Des>
                    </PercentGreen>):(<Percent>
                      -{topbar[6]}%
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M5.98 14H2.002V10L5.98 14Z" fill="#EB5757" />
                        <path
                          d="M9.261 8.23595L4.639 12.854L3.142 11.357L7.765 6.73895L9.261 8.23595ZM12.159 5.29295L10.709 6.74095L9.262 5.29095L10.712 3.84395L12.159 5.29295ZM15.056 2.39895L13.606 3.84595L12.159 2.39795L13.61 0.949951L15.056 2.39895Z"
                          fill="#EB5757"
                        />
                      </svg>
                      
                    <Des> than last month</Des>
                  </Percent>)
                  }
                  
                </LastFrame>
              </SecondDiv>
            </Col>
            <Col md={3}>
              <SecondDiv>
                <ImgIcon>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M21.022 7.00306C22.563 7.01706 23.978 8.33807 24.003 9.96507C24.025 12.3171 24.01 14.6681 24.003 17.0201C23.989 18.5631 22.662 19.9751 21.041 20.0011C15.69 20.0511 10.339 20.0171 4.987 20.0011C3.446 19.9861 2.032 18.6661 2.007 17.0381C1.985 14.6871 1.999 12.3351 2.006 9.98407C2.021 8.44407 3.347 7.02806 4.969 7.00306C10.32 6.95306 15.671 6.98606 21.022 7.00306ZM4.005 16.1831C4.006 16.4551 4.006 16.7271 4.006 17.0001C4.006 17.5171 4.457 17.9891 4.987 18.0011C5.271 18.0051 5.55501 18.0091 5.839 18.0131C5.83201 17.9931 5.825 17.9731 5.818 17.9531C5.512 17.1351 4.828 16.4841 4.005 16.1831ZM22.013 16.1831C21.19 16.4901 20.503 17.1631 20.188 18.0021C20.46 18.0011 20.731 18.0011 21.002 18.0011C21.52 18.0011 21.992 17.5501 22.003 17.0201C22.008 16.7411 22.011 16.4621 22.013 16.1831ZM13.027 10.0021C14.646 10.0181 16.162 11.2741 16.45 12.8841C16.837 15.0481 14.817 17.3971 12.365 16.9431C10.945 16.6791 9.753 15.4471 9.542 14.0121C9.258 12.0741 10.837 10.0501 12.937 10.0031C12.967 10.0021 12.997 10.0021 13.027 10.0021ZM5.824 9.00206C5.552 9.00206 5.28 9.00206 5.008 9.00206C4.491 9.00406 4.018 9.45207 4.006 9.98407C4.002 10.2671 3.999 10.5511 3.996 10.8341C4.016 10.8281 4.035 10.8211 4.054 10.8141C4.872 10.5091 5.523 9.82406 5.824 9.00206ZM20.185 8.99107C20.493 9.81407 21.165 10.5021 22.005 10.8171C22.004 10.5461 22.004 10.2751 22.004 10.0041C22.004 9.48607 21.553 9.01406 21.022 9.00306C20.743 8.99806 20.464 8.99407 20.185 8.99107Z"
                      fill="#B5179E"
                    />
                    <path
                      d="M26.1379 10.7967C26.6161 10.8831 26.981 11.2972 27.0033 11.7874C27.0033 14.0853 27.0107 16.3832 27.0033 18.6801C26.9819 20.9232 25.061 22.9927 22.6572 23.0002H5.57765C4.6947 22.9602 4.2082 21.653 5.06515 21.1424C5.20627 21.0579 5.28519 21.0133 5.57765 21.0003C11.2801 21.0003 16.9835 21.0542 22.686 21.0003C23.8995 20.9808 24.9997 19.9159 25.0034 18.6513V11.7874C25.0294 11.2062 25.5419 10.7429 26.1379 10.7967Z"
                      fill="#B5179E"
                    />
                    <path
                      d="M29.1369 13.7967C29.6151 13.8831 29.98 14.2972 30.0022 14.7874C30.0022 16.6944 30.0078 18.6023 30.0022 20.5094C29.9753 23.3467 27.5456 25.9909 24.479 26.0002H8.57664C7.89423 25.9695 7.39009 25.2323 7.65748 24.6075C7.78653 24.3039 8.07435 24.0755 8.39838 24.0161C8.47636 24.0022 8.49679 24.004 8.57664 24.0003C13.8845 24.0003 19.1915 24.017 24.4994 24.0003C26.3182 23.9836 27.9968 22.4136 28.0024 20.4741V14.7874C28.0284 14.2062 28.5409 13.7429 29.1369 13.7967Z"
                      fill="#B5179E"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.9955 12.0029C12.0115 12.0119 11.2015 13.1709 11.6415 14.1279C12.0325 14.9789 13.3135 15.2649 14.0265 14.6009C14.8555 13.8299 14.4495 12.0439 13.0445 12.0039C13.0285 12.0029 13.0125 12.0029 12.9955 12.0029Z"
                      fill="#B5179E"
                    />
                  </svg>
                </ImgIcon>

                <InnerFrame>
                  <span>Total Funds Saved</span>

                  <BoldNumber>&#x20A6;{parseFloat(topbar[4]).toLocaleString()}</BoldNumber>
                </InnerFrame>
                <LastFrame>
                  {topbar[5]>-1?(<PercentGreen>
                    +{topbar[5]}%{' '}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_212_23403)">
                        <path
                          d="M10.02 2L13.998 2L13.998 6L10.02 2Z"
                          fill="#34A853"
                        />
                        <path
                          d="M6.739 7.76405L11.361 3.14605L12.858 4.64305L8.235 9.26105L6.739 7.76405ZM3.841 10.707L5.291 9.25905L6.738 10.709L5.288 12.156L3.841 10.707ZM0.944002 13.601L2.394 12.154L3.841 13.602L2.39 15.05L0.944002 13.601Z"
                          fill="#34A853"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_212_23403">
                          <rect
                            width="16"
                            height="16"
                            fill="white"
                            transform="translate(16 16) rotate(-180)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  
                    <Des> than last month</Des>
                  </PercentGreen>):(  <Percent>
                    -{topbar[5]}%{' '}
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M5.98 14H2.002V10L5.98 14Z" fill="#EB5757" />
                        <path
                          d="M9.261 8.23595L4.639 12.854L3.142 11.357L7.765 6.73895L9.261 8.23595ZM12.159 5.29295L10.709 6.74095L9.262 5.29095L10.712 3.84395L12.159 5.29295ZM15.056 2.39895L13.606 3.84595L12.159 2.39795L13.61 0.949951L15.056 2.39895Z"
                          fill="#EB5757"
                        />
                      </svg>
                    <Des> than last month</Des>
                  </Percent>
)}
                  

                
                </LastFrame>
              </SecondDiv>
            </Col>
            <Col md={3}>
              <SecondDiv>
                <ImgIcon>
                  <svg
                    width="30"
                    height="28"
                    viewBox="0 0 30 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 14.0001C14.2089 14.0001 13.4355 14.2347 12.7777 14.6742C12.1199 15.1137 11.6072 15.7384 11.3045 16.4693C11.0017 17.2003 10.9225 18.0045 11.0769 18.7804C11.2312 19.5564 11.6122 20.2691 12.1716 20.8285C12.731 21.3879 13.4437 21.7689 14.2196 21.9232C14.9956 22.0776 15.7998 21.9983 16.5307 21.6956C17.2616 21.3928 17.8864 20.8802 18.3259 20.2224C18.7654 19.5646 19 18.7912 19 18.0001C19 16.9392 18.5786 15.9218 17.8284 15.1717C17.0783 14.4215 16.0609 14.0001 15 14.0001ZM15 19.3334C14.7363 19.3334 14.4785 19.2552 14.2592 19.1087C14.04 18.9622 13.8691 18.754 13.7682 18.5103C13.6673 18.2667 13.6409 17.9986 13.6923 17.74C13.7437 17.4813 13.8707 17.2437 14.0572 17.0573C14.2437 16.8708 14.4812 16.7438 14.7399 16.6924C14.9985 16.6409 15.2666 16.6673 15.5103 16.7682C15.7539 16.8692 15.9621 17.0401 16.1086 17.2593C16.2551 17.4786 16.3333 17.7364 16.3333 18.0001C16.3333 18.3537 16.1929 18.6928 15.9428 18.9429C15.6928 19.1929 15.3536 19.3334 15 19.3334ZM14.0533 10.9467C14.1801 11.0681 14.3297 11.1633 14.4933 11.2267C14.6529 11.2973 14.8255 11.3337 15 11.3337C15.1745 11.3337 15.3471 11.2973 15.5067 11.2267C15.6703 11.1633 15.8199 11.0681 15.9467 10.9467L19 7.94675C19.2582 7.6886 19.4032 7.33849 19.4032 6.97341C19.4032 6.60834 19.2582 6.25822 19 6.00008C18.7419 5.74194 18.3917 5.59691 18.0267 5.59691C17.6616 5.59691 17.3115 5.74194 17.0533 6.00008L16.3333 6.78675V2.00008C16.3333 1.64646 16.1929 1.30732 15.9428 1.05727C15.6928 0.807224 15.3536 0.666748 15 0.666748C14.6464 0.666748 14.3073 0.807224 14.0572 1.05727C13.8072 1.30732 13.6667 1.64646 13.6667 2.00008V6.78675L12.9467 6.00008C12.6885 5.74194 12.3384 5.59691 11.9733 5.59691C11.6083 5.59691 11.2582 5.74194 11 6.00008C10.7419 6.25822 10.5968 6.60834 10.5968 6.97341C10.5968 7.33849 10.7419 7.6886 11 7.94675L14.0533 10.9467ZM24.3333 18.0001C24.3333 17.7364 24.2551 17.4786 24.1086 17.2593C23.9621 17.0401 23.7539 16.8692 23.5103 16.7682C23.2666 16.6673 22.9985 16.6409 22.7399 16.6924C22.4812 16.7438 22.2437 16.8708 22.0572 17.0573C21.8707 17.2437 21.7437 17.4813 21.6923 17.74C21.6409 17.9986 21.6673 18.2667 21.7682 18.5103C21.8691 18.754 22.04 18.9622 22.2593 19.1087C22.4785 19.2552 22.7363 19.3334 23 19.3334C23.3536 19.3334 23.6928 19.1929 23.9428 18.9429C24.1929 18.6928 24.3333 18.3537 24.3333 18.0001ZM25.6667 8.66675H21.6667C21.3131 8.66675 20.9739 8.80722 20.7239 9.05727C20.4738 9.30732 20.3333 9.64646 20.3333 10.0001C20.3333 10.3537 20.4738 10.6928 20.7239 10.9429C20.9739 11.1929 21.3131 11.3334 21.6667 11.3334H25.6667C26.0203 11.3334 26.3594 11.4739 26.6095 11.7239C26.8595 11.974 27 12.3131 27 12.6667V23.3334C27 23.687 26.8595 24.0262 26.6095 24.2762C26.3594 24.5263 26.0203 24.6667 25.6667 24.6667H4.33334C3.97972 24.6667 3.64058 24.5263 3.39053 24.2762C3.14049 24.0262 3.00001 23.687 3.00001 23.3334V12.6667C3.00001 12.3131 3.14049 11.974 3.39053 11.7239C3.64058 11.4739 3.97972 11.3334 4.33334 11.3334H8.33334C8.68697 11.3334 9.0261 11.1929 9.27615 10.9429C9.5262 10.6928 9.66668 10.3537 9.66668 10.0001C9.66668 9.64646 9.5262 9.30732 9.27615 9.05727C9.0261 8.80722 8.68697 8.66675 8.33334 8.66675H4.33334C3.27248 8.66675 2.25506 9.08817 1.50492 9.83832C0.754771 10.5885 0.333344 11.6059 0.333344 12.6667V23.3334C0.333344 24.3943 0.754771 25.4117 1.50492 26.1618C2.25506 26.912 3.27248 27.3334 4.33334 27.3334H25.6667C26.7275 27.3334 27.745 26.912 28.4951 26.1618C29.2453 25.4117 29.6667 24.3943 29.6667 23.3334V12.6667C29.6667 11.6059 29.2453 10.5885 28.4951 9.83832C27.745 9.08817 26.7275 8.66675 25.6667 8.66675ZM5.66668 18.0001C5.66668 18.2638 5.74488 18.5216 5.89138 18.7408C6.03789 18.9601 6.24613 19.131 6.48977 19.2319C6.7334 19.3328 7.00149 19.3592 7.26013 19.3078C7.51877 19.2563 7.75635 19.1294 7.94282 18.9429C8.12929 18.7564 8.25628 18.5188 8.30772 18.2602C8.35917 18.0016 8.33277 17.7335 8.23185 17.4898C8.13093 17.2462 7.96004 17.038 7.74077 16.8915C7.5215 16.7449 7.26372 16.6667 7.00001 16.6667C6.64639 16.6667 6.30725 16.8072 6.0572 17.0573C5.80715 17.3073 5.66668 17.6465 5.66668 18.0001Z"
                      fill="#B5179E"
                    />
                  </svg>
                </ImgIcon>

                <InnerFrame>
                  <span>Total Funds Withdrawn</span>

                  <BoldNumber>&#x20A6;0</BoldNumber>
                </InnerFrame>
                <LastFrame>
                  <Percent>
                    0%{' '}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5.98 14H2.002V10L5.98 14Z" fill="#EB5757" />
                      <path
                        d="M9.261 8.23595L4.639 12.854L3.142 11.357L7.765 6.73895L9.261 8.23595ZM12.159 5.29295L10.709 6.74095L9.262 5.29095L10.712 3.84395L12.159 5.29295ZM15.056 2.39895L13.606 3.84595L12.159 2.39795L13.61 0.949951L15.056 2.39895Z"
                        fill="#EB5757"
                      />
                    </svg>
                    <Des> than last month</Des>
                  </Percent>
                </LastFrame>
              </SecondDiv>
            </Col>
            <Col md={3}>
              <SecondDiv>
                <ImgIcon>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 23.3331C8.55711 22.9146 9.2496 22.6667 10 22.6667C11.8409 22.6667 13.3333 24.1591 13.3333 26C13.3333 26.7504 13.0854 27.4429 12.6669 28M24 23.3331C23.4429 22.9146 22.7504 22.6667 22 22.6667C20.1591 22.6667 18.6667 24.1591 18.6667 26C18.6667 26.7504 18.9146 27.4429 19.3331 28M23.9999 13.3333C25.3178 13.3322 26.0085 13.3155 26.544 13.0427C27.0457 12.787 27.4537 12.3791 27.7094 11.8773C28 11.3069 28 10.5601 28 9.06667V8.26667C28 6.77319 28 6.02646 27.7094 5.45603C27.4537 4.95426 27.0457 4.54631 26.544 4.29065C25.9735 4 25.2268 4 23.7333 4H8.26667C6.77319 4 6.02646 4 5.45603 4.29065C4.95426 4.54631 4.54631 4.95426 4.29065 5.45603C4 6.02646 4 6.77319 4 8.26667V9.06667C4 10.5601 4 11.3069 4.29065 11.8773C4.54631 12.3791 4.95426 12.787 5.45603 13.0427C5.99146 13.3155 6.68222 13.3322 8.00007 13.3333M23.9999 13.3333C24 13.4195 24 13.5083 24 13.6V23.7333C24 25.2268 24 25.9735 23.7094 26.544C23.4537 27.0457 23.0457 27.4537 22.544 27.7094C21.9735 28 21.2268 28 19.7333 28H12.2667C10.7732 28 10.0265 28 9.45603 27.7094C8.95426 27.4537 8.54631 27.0457 8.29065 26.544C8 25.9735 8 25.2268 8 23.7333V13.6C8 13.5083 8 13.4195 8.00007 13.3333M23.9999 13.3333C23.9989 12.0155 23.9822 11.3248 23.7094 10.7894C23.4537 10.2876 23.0457 9.87965 22.544 9.62398C21.9735 9.33333 21.2268 9.33333 19.7333 9.33333H12.2667C10.7732 9.33333 10.0265 9.33333 9.45603 9.62398C8.95426 9.87965 8.54631 10.2876 8.29065 10.7894C8.01784 11.3248 8.0011 12.0155 8.00007 13.3333M18.6667 16C18.6667 17.4728 17.4728 18.6667 16 18.6667C14.5272 18.6667 13.3333 17.4728 13.3333 16C13.3333 14.5272 14.5272 13.3333 16 13.3333C17.4728 13.3333 18.6667 14.5272 18.6667 16Z"
                      stroke="#B5179E"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </ImgIcon>

                <InnerFrame>
                  <span>Total Withdrawals</span>

                  <BoldNumber>0</BoldNumber>
                </InnerFrame>
                <LastFrame>
                  <Percent>
                    0%{' '}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5.98 14H2.002V10L5.98 14Z" fill="#EB5757" />
                      <path
                        d="M9.261 8.23595L4.639 12.854L3.142 11.357L7.765 6.73895L9.261 8.23595ZM12.159 5.29295L10.709 6.74095L9.262 5.29095L10.712 3.84395L12.159 5.29295ZM15.056 2.39895L13.606 3.84595L12.159 2.39795L13.61 0.949951L15.056 2.39895Z"
                        fill="#EB5757"
                      />
                    </svg>
                    <Des> than last month</Des>
                  </Percent>
                </LastFrame>
              </SecondDiv>
            </Col>
          </Row>
        </BackG>
      </Row>

      <Row>
        <BackG>
          <ChartTitleDiv>
            <Tit>Financial Overview</Tit>
          </ChartTitleDiv>
          <Para>Your Financial Review Summary and Activity</Para>
          <Divider />
          <ChartInnerDiv>
            <Row>
              <Col md={8}>
                <Row>
                  <Col md={4}>
                    <Cont>
                      <LittleTitle>Saving</LittleTitle>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <ChartPercent>62%</ChartPercent>
                        <div>
                          <svg
                            width="8"
                            height="7"
                            viewBox="0 0 8 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.13397 0.500001C3.51887 -0.166666 4.48113 -0.166667 4.86603 0.5L7.4641 5C7.849 5.66667 7.36788 6.5 6.59808 6.5H1.40192C0.632124 6.5 0.150998 5.66667 0.535898 5L3.13397 0.500001Z"
                              fill="#CA4AB7"
                            />
                          </svg>
                          <ChartPercentLittle>10.34%</ChartPercentLittle>
                        </div>
                      </div>
                    </Cont>
                  </Col>
                  <Col md={4}>
                    <Cont>
                      <LittleTitle>Withdrawals</LittleTitle>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <ChartPercent>72%</ChartPercent>
                        <div>
                          <svg
                            width="8"
                            height="7"
                            viewBox="0 0 8 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.13397 0.500001C3.51887 -0.166666 4.48113 -0.166667 4.86603 0.5L7.4641 5C7.849 5.66667 7.36788 6.5 6.59808 6.5H1.40192C0.632124 6.5 0.150998 5.66667 0.535898 5L3.13397 0.500001Z"
                              fill="#CA4AB7"
                            />
                          </svg>
                          <ChartPercentLittle>16.30%</ChartPercentLittle>
                        </div>
                      </div>
                    </Cont>
                  </Col>
                  <Col md={4}>
                    <Cont>
                      <LittleTitle>Contributions</LittleTitle>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <ChartPercent>52%</ChartPercent>
                        <div>
                          <svg
                            width="8"
                            height="7"
                            viewBox="0 0 8 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.13397 0.500001C3.51887 -0.166666 4.48113 -0.166667 4.86603 0.5L7.4641 5C7.849 5.66667 7.36788 6.5 6.59808 6.5H1.40192C0.632124 6.5 0.150998 5.66667 0.535898 5L3.13397 0.500001Z"
                              fill="#CA4AB7"
                            />
                          </svg>
                          <ChartPercentLittle>6.10%</ChartPercentLittle>
                        </div>
                      </div>
                    </Cont>
                  </Col>
                </Row>
              </Col>

              <Col md={4}>
                <div>
                  <Row>
                    <Col md={3}></Col>
                    <Col
                      md={9}
                      style={{ display: 'flex', flexDirection: 'column' }}
                    >
                      <SearchContainer>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M6.66667 2C4.08934 2 2 4.08934 2 6.66667C2 9.244 4.08934 11.3333 6.66667 11.3333C7.71489 11.3333 8.68239 10.9877 9.46145 10.4043L12.1953 13.1381C12.4557 13.3985 12.8778 13.3985 13.1381 13.1381C13.3985 12.8778 13.3985 12.4557 13.1381 12.1953L10.4043 9.46145C10.9877 8.68239 11.3333 7.71489 11.3333 6.66667C11.3333 4.08934 9.244 2 6.66667 2ZM3.33333 6.66667C3.33333 4.82572 4.82572 3.33333 6.66667 3.33333C8.50762 3.33333 10 4.82572 10 6.66667C10 8.50762 8.50762 10 6.66667 10C4.82572 10 3.33333 8.50762 3.33333 6.66667Z"
                            fill="#64748B"
                          />
                        </svg>
                        <StyledInput
                          type="text"
                          placeholder="Search"
                          style={{ width: '175px', border: 'none' }}
                        />
                      </SearchContainer>
                      <FilterDiv>
                        <Monthly>
                          <option value="Montly">Monthly</option>
                          <option value="Weekly">Weekly</option>
                          <option value="Montly">Daily</option>
                        </Monthly>
                        <Filter>
                          <svg
                            width="21"
                            height="20"
                            viewBox="0 0 21 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.3923 4.16667H3.58333C3.1231 4.16667 2.75 4.53976 2.75 5C2.75 5.46024 3.1231 5.83333 3.58333 5.83333H10.3923C10.7355 6.80433 11.6615 7.5 12.75 7.5C13.8385 7.5 14.7645 6.80433 15.1077 5.83333H16.9167C17.3769 5.83333 17.75 5.46024 17.75 5C17.75 4.53976 17.3769 4.16667 16.9167 4.16667H15.1077C14.7645 3.19567 13.8385 2.5 12.75 2.5C11.6615 2.5 10.7355 3.19567 10.3923 4.16667ZM11.9167 5C11.9167 4.53976 12.2898 4.16667 12.75 4.16667C13.2102 4.16667 13.5833 4.53976 13.5833 5C13.5833 5.46024 13.2102 5.83333 12.75 5.83333C12.2898 5.83333 11.9167 5.46024 11.9167 5Z"
                              fill="#64748B"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6.91667 7.5C8.00518 7.5 8.93121 8.19567 9.27441 9.16667H16.9167C17.3769 9.16667 17.75 9.53976 17.75 10C17.75 10.4602 17.3769 10.8333 16.9167 10.8333H9.27441C8.93121 11.8043 8.00518 12.5 6.91667 12.5C5.82815 12.5 4.90212 11.8043 4.55892 10.8333H3.58333C3.1231 10.8333 2.75 10.4602 2.75 10C2.75 9.53976 3.1231 9.16667 3.58333 9.16667H4.55892C4.90212 8.19567 5.82815 7.5 6.91667 7.5ZM6.91667 9.16667C7.3769 9.16667 7.75 9.53976 7.75 10C7.75 10.4602 7.3769 10.8333 6.91667 10.8333C6.45643 10.8333 6.08333 10.4602 6.08333 10C6.08333 9.53976 6.45643 9.16667 6.91667 9.16667Z"
                              fill="#64748B"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M3.58333 14.1667C3.1231 14.1667 2.75 14.5398 2.75 15C2.75 15.4602 3.1231 15.8333 3.58333 15.8333H12.0589C12.4021 16.8043 13.3282 17.5 14.4167 17.5C15.5052 17.5 16.4312 16.8043 16.7744 15.8333H16.9167C17.3769 15.8333 17.75 15.4602 17.75 15C17.75 14.5398 17.3769 14.1667 16.9167 14.1667H16.7744C16.4312 13.1957 15.5052 12.5 14.4167 12.5C13.3282 12.5 12.4021 13.1957 12.0589 14.1667H3.58333ZM15.25 15C15.25 14.5398 14.8769 14.1667 14.4167 14.1667C13.9564 14.1667 13.5833 14.5398 13.5833 15C13.5833 15.4602 13.9564 15.8333 14.4167 15.8333C14.8769 15.8333 15.25 15.4602 15.25 15Z"
                              fill="#64748B"
                            />
                          </svg>
                          Filter
                        </Filter>
                      </FilterDiv>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </ChartInnerDiv>
           <Row>
          <SWCBarChart/>
        </Row>
        </BackG>

       
      </Row>
      
    </Container>
  );
};

export default AdminDashBoard;
const Monthly = styled.select`
  height: 36px;
  padding: 8px 12px 8px 12px;
  border-radius: 3px;
  gap: 10px;
  background: #e7eaee;
  border: none;
  cursor:pointer;
`;
const Filter = styled.div`
  height: 36px;
  padding: 8px 12px 8px 12px;
  border-radius: 3px;
  gap: 10px;
  margin-left:1.6em;
  background: #e7eaee;
  border: none;
  cursor:pointer;
`;

const FilterDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledInput = styled.input`
  border: none;
  padding: 5px;

  &:focus {
    border-color: transparent;
    outline: none;
  }
`;
const SearchContainer = styled.div`
  width: 215px;
  height: 40px;
  padding: 4px;
  border-radius: 4px;
  border: 1px;
  gap: 8px;
  border: 1px solid #e7eaee;
  margin-bottom: 0.5em;
`;

const ChartPercentLittle = styled.span`
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  color: #ca4ab7;
`;
const FirstDiv = styled.div`
  width: 100%;
  height: 66px;
  padding: 8px;
  border-radius: 8px;
  border: 0px 0px 0px 4px;
  gap: 8px;
  border-left: 4px solid #f38fe5;
  margin-bottom: 3em;
  margin-left: 2em;
  margin-top: 1em;
`;
const Title = styled.span`
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: #101828;
`;
const Number = styled.p`
  font-family: Inter;
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  color: #101828;
  margin-top: 0.5em;
`;
const BackG = styled.div`
  width: 95%;
  margin-top: 0.2em;
  left: 310px;
  padding: 24px;
  gap: 24px;
  background: white;
  margin-left: 2em;
`;

const Cont = styled.div`
height: 52px;
gap: 12px;
border-left: 3px solid #E7EAEE;
padding-left:5px;
width:160px;
}

`;
const WelcomeBackJohn1 = styled.b`
  //styleName: Headline Bold - 24;
  font-family: Inter;
  font-size: 24px;
  font-weight: 700;
  line-height: 34px;
  letter-spacing: 0px;
  text-align: left;
  color: #101828;
`;
const EmojiIcon1 = styled.img`
  position: relative;
  width: 1rem;
  height: 1.12rem;
  object-fit: cover;
`;
const Savi = styled.div`
  position: relative;
  letter-spacing: 0.15px;
  line-height: 140%;
  color: black;
`;
const EmojiParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  font-size: var(--text-md-medium-size);
  color: var(--grey-400);
`;
const WelcomeBackJohnDoeParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xs);
  font-size: var(--headline-medium-24-size);
  margin-top: 1em;
`;
const SecondDiv = styled.div`
  width: 222px;
  height: 177px;
  padding: 16px;
  border-radius: 16px;
  border: 1px;
  gap: 16px;
  border: 1px solid #eaecf0;
  box-shadow: 0px 4px 8px 0px #0000000a;
`;

const ImgIcon = styled.div`
width: 32px;
height: 32px;
gap: 150px
border:solid;
`;
const InnerFrame = styled.div`
  width: 233px;
  height: 53px;
  gap: 4px;
  margin-top: 0.7em;
`;
const BoldNumber = styled.div`
  font-family: Inter;
  font-size: 24px;
  font-weight: 600;
  line-height: 29px;
  letter-spacing: 0em;
  color: #101828;
  margin-top: 0.2em;
`;
const LastFrame = styled.div`
  width: 192px;
  height: 28px;
  gap: 8px;
  margin-top: 1.2em;
`;
const Percent = styled.span`
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.005em;
  text-align: center;
  color: #eb5757;
`;
const PercentGreen = styled.span`
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.005em;
  text-align: center;
  color: green;
`;
const Des = styled.span`
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: center;
  color: #98a2b3;
`;
const ChartTitleDiv = styled.div`
  width: 100%;
  height: 40px;
  gap: 8px;
  margin: auto;
`;
const Divider = styled.hr`
  width: 857px;
  border: 1px;
  border: 1px solid #e7eaee;
  margin-top: 2em;
  margin-bottom: 2em;
`;

const Tit = styled.b`
  font-size: 24px;
  font-weight: 900;
  line-height: 33px;
  letter-spacing: 0em;
  text-align: left;
  color: #191d23;
`;
const Para = styled.span`
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;
  color: #64748b;
`;

const ChartInnerDiv = styled.div`
  // width: 857px;
  // height: 104px;
  padding: 8px;
  gap: 8px;
`;
const LittleTitle = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  color: #64748b;
`;
const ChartPercent = styled.span`
  font-size: 22px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0em;
  color: #191d23;
`;
const SendParent = styled.div`
  border-radius: var(--br-base);
  border: 1px solid var(--white);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs) var(--padding-5xs);
  gap: var(--gap-5xs);
  cursor: pointer;
`;
const FrameParent2 = styled.div`
  width: 16.25rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const FrameDiv = styled.div`
  border-radius: var(--br-base);
  background-color: var(--savi-500);
  box-shadow: var(--bottom-card-shadow-light);
  border: 1px solid var(--grey-200);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-base);
  gap: var(--gap-5xs);
  color: var(--white);
`;
const SafeLock = styled.div`
  position: relative;
  line-height: 1.25rem;
`;
const AddContainer = styled.div`
  align-self: stretch;
  border-radius: var(--br-base);
  background-color: var(--primary-color);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-9xs) var(--padding-13xl) var(--padding-9xs)
    var(--padding-base);
  color: var(--white);
`;
const Group = styled.div`
  border-radius: var(--br-81xl);
  background-color: var(--white);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs) var(--padding-3xs);
`;
const ThanLastMonth5 = styled.div`
  position: relative;
  font-size: var(--input-small-medium-size);
  line-height: 1.25rem;
  color: var(--grey-400);
  display: none;
`;
const DepositAndWithdraw3 = styled.div`
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const FrameParent3 = styled.div`
  border-radius: var(--br-base);
  background-color: var(--white);
  box-shadow: var(--bottom-card-shadow-light);
  border: 1px solid var(--grey-200);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-base) var(--padding-5xs) var(--padding-base)
    var(--padding-base);
  gap: var(--gap-5xs);
`;
const ArrowIcon6 = styled.img`
  position: relative;
  width: 1rem;
  height: 1rem;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: contain;
`;
const FrameParent6 = styled.div`
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-base);
  color: var(--main-primary-color);
`;

const FrameParent7 = styled.div`
  border-radius: var(--br-base);
  background-color: var(--white);
  box-shadow: var(--bottom-card-shadow-light);
  border: 1px solid var(--grey-200);
  box-sizing: border-box;
  width: 11.75rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-base) var(--padding-5xs) var(--padding-base)
    var(--padding-base);
  gap: var(--gap-5xs);
`;
// const FrameGroup = styled.div`
//   background-color: var(--grey-50);
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: flex-start;
//   padding: var(--padding-5xl) 1.06rem;
//   gap: 2.25rem;
//   text-align: center;
//   font-size: var(--text-md-medium-size);
// `;
const TotalIncome = styled.div`
  position: relative;
  line-height: 1.25rem;
  text-transform: uppercase;
`;
const ChevronDownIcon2 = styled.img`
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const TotalIncomeParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const Last12Months1 = styled.div`
  position: relative;
  letter-spacing: 0.01em;
  font-weight: 500;
`;
const Last12MonthsParent = styled.div`
  border-radius: var(--br-5xs);
  border: 1px solid var(--grey-500);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-11xs) var(--padding-9xs);
  color: #475569;
`;
const FrameParent11 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const Div8 = styled.div`
  position: absolute;
  top: 0%;
  left: -62.94%;
  letter-spacing: 0.01em;
  line-height: 0.65rem;
  font-weight: 500;
`;
const LineChartAxesLabel = styled.div`
  position: relative;
  width: 0.89rem;
  height: 0.65rem;
`;
const Feb = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  letter-spacing: 0.01em;
  line-height: 0.65rem;
  font-weight: 500;
`;
const YaxesLabels = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;
const GridLine6 = styled.div`
  position: relative;
  background-color: var(--gray-200);
  width: 36.56rem;
  height: 0.04rem;
  z-index: 0;
`;
const GridLine7 = styled.div`
  position: relative;
  background-color: var(--gray-200);
  width: 36.56rem;
  height: 0.04rem;
  z-index: 1;
`;
const GridLine8 = styled.div`
  position: relative;
  background-color: var(--gray-200);
  width: 36.56rem;
  height: 0.04rem;
  z-index: 2;
`;
const GridLine9 = styled.div`
  position: relative;
  background-color: var(--gray-200);
  width: 36.56rem;
  height: 0.04rem;
  z-index: 3;
`;
const GridLine10 = styled.div`
  position: relative;
  background-color: var(--gray-200);
  width: 36.56rem;
  height: 0.04rem;
  z-index: 4;
`;
const GridLine11 = styled.div`
  position: relative;
  background-color: var(--gray-200);
  width: 36.56rem;
  height: 0.04rem;
  z-index: 5;
`;
const DefaultLineChart1 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 46.8px);
  left: 0rem;
  width: 36.56rem;
  height: 6.22rem;
  object-fit: cover;
  z-index: 6;
`;
const DefaultLineChartGradient1 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 46.8px);
  left: 0rem;
  width: 36.56rem;
  height: 6.22rem;
  object-fit: cover;
  z-index: 7;
`;
const PointerIcon46 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 8.17rem;
  left: 0.2rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 8;
`;
const PointerIcon47 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 5.2rem;
  left: 3.49rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 9;
`;
const PointerIcon48 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 4.71rem;
  left: 6.7rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 10;
`;
const PointerIcon49 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 6.62rem;
  left: 9.91rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 11;
`;
const PointerIcon50 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 2.32rem;
  left: 13.28rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 12;
`;
const PointerIcon51 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 5.48rem;
  left: 16.45rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 13;
`;
const PointerIcon52 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 6.91rem;
  left: 19.66rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 14;
`;
const PointerIcon53 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 5.61rem;
  left: 22.99rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 15;
`;
const PointerIcon54 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 3.05rem;
  left: 26.2rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 16;
`;
const PointerIcon55 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 3.74rem;
  left: 29.41rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 17;
`;
const PointerIcon56 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 5.04rem;
  left: 32.7rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 18;
`;
const PointerIcon57 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 4.92rem;
  left: 35.95rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 19;
`;
const SecondaryChartIcon = styled.img`
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 34.45px);
  left: 0rem;
  width: 36.56rem;
  height: 4.67rem;
  object-fit: cover;
  display: none;
  z-index: 20;
`;
const SecondaryChartGradient1 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 34.45px);
  left: 0rem;
  width: 36.56rem;
  height: 4.67rem;
  object-fit: cover;
  display: none;
  z-index: 21;
`;
const PointerIcon58 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 7.56rem;
  left: 0.2rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 22;
`;
const PointerIcon59 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 6.42rem;
  left: 3.49rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 23;
`;
const PointerIcon60 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 4.47rem;
  left: 6.7rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 24;
`;
const PointerIcon61 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 3.17rem;
  left: 9.91rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 25;
`;
const PointerIcon62 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 6.54rem;
  left: 13.28rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 26;
`;
const PointerIcon63 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 5.73rem;
  left: 16.45rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 27;
`;
const PointerIcon64 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 5.61rem;
  left: 19.66rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 28;
`;
const PointerIcon65 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 7.52rem;
  left: 22.99rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 29;
`;
const PointerIcon66 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 6.58rem;
  left: 26.2rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 30;
`;
const PointerIcon67 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 7.64rem;
  left: 29.41rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 31;
`;
const PointerIcon68 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 6.18rem;
  left: 32.7rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 32;
`;
const PointerIcon69 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 4.14rem;
  left: 35.95rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 33;
`;

const SecondaryContent = styled.div`
  position: relative;
  letter-spacing: 0.01em;
  line-height: 0.65rem;
  font-weight: 500;
  color: var(--gray-300);
  display: none;
  z-index: 1;
`;
const CommandIcon4 = styled.img`
  position: relative;
  width: 0.49rem;
  height: 0.49rem;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const Shortcut = styled.div`
  border-radius: var(--br-11xs-3);
  background-color: var(--white-white-15);
  height: 0.65rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0rem 0.16rem;
  box-sizing: border-box;
`;
const ShortcutHints = styled.div`
  align-self: stretch;
  display: none;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-10xs-6);
  z-index: 2;
`;
const LegendIndicator8 = styled.div`
  position: relative;
  border-radius: 50%;
  background-color: var(--blue-500);
  width: 0.33rem;
  height: 0.33rem;
`;
const K = styled.div`
  position: relative;
  letter-spacing: 0.01em;
  line-height: 0.65rem;
  font-weight: 500;
`;
const Indicator1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-10xs-6);
  z-index: 3;
`;
const LegendIndicator9 = styled.div`
  position: relative;
  border-radius: 50%;
  background-color: var(--teal-500);
  width: 0.33rem;
  height: 0.33rem;
`;
const Indicator2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-10xs-6);
  z-index: 4;
`;
const TopBeakIcon4 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: -0.41rem;
  left: calc(50% - 8.1px);
  border-radius: 0.65px;
  width: 0.98rem;
  height: 0.61rem;
  object-fit: cover;
  display: none;
  z-index: 5;
`;
const RightBeakIcon4 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 8.4px);
  right: -1.22rem;
  border-radius: 0.65px;
  width: 0.73rem;
  height: 0.98rem;
  object-fit: contain;
  display: none;
  z-index: 6;
`;
const BottomBeakIcon4 = styled.img`
  position: absolute;
  margin: 0 !important;
  bottom: -1.07rem;
  left: calc(50% - 8.1px);
  border-radius: 0.65px;
  width: 0.98rem;
  height: 0.61rem;
  object-fit: cover;
  display: none;
  z-index: 7;
`;
const LeftBeakIcon4 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 8.4px);
  left: -0.41rem;
  border-radius: 0.65px;
  width: 0.61rem;
  height: 0.98rem;
  object-fit: contain;
  z-index: 8;
`;
const Tooltip1 = styled.div`
  border-radius: var(--br-9xs-9);
  background-color: var(--label-color-light-primary);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0.33rem 0.41rem;
  position: relative;
  gap: var(--gap-10xs-6);
`;
const Tooltips = styled.div`
  margin: 0 !important;
  position: absolute;
  top: 3.13rem;
  left: 24.74rem;
  display: none;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 34;
`;
const OnHoverIndicator1 = styled.div`
  position: absolute;
  margin: 0 !important;
  height: 100%;
  width: 0.11%;
  top: 0.37%;
  right: 34.89%;
  bottom: -0.37%;
  left: 65%;
  background-color: var(--gray-200);
  display: none;
  z-index: 35;
`;
const TopBeakIcon5 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: -0.41rem;
  left: calc(50% - 7.75px);
  border-radius: 0.65px;
  width: 0.98rem;
  height: 0.61rem;
  object-fit: cover;
  display: none;
  z-index: 5;
`;
const RightBeakIcon5 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 8.4px);
  right: -1.24rem;
  border-radius: 0.65px;
  width: 0.73rem;
  height: 0.98rem;
  object-fit: contain;
  display: none;
  z-index: 6;
`;
const BottomBeakIcon5 = styled.img`
  position: absolute;
  margin: 0 !important;
  bottom: -1.07rem;
  left: calc(50% - 7.75px);
  border-radius: 0.65px;
  width: 0.98rem;
  height: 0.61rem;
  object-fit: cover;
  z-index: 7;
`;
const LeftBeakIcon5 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 8.4px);
  left: -0.41rem;
  border-radius: 0.65px;
  width: 0.61rem;
  height: 0.98rem;
  object-fit: contain;
  display: none;
  z-index: 8;
`;
const Tooltips1 = styled.div`
  margin: 0 !important;
  position: absolute;
  top: 1.5rem;
  left: 17.96rem;
  display: none;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 36;
`;
const Title2 = styled.div`
  position: relative;
  font-size: var(--font-size-3xs-1);
  letter-spacing: 0.01em;
  line-height: 0.81rem;
  font-weight: 600;
  color: var(--gray-400);
  display: none;
  z-index: 0;
`;
const LegendIndicator12 = styled.div`
  position: relative;
  border-radius: 50%;
  background-color: var(--primary-color);
  width: 0.33rem;
  height: 0.33rem;
`;
const B = styled.b``;
const K5 = styled.span`
  font-weight: 500;
`;
const K4 = styled.div`
  position: relative;
  letter-spacing: 0.01em;
  line-height: 0.65rem;
`;
const Indicator12 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-10xs-6);
  z-index: 3;
  font-size: var(--input-small-medium-size);
`;
const Indicator22 = styled.div`
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-10xs-6);
  z-index: 4;
`;
const TopBeakIcon6 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: -0.41rem;
  left: calc(50% - 8.15px);
  border-radius: 0.65px;
  width: 0.98rem;
  height: 0.61rem;
  object-fit: cover;
  display: none;
  z-index: 5;
`;
const RightBeakIcon6 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 7.3px);
  right: -0.52rem;
  border-radius: 0.65px;
  width: 0.73rem;
  height: 0.98rem;
  object-fit: contain;
  display: none;
  z-index: 6;
`;
const BottomBeakIcon6 = styled.img`
  position: absolute;
  margin: 0 !important;
  bottom: -1.02rem;
  left: calc(50% - 8.15px);
  border-radius: 0.65px;
  width: 0.98rem;
  height: 0.61rem;
  object-fit: cover;
  z-index: 7;
`;
const LeftBeakIcon6 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 7.3px);
  left: -0.41rem;
  border-radius: 0.65px;
  width: 0.61rem;
  height: 0.98rem;
  object-fit: contain;
  display: none;
  z-index: 8;
`;
const Tooltips2 = styled.div`
  margin: 0 !important;
  position: absolute;
  top: 2.28rem;
  left: 14.75rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 37;
`;
const Title3 = styled.div`
  position: relative;
  font-size: var(--font-size-3xs-1);
  letter-spacing: 0.01em;
  line-height: 0.81rem;
  font-weight: 600;
  color: var(--gray-400);
  z-index: 0;
`;
const SecondaryContent3 = styled.div`
  position: relative;
  letter-spacing: 0.01em;
  line-height: 0.65rem;
  font-weight: 500;
  z-index: 1;
`;
const LegendIndicator14 = styled.div`
  position: relative;
  border-radius: 50%;
  background-color: var(--blue-500);
  width: 0.33rem;
  height: 0.33rem;
  display: none;
`;
const Indicator13 = styled.div`
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-10xs-6);
  z-index: 3;
`;
const LegendIndicator15 = styled.div`
  position: relative;
  border-radius: 50%;
  background-color: var(--teal-500);
  width: 0.33rem;
  height: 0.33rem;
  display: none;
`;
const TopBeakIcon7 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: -0.41rem;
  left: calc(50% - 7.2px);
  border-radius: 0.65px;
  width: 0.98rem;
  height: 0.61rem;
  object-fit: cover;
  display: none;
  z-index: 5;
`;
const RightBeakIcon7 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 7.1px);
  right: -1.21rem;
  border-radius: 0.65px;
  width: 0.73rem;
  height: 0.98rem;
  object-fit: contain;
  display: none;
  z-index: 6;
`;
const BottomBeakIcon7 = styled.img`
  position: absolute;
  margin: 0 !important;
  bottom: -1.04rem;
  left: calc(50% - 7.2px);
  border-radius: 0.65px;
  width: 0.98rem;
  height: 0.61rem;
  object-fit: cover;
  z-index: 7;
`;
const LeftBeakIcon7 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 7.1px);
  left: -0.41rem;
  border-radius: 0.65px;
  width: 0.61rem;
  height: 0.98rem;
  object-fit: contain;
  display: none;
  z-index: 8;
`;
const Tooltips3 = styled.div`
  margin: 0 !important;
  position: absolute;
  top: 4.27rem;
  left: 10.2rem;
  display: none;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 38;
`;
const DefaultStrongLineChart1 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 5.56rem;
  left: 0rem;
  width: 36.56rem;
  height: 2.32rem;
  object-fit: cover;
  display: none;
  z-index: 39;
`;
const PointerIcon70 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 6.38rem;
  left: 1.3rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 40;
`;
const PointerIcon71 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 6.7rem;
  left: 2.97rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 41;
`;
const PointerIcon72 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 6.01rem;
  left: 4.59rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 42;
`;
const PointerIcon73 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 7.23rem;
  left: 6.13rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 43;
`;
const PointerIcon74 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 7.11rem;
  left: 7.68rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 44;
`;
const PointerIcon75 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 6.13rem;
  left: 9.26rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 45;
`;
const PointerIcon76 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 7.11rem;
  left: 10.85rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 46;
`;
const PointerIcon77 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 7.64rem;
  left: 12.43rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 47;
`;
const PointerIcon78 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 6.34rem;
  left: 14.02rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 48;
`;
const PointerIcon79 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 5.93rem;
  left: 15.6rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 49;
`;
const PointerIcon80 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 6.91rem;
  left: 17.18rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 50;
`;
const PointerIcon81 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 5.36rem;
  left: 18.81rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 51;
`;
const PointerIcon82 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 6.38rem;
  left: 20.35rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 52;
`;
const PointerIcon83 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 6.7rem;
  left: 21.94rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 53;
`;
const PointerIcon84 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 6.09rem;
  left: 23.52rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 54;
`;
const PointerIcon85 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 7.23rem;
  left: 25.11rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 55;
`;
const PointerIcon86 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 7.11rem;
  left: 26.69rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 56;
`;
const PointerIcon87 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 6.13rem;
  left: 28.28rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 57;
`;
const PointerIcon88 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 7.11rem;
  left: 29.86rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 58;
`;
const PointerIcon89 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 7.64rem;
  left: 31.44rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 59;
`;
const PointerIcon90 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 6.38rem;
  left: 33.03rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 60;
`;
const PointerIcon91 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 5.93rem;
  left: 34.61rem;
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  display: none;
  z-index: 61;
`;
const SecondaryDashedLineChart1 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 9.03rem;
  left: 0rem;
  width: 36.56rem;
  height: 0.31rem;
  object-fit: cover;
  display: none;
  z-index: 62;
`;
const ChartContent = styled.div`
  height: 10.97rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
  text-align: center;
  font-size: var(--font-size-5xs-8);
  color: var(--white);
`;
const Inline = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-6xs-5);
`;
const Jan = styled.div`
  position: absolute;
  top: 1.92%;
  left: -33.57%;
  letter-spacing: 0.01em;
  line-height: 0.65rem;
`;
const XaxesLabels = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0rem 0rem 0rem 1.3rem;
`;
const LineChart1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-6xs-5);
`;
const LineChart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  color: var(--gray-400);
`;
const FrameParent10 = styled.div`
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xl);
  gap: var(--gap-5xl);
`;
const ViewAll = styled.div`
  position: relative;
  line-height: 1.25rem;
  font-weight: 600;
  color: var(--blue-1);
`;
const UpcomingActivitiesParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8.63rem;
`;
const FrameChild = styled.img`
  border-radius: var(--br-4xs);
  width: 2.5rem;
  height: 2.5rem;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const May2920233 = styled.div`
  position: relative;
  line-height: 1.25rem;
  color: var(--grey-400);
`;
const ContributionToLagosCorpGroParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-12xs);
`;
const Div14 = styled.div`
  position: relative;
  line-height: 1.25rem;
  color: var(--red);
`;
const FrameParent14 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-15xl);
`;
const Divider7 = styled.div`
  position: relative;
  background-color: var(--grey-300);
  width: 22.63rem;
  height: 0.06rem;
`;
const Div15 = styled.div`
  position: relative;
  line-height: 1.25rem;
  color: var(--main-primary-color);
`;
const FrameParent13 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xl);
`;
const FrameParent12 = styled.div`
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-base);
  gap: var(--gap-base);
  text-align: center;
`;
const FrameParent9 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
`;
const RecentlyWrapper = styled.div`
  border-bottom: 1px solid var(--blue-1);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-9xs);
  color: var(--blue-1);
`;
const FrameParent22 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base);
  color: var(--grey-500);
`;
const TransactionHistoryParent = styled.div`
  width: 38.56rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;
const TypeParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 7.5rem;
`;
const ReceiverParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 12.5rem;
  color: var(--grey-500);
`;
const LagosCorpGroupParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-31xl);
`;
const BoladeAdegbeteParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-111xl);
`;
const Divider10 = styled.div`
  position: relative;
  background-color: var(--gray-2001);
  width: 39.19rem;
  height: 0.06rem;
`;
const FrameParent23 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.56rem;
`;
const FrameParent21 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-base);
  gap: var(--gap-base);
`;
const MyGoals = styled.div`
  position: relative;
  letter-spacing: 0.01em;
  line-height: 1.25rem;
  text-transform: uppercase;
`;
const ViewAll1 = styled.div`
  position: relative;
  line-height: 1.25rem;
  color: var(--blue-1);
  cursor: pointer;
`;
const MyGoalsParent = styled.div`
  background-color: var(--white);
  width: 21.75rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;
const AirplaneIcon1 = styled.img`
  position: relative;
  width: 1.88rem;
  height: 1.88rem;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const Span3 = styled.span``;
const Span = styled.span`
  color: var(--color-gainsboro-100);
`;
const AirplaneParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-xs);
`;
const FrameParent26 = styled.div`
  width: 21.13rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-22xl);
`;
// const RectangleDiv = styled.div`
//   position: relative;
//   border-radius: var(--br-5xs);
//   background-color: var(--primary-color);
//   width: 1.25rem;
//   height: 0.25rem;
// `;
// const FrameChild5 = styled.div`
//   position: relative;
//   border-radius: var(--br-5xs);
//   background-color: var(--color-gainsboro-100);
//   width: 1.25rem;
//   height: 0.25rem;
// `;
// const RectangleParent = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: flex-start;
//   justify-content: flex-start;
//   padding: var(--padding-3xs);
//   gap: var(--gap-3xs);
// `;
const FrameParent25 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const FrameParent28 = styled.div`
  width: 21.19rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0rem 4.25rem 0rem 0rem;
  box-sizing: border-box;
  gap: var(--gap-22xl);
`;
const FrameParent27 = styled.div`
  width: 21.19rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const FrameParent30 = styled.div`
  width: 21.75rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-22xl);
`;
const FrameParent24 = styled.div`
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-base);
  gap: var(--gap-base);
`;
