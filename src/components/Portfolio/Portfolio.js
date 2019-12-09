import React from "react"
import { Container, Row, Col } from "react-awesome-styled-grid"
import PortfolioItem from "./PortfolioItem"
import { Header2 } from "../Text/Text"
import { FadeBottom } from "../Animations/Animations"

const Portfolio = ({ items }) => {
  return (
    <FadeBottom>
      <Container>
        <Header2>Portfolio</Header2>
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
    </FadeBottom>
  )
}

export default Portfolio
