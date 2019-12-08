import React from "react"
import { Container, Row, Col } from "react-awesome-styled-grid"
import mobileImage from "../../images/budget-tracker.png"
import PortfolioItem from "./PortfolioItem"
import { Header2 } from "../Text/Text"

const Portfolio = ({ items }) => {
  return (
    <Container style={{ marginTop: 100 }}>
      <Header2>Portfolio</Header2>
      <Row>
        {items.map(({ node }, id) => {
          const { title, description } = node.frontmatter

          return (
            <Col xs={12} sm={6} key={node.id}>
              <PortfolioItem
                image={mobileImage}
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
  )
}

export default Portfolio
