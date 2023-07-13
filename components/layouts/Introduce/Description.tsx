import { font } from '@/styles/font';
import React from 'react';
import { styled } from 'styled-components';

const Description = () => {
  return (
    <Container>
      <Title />
      <Paragraph>
        프로그래밍에 흥미를 느끼고 개발자가 되기 위해 온 열정을 불태우는 개발자 지망생입니다.
        <br />
        주로 프론트엔드 분야를 공부하고 있으며, Next.JS를 이용한 개발에 관심이 있습니다.
        <br />
        <br />
        코드 한 줄도 어떻게 작성해야 더욱 효율적이고 가독성이 좋은지에 대해서 깊게 고민합니다.
        <br />
        <br />
        그 외에도 리액트 쿼리, 스토리북 등의 라이브러리와 더불어 Gatsby, Vue, Remix 등의
        <br />
        SPA 프레임워크에도 관심이 있습니다.
        <br />
        <br />
        노션과 슬랙, ZIRA, 깃허브 프로젝트 등의 협업 툴들을 통해 팀원들과 협업을 진행한 경험이 있습니다.
        <br />
        <br />
        따분하고 평범한 인생보다는, 독창적으로 나만의 이야기를 써내려가는 개발자가 되고 싶습니다.
      </Paragraph>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  width: 60%;
  height: 400px;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.h1`
  ${font.H3};
  font-weight: 900;

  &:after {
    content: '나 박우빈은';
  }
`;

const Paragraph = styled.p`
  ${font.p1};
  line-height: 170%;
  margin: auto 0 80px 0;
`;

export default Description;
