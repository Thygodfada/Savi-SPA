import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';
import FirstSection from './LandBody/Section1';
import SecondSection from './LandBody/Section2';
import ThirdSection from './LandBody/Section3';
import FourthSection from './LandBody/Section4';
import FifthSection from './LandBody/Section5';


const Home = (props) => {
  return (
    <>
  <Header/>
  <FirstSection/>
  <SecondSection/>
  <ThirdSection/>
  <FourthSection/>
  <FifthSection/>
  <Footer/>
   </>
  );
};

export default Home;
