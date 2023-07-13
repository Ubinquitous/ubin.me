import { font } from '@/styles/font';
import React from 'react';
import { styled } from 'styled-components';

interface ScrollTextProp {
  content: string;
}

const ScrollText = ({ content }: ScrollTextProp) => {
  const textRef = React.useRef<HTMLDivElement>(null);
  const [position, setPosition] = React.useState(0);

  const onScroll = () => {
    setPosition(window.scrollY);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  React.useEffect(() => {
    if (textRef.current) textRef.current.style.left = `${position - 20000}px`;
  }, [position]);

  return (
    <Container>
      <MoveText ref={textRef}>{content.repeat(100)}</MoveText>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  overflow-x: hidden;
`;

const MoveText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;

  white-space: nowrap;
  text-overflow: ellipsis;
  ${font.D1};
  font-size: 13rem;
  color: transparent;
  -webkit-text-stroke: 2px rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
`;

export default ScrollText;
