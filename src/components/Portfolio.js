import React from "react"
import { Container, Row, Col } from "react-awesome-styled-grid"
import PortfolioItem from "./PortfolioItem"
import { Header2, Section } from "./Typograhpy"
import { FadeBottom } from "../animations"

const Portfolio = ({ items }) => {
  return (
    <Section id="portfolio">
      <Container>
        <FadeBottom>
          <Header2>Portfolio</Header2>
        </FadeBottom>
        <Row>
          {items.map(({ node }, id) => {
            const { title, description, previewImage } = node.frontmatter

            return (
              <Col xs={12} sm={6} key={node.id}>
                <PortfolioItem
                  image={previewImage.childImageSharp.fluid}
                  item={id}
                  title={title}
                  description={description}
                  slug={node.fields.slug}
                />
              </Col>
            )
          })}
        </Row>
      </Container>
    </Section>
  )
}

export default Portfolio
