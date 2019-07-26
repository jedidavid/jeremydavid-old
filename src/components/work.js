import React from "react"
import styled, { ThemeProvider } from "styled-components"

import { Flex, Box } from "@rebass/grid"
import Title from "./title"
import Works from "./works"
import Fade from "react-reveal/Fade"

const theme = {
  breakpoints: ["62em", "75em"],
}

const Container = styled(Box)`
  width: 100%;

  @media screen and (min-width: 1450px) {
    max-width: 1400px;
  }

  @media (min-width: 1200px) and (max-width: 1449px) {
    max-width: 1140px;
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    max-width: 960px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    max-width: 720px;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    max-width: 540px;
  }
`
Container.defaultProps = {
  mx: "auto",
  px: "15px",
}

const LeftBox = styled(Box)`
  padding: 0 25px;
`
const RightBox = styled(Box)`
  padding: 0 25px;
`
const Work = props => (
  <div id="work" className="section-work">
    <ThemeProvider theme={theme}>
      <Container>
        <Fade>
          <Title data-num="01">Featured works</Title>
        </Fade>
        <Flex flexWrap="wrap">
          <LeftBox width={[1, 1 / 2]}>
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
          <RightBox width={[1, 1 / 2]}>
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
    </ThemeProvider>
  </div>
)

export default Work
