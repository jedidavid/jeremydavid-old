import React from "react"
import styled from "styled-components"
import { Flex, Box } from "@rebass/grid"
import Works from "./works"

const Container = styled(Box)`
  max-width: 1400px;
  h2 {
    padding: 50px 0;
    text-align: center;
    font-size: 2rem;
    font-weight: 600;
  }
`
Container.defaultProps = {
  mx: "auto",
}

const LeftBox = styled(Box)`
  padding: 0 25px;
`
const RightBox = styled(Box)`
  padding: 0 25px;
`
const Work = () => (
  <React.Fragment>
    <Container>
      <h2>Featured works</h2>
      <Flex flexWrap="wrap">
        <LeftBox width={1 / 2}>
          <Works
            projectName="Tach"
            subtitle="Frontend Development"
            imgSrc="tach"
            link="https://www.tach-group.com"
          />
          <Works
            projectName="Le Septentrion"
            subtitle="Web Development"
            imgSrc="septentrion"
            link="https://www.septentrion.fr/"
          />
          <Works
            projectName="Plentyfull"
            subtitle="Web Development"
            imgSrc="plentyfull"
            link="#"
          />
        </LeftBox>
        <RightBox width={1 / 2}>
          <Works
            projectName="Panda"
            subtitle="React"
            imgSrc="panda"
            link="https://la-fabrik-panda.netlify.com"
          />
          <Works
            projectName="Caticatures"
            subtitle="Shopify"
            imgSrc="caticatures"
            link="https://caticatures.com/"
          />
        </RightBox>
      </Flex>
    </Container>
  </React.Fragment>
)

export default Work
