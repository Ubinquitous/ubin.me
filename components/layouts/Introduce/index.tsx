import React from 'react';
import { styled } from 'styled-components';
import CD from './CD';
import Description from './Description';

const Introduce = () => {
  return (
    <Container>
      <CD />
      <Description />
      <BackgroundText />
    </Container>
  );
};

const Container = styled.main`
  width: 100%;
  height: 60vh;
  display: flex;
  align-items: center;
  padding: 0 4%;
  gap: 8%;
`;

const BackgroundText = styled.h1`
  position: absolute;
  right: 4%;
  font-family: 'Libre Baskerville', serif;
  font-size: 8rem;
  color: rgba(255, 255, 255, 0.15);
  text-align: right;

  &:after {
    content: 'What kind of developer am I?';
  }
`;

export default Introduce;
