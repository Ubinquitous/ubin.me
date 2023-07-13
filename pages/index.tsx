import Header from '@/components/common/Header';
import ScrollText from '@/components/common/ScrollText';
import Activity from '@/components/layouts/Activity';
import Contact from '@/components/layouts/Contact';
import Introduce from '@/components/layouts/Introduce';
import MainPage from '@/components/layouts/Main';
import Project from '@/components/layouts/Project';
import Footer from '@/components/common/Footer';
import React from 'react';
import { styled } from 'styled-components';

const Home = () => {
  return (
    <Container>
      <Header />
      <MainPage />
      <ScrollText content="Frontend Developer " />
      <Introduce />
      <ScrollText content="Frontend Developer " />
      <Activity />
      <ScrollText content="Frontend Developer " />
      <Project />
      <ScrollText content="Frontend Developer " />
      <Contact />
      <ScrollText content="Frontend Developer " />
      <Footer />
    </Container>
  );
};

const Container = styled.main`
  width: 100%;
`;

export default Home;
