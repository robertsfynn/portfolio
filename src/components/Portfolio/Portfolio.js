import React from "react"
import { Container, Row, Col } from "react-awesome-styled-grid"
import PortfolioItem from "./PortfolioItem"
import { Header2, Section } from "../Text/Text"
import { FadeBottom, Fade } from "../Animations/Animations"

const Portfolio = ({ items }) => {
  return (
    <Section id="portfolio">
      <Container>
        <FadeBottom>
          <Header2>Portfolio</Header2>
        </FadeBottom>
        <Fade>
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
        </Fade>
      </Container>
    </Section>
  )
}

export default Portfolio
