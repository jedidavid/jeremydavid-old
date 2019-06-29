import React from "react"
import styled from "styled-components"
import { Flex, Box } from "@rebass/grid"
import Works from "./works"

const Container = styled(Box)`
  max-width: 1400px;
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

const Work = () => (
  <React.Fragment>
    <Container>
      <h2>Featured works</h2>
      <Flex flexWrap="wrap">
        <Box width={1 / 2}>
          <Works
            projectName="Tach"
            subtitle="Frontend Development"
            img="Tach"
          />
          <Works projectName="Le Septentrion" subtitle="Web Development" />
          <Works projectName="Plentyfull" subtitle="Frontend Development" />
        </Box>
        <Box width={1 / 2}>
          <Works projectName="Cosco" subtitle="Frontend Development" />
          <Works projectName="Fabrik" subtitle="React" />
          <Works projectName="Caticatures" subtitle="Shopify" />
        </Box>
      </Flex>
    </Container>
  </React.Fragment>
)

export default Work
