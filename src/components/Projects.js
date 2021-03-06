import React from 'react';
import { Container, Col } from 'react-awesome-styled-grid';
import ProjectItem from './ProjectItem';
import { Header2, Section, StyledRow } from './Typograhpy';
import { FadeBottom } from '../animations';

const Projects = ({ items }) => {
  return (
    <Section id="projects">
      <Container>
        <FadeBottom>
          <Header2>Projects</Header2>
        </FadeBottom>
        <StyledRow>
          {items.map(({ node }, id) => {
            const { title, description, previewImage } = node.frontmatter;

            return (
              <Col xs={12} sm={6} key={node.id}>
                <ProjectItem
                  image={previewImage.childImageSharp.fluid}
                  item={id}
                  title={title}
                  description={description}
                  slug={node.fields.slug}
                />
              </Col>
            );
          })}
        </StyledRow>
      </Container>
    </Section>
  );
};

export default Projects;
