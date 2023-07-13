import { assets, events } from '@/data/activities';
import { font } from '@/styles/font';
import Image from 'next/image';
import React from 'react';
import { styled } from 'styled-components';

const Activity = () => {
  return (
    <Container>
      <BackgroundText />
      <ActivityList>
        {events.map(event => (
          <ActivityListItem key={event.content}>
            {event.content} <small>{event.date}</small>
          </ActivityListItem>
        ))}
      </ActivityList>
      <ActivityImageList>
        {assets.map((asset, index) => (
          <ActivityImageListItem
            key={JSON.stringify(asset)}
            index={index}
            src={asset}
            alt="activity"
            width={999}
            height={999}
          />
        ))}
      </ActivityImageList>
    </Container>
  );
};

const Container = styled.aside`
  width: 100%;
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
    content: 'ACTIVITY';
  }
`;

const ActivityList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: -6%;
  padding-left: 6%;
  gap: 60px;
  position: relative;
`;

const ActivityListItem = styled.li`
  ${font.H1};
  color: white;

  small {
    color: #a3a3a3;
    ${font.H4};
  }
`;

const ActivityImageList = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ActivityImageListItem = styled(Image)<{ index: number }>`
  width: 300px;
  height: auto;
  margin-left: auto;
  margin-right: 6%;
  transform: ${({ index }) => `rotate(${[-20, 20][index % 2]}deg)`};
`;

export default Activity;
