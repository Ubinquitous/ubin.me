import { font } from '@/styles/font';
import React from 'react';
import { styled } from 'styled-components';

const Footer = () => {
  return (
    <Container>
      <Copyright />
    </Container>
  );
};

const Container = styled.footer`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Copyright = styled.h1`
  width: 94%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-top: 3px solid #d9d9d9;
  ${font.H5};

  &:after {
    content: '©2023 ubinquitous. All Rights reserved.';
  }
`;

export default Footer;
