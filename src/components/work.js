import React from "react"
import styled from "styled-components"
import { Flex, Box } from "@rebass/grid"
import Title from "./title"
import Works from "./works"
import Fade from "react-reveal/Fade"

const Container = styled(Box)`
  max-width: 1400px;
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
  <div id="work" className="section-work">
    <Container>
      <Fade>
        <Title data-num="01">Featured works</Title>
      </Fade>
      <Flex flexWrap="wrap">
        <LeftBox width={1 / 2}>
          <Fade>
            <Works
              projectName="Caticatures"
              subtitle="Shopify"
              imgSrc="caticatures"
              link="https://caticatures.com/"
            />

            <Works
              projectName="Plentyfull"
              subtitle="Frontend Development"
              imgSrc="plentyfull"
              link="#"
            />
            <Works
              projectName="Le Septentrion"
              subtitle="Frontend Development"
              imgSrc="septentrion"
              link="https://www.septentrion.fr/"
            />
          </Fade>
        </LeftBox>
        <RightBox width={1 / 2}>
          <Fade>
            <Works
              projectName="Panda"
              subtitle="React"
              imgSrc="panda"
              link="https://la-fabrik-panda.netlify.com"
            />
            <Works
              projectName="Tach"
              subtitle="Frontend Development"
              imgSrc="tach"
              link="https://www.tach-group.com"
            />
          </Fade>
        </RightBox>
      </Flex>
    </Container>
  </div>
)

export default Work
