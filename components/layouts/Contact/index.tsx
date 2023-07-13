import { font } from '@/styles/font';
import React from 'react';
import { styled } from 'styled-components';
import Gmail from '@/assets/contact/gmail.png';
import CardFront from '@/assets/contact/card_front.png';
import CardBack from '@/assets/contact/card_back.png';
import Image from 'next/image';

const bios = [
  { type: 'INSTA', content: '@ubin._ing', href: 'https://instagram.com/ubin._ing' },
  { type: 'GMAIL', content: 'ubinquitous1', href: 'mailto:ubinquitous1@gmail.com' },
  { type: 'GITHUB', content: 'ubinquitous', href: 'https://github.com/ubinquitous' },
  { type: 'BLOG', content: 'ubin_ing', href: 'https://velog.io/@ubin_ing' },
  { type: 'BOJ', content: 'ubinquitous', href: 'https://solved.ac/profile/ubinquitous' }
];

const Contact = () => {
  const [isDetail, setIsDetail] = React.useState(false);

  const onClickToggleDetail = () => {
    setIsDetail(!isDetail);
  };

  return (
    <Container>
      <BackgroundText />
      <InfomationBox>
        <BioBox>
          <BioTitle>언제든지 편하게 연락해주세요!</BioTitle>
          {bios.map(bio => (
            <Bio key={bio.type}>
              <BioType>{bio.type}</BioType>
              <BioContent href={bio.href} target="_blank">
                <span>{bio.content}</span>
              </BioContent>
            </Bio>
          ))}
        </BioBox>
        <CardBox onClick={onClickToggleDetail}>
          <Email src={Gmail} width={999} height={999} alt="mail" />
          <FrontCard src={isDetail ? CardBack : CardFront} alt="front card" width={999} height={999} />
          <BackCard src={isDetail ? CardFront : CardBack} alt="back card" width={999} height={999} />
        </CardBox>
      </InfomationBox>
    </Container>
  );
};

const Container = styled.aside`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
`;

const BackgroundText = styled.h1`
  position: relative;
  padding-left: 4%;
  ${font.D1};
  font-size: 9rem;
  color: rgba(255, 255, 255, 0.4);

  &:after {
    content: 'Contact';
  }
`;

const InfomationBox = styled.section`
  display: flex;
  position: absolute;
  padding: 8% 0 0 4%;
  width: 100%;
`;

const BioBox = styled.article`
  display: flex;
  flex-direction: column;
`;

const BioTitle = styled.h1`
  ${font.H1};
`;

const Bio = styled.hgroup`
  display: flex;
  gap: 4px;
  align-items: center;
  margin-top: 4%;
`;

const BioType = styled.h2`
  width: 120px;
  ${font.H3};
`;

const BioContent = styled.a`
  text-decoration: none;
  color: white;
  ${font.H4};
  cursor: pointer;
  font-weight: 500;

  &:before {
    content: '| ';
  }

  span {
    margin-left: 10px;
  }
`;

const CardBox = styled(BioBox)`
  justify-content: center;
  position: relative;
`;

const Email = styled(Image)`
  position: absolute;
  width: 240px;
  height: auto;
  right: 120%;
`;

const FrontCard = styled(Image)`
  position: absolute;
  width: 520px;
  height: 300px;
  z-index: 1;
`;

const BackCard = styled(FrontCard)`
  position: absolute;
  top: -8%;
  right: 16%;
  z-index: 0;
`;

export default Contact;
