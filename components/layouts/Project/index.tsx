import { font } from '@/styles/font';
import React from 'react';
import { styled } from 'styled-components';
import ProjectListItem from './ProjectListItem';
import projects from '@/data/projects';

const Project = () => {
  return (
    <Container>
      <BackgroundText />
      <ProjectList>
        {projects.map(project => (
          <ProjectListItem key={project.id} {...project} />
        ))}
      </ProjectList>
    </Container>
  );
};

const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const BackgroundText = styled.h1`
  margin: 0 0 32px auto;
  padding-right: 4%;
  width: fit-content;
  ${font.D1};
  font-size: 9rem;
  color: rgba(255, 255, 255, 0.4);

  &:after {
    content: 'PROJECT';
  }
`;

const ProjectList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
`;

export default Project;
