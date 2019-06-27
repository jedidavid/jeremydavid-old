import React from "react"
import styled from "styled-components"
import { Flex, Box } from "@rebass/grid"
import Work from "./work"
const Container = styled(Box)`
  max-width: 1100px;
  h2 {
    padding: 50px 0;
    text-align: center;
    font-size: 30px;
    font-family: "Poppins";
    font-weight: 600;
  }
`
Container.defaultProps = {
  mx: "auto",
}

const Works = () => (
  <React.Fragment>
    <Container>
      <h2>Featured works</h2>
      <Flex flexWrap="wrap">
        <Work />
        <Work />
        <Work />
        <Work />
        <Work />
      </Flex>
    </Container>
  </React.Fragment>
)

export default Works
