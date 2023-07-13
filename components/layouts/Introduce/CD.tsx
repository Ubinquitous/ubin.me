import Image from 'next/image';
import React from 'react';
import { keyframes, styled } from 'styled-components';
import AlbumBackground from '@/assets/album/album_background.png';
import AlbumCover from '@/assets/album/album_cover.png';
import AlbumDisc from '@/assets/album/album_disc.png';

const CD = () => {
  return (
    <Container>
      <Background src={AlbumBackground} width={400} height={400} alt="background" />
      <Cover src={AlbumCover} width={480} height={440} alt="cover" />
      <Disc src={AlbumDisc} width={400} height={400} alt="disc" />
    </Container>
  );
};

const Container = styled.div`
  width: fit-content;
  height: fit-content;
  position: relative;
  width: 400px;
  height: 400px;
  overflow: hidden;
  box-shadow: 0 0 50px 0 rgba(255, 255, 255, 0.4);
`;

const Background = styled(Image)`
  position: absolute;
`;

const Cover = styled(Image)`
  position: absolute;
  z-index: 1;
  border-radius: 6px;
  width: 442px;
  height: 440px;
  margin: -20px 0 0 -20px;
`;

const RotateAnimation = keyframes`
  from {
	transform:rotate(0deg);
  }
  to {
	transform:rotate(360deg);
  }
`;

const Disc = styled(Image)`
  position: absolute;
  border-radius: 999px;
  box-shadow: 0 0 20px 0 rgba(255, 255, 255, 0.3);
  right: 20px;

  animation-name: ${RotateAnimation};
  animation-timing-function: linear;
  animation-duration: 60s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
`;

export default CD;
