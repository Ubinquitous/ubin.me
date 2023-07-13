import { font } from '@/styles/font';
import React from 'react';
import { styled } from 'styled-components';

const Header = () => {
  return (
    <Container>
      <Title></Title>
    </Container>
  );
};

const Container = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  padding-left: 30px;
  position: fixed;
`;

const Title = styled.h1`
  ${font.H5};
  color: white;

  &:after {
    content: 'Ubinquitous';
  }
`;

export default Header;
