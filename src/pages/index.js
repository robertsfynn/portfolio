import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import AboutMe from '../components/AboutMe';
import ContactForm from '../components/ContactForm';
import SEO from '../components/seo';
import Timeline from '../components/Timeline';

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <AboutMe />
      <Timeline />
      <Projects items={data.allMarkdownRemark.edges} />
      <ContactForm />
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: frontmatter___item}) {
      edges {
        node {
          id
          frontmatter {
            title
            description
            previewImage {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default IndexPage;
