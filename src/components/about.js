import React from "react"
import styled from "styled-components"
import { Flex, Box } from "@rebass/grid"

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
const FlexContainer = styled(Flex)`
  max-width: 900px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  h3 {
    flex: auto;
    padding: 50px 0;
    width: 100%;
    text-align: center;
    font-size: 28px;
    font-family: "Poppins";
    font-weight: 600;
  }
  img {
    margin: 22px 30px;
    flex: 0 0 auto;
    max-width: 100%;
  }
`
FlexContainer.defaultProps = {
  mx: "auto",
}
const Description = styled.p`
  text-align: justify;
  font-size: 20px;
  line-height: 1.5;
  color: #2d2d43;
`
const About = () => (
  <React.Fragment>
    <Box>
      <Container>
        <h2>About</h2>
        <Description>
          Hi, I'm Jeremy. A graduate of Computer Science and currently working
          as a freelance web developer. I am solution oriented and flexible who
          thrives in challenging problems and enjoys working on projects. I am
          passionate about the digital world and constantly learning from new
          technologies to improve my skills.
        </Description>
      </Container>
    </Box>
    <FlexContainer>
      <h3>Technologies I work with</h3>
      <img src={require("../images/html5.svg")} alt="" width="50" />
      <img src={require("../images/css.svg")} alt="" width="50" />
      <img src={require("../images/bootstrap.svg")} alt="" width="50" />
      <img src={require("../images/sass.svg")} alt="" width="60" />
      <img src={require("../images/javascript.svg")} alt="" width="80" />
      <img src={require("../images/jquery.svg")} alt="" width="140" />
      <img src={require("../images/react.svg")} alt="" width="120" />
      <img src={require("../images/gatsby.svg")} alt="" width="180" />
      <img src={require("../images/git.svg")} alt="" width="100" />
      <img src={require("../images/php.svg")} alt="" width="80" />
      <img src={require("../images/wordpress.svg")} alt="" width="160" />
      <img src={require("../images/shopify.svg")} alt="" width="160" />
    </FlexContainer>
  </React.Fragment>
)

export default About
