import { font } from '@/styles/font';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { BsBrowserEdge, BsGithub } from 'react-icons/bs';
import { styled } from 'styled-components';

interface IProject {
  title: string;
  href: string;
  roles: string[];
  summary: string;
  experiences: string[];
  stacks: string[];
  isDeployed: boolean;
  iframe?: string;
  images: {
    first?: StaticImageData;
    second?: StaticImageData;
    third?: StaticImageData;
  };
}

const ProjectListItem = ({
  title,
  href,
  roles,
  summary,
  experiences,
  stacks,
  iframe,
  isDeployed,
  images
}: IProject) => {
  return (
    <Container>
      <ContentBox>
        <Title>{title}</Title>
        <LinkBox href={href} target="_blank">
          <BsGithub size={24} />
          <LinkText>Github</LinkText>
        </LinkBox>
        {isDeployed && (
          <LinkBox href={iframe} target="_blank">
            <BsBrowserEdge size={24} />
            <LinkText>View</LinkText>
          </LinkBox>
        )}
        <Description>
          <HGroup>
            <Category>📄 ROLE</Category>
            <Content>
              {roles.map(role => (
                <span key={role}>{role}</span>
              ))}
            </Content>
          </HGroup>
          <HGroup>
            <Category>📙 Summary</Category>
            <Content>{summary}</Content>
          </HGroup>
          <HGroup>
            <Category>👨‍💻 Experiences</Category>
            <Content>
              {experiences.map(experience => (
                <span key={experience}>{experience}</span>
              ))}
            </Content>
          </HGroup>
          <HGroup>
            <Category>⚒️ Stack</Category>
            <IconBox>
              {stacks.map(stack => (
                <Icon src={stack} key={stack} />
              ))}
            </IconBox>
          </HGroup>
        </Description>
      </ContentBox>
      <PictureBox>
        {images.first && <PortfolioFirstImage src={images.first} alt="portfolio1" width={999} height={999} />}
        {images.second && <PortfolioSecondImage src={images.second} alt="portfolio2" width={999} height={999} />}
        {images.third && <PortfolioThirdImage src={images.third} alt="portfolio3" width={999} height={999} />}
      </PictureBox>
    </Container>
  );
};

const Container = styled.li`
  display: flex;
  width: 90%;
  padding: 100px 0;
  border-top: 2px solid #d9d9d9;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Title = styled.h1`
  ${font.D1};
`;

const LinkBox = styled.a`
  margin-left: 10px;
  display: flex;
  align-items: center;
  gap: 12px;
  width: fit-content;
  cursor: pointer;
  ${font.p1};
  text-decoration: none;
`;

const LinkText = styled.h3`
  ${font.H5};
  cursor: pointer;
  color: #d9d9d9;
`;

const HGroup = styled.hgroup`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Category = styled.h2`
  ${font.H3};
`;

const Content = styled.p`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  ${font.p1};

  span {
    ${font.p1};

    &:before {
      content: '- ';
    }
  }
`;

const IconBox = styled.div`
  width: 500px;
  flex-wrap: wrap;
  margin-left: 20px;
  display: flex;
  gap: 4px;
`;

const Icon = styled.img`
  width: auto;
  height: 26px;
`;

const PictureBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const PortfolioFirstImage = styled(Image)`
  width: 600px;
  height: 348px;
  position: relative;
  box-shadow: 4px 4px 30px 0 rgba(255, 255, 255, 0.4);
`;

const PortfolioSecondImage = styled(PortfolioFirstImage)`
  margin-top: 36vh;
  right: 9%;
  position: absolute;
`;

const PortfolioThirdImage = styled(PortfolioFirstImage)`
  margin-top: 72vh;
  right: 6%;
  position: absolute;
`;

export default ProjectListItem;
