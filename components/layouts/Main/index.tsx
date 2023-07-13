import { styled } from 'styled-components';
import React from 'react';
import { font } from '@/styles/font';

const MainPage = () => {
  return (
    <MainLayout>
      <TitleBox>
        <Title />
        <SubTitle />
      </TitleBox>
    </MainLayout>
  );
};

export default MainPage;

const MainLayout = styled.section`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 4%;
`;

const TitleBox = styled.article`
  width: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  ${font.D1};
  font-size: 9rem;
  color: #a3a3a3;
  margin-right: auto;

  &:after {
    content: 'PARK UBIN';
  }
`;

const SubTitle = styled(Title)`
  margin: -4% 0 0 20%;

  &:after {
    content: 'FE DEVELOPER';
  }
`;

const Description = styled.span`
  ${font.H4};
  color: white;

  &:after {
    content: 'PARK UBIN';
  }
`;

// const;
