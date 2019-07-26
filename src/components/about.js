import React from "react"
import styled from "styled-components"
import { Flex, Box } from "@rebass/grid"
import Title from "./title"
import Fade from "react-reveal/Fade"
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
  p {
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
    font-size: 2rem;
    color: #202331;
  }
`
Container.defaultProps = {
  mx: "auto",
  px: "15px",
}
const FlexContainer = styled(Flex)`
  max-width: 1200px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  h3 {
    flex: auto;
    padding: 25px 0;
    width: 100%;
    font-size: 1.3rem;
    font-weight: 500;
    color: #7a3997;
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

const About = () => (
  <div id="about" className="section-about">
    <Container>
      <Fade>
        <Title data-num="02">About Me</Title>
        <p>
          Hi, I'm Jeremy. A graduate of Computer Science and currently working
          as a freelance web developer. I am solution oriented and flexible who
          thrives in challenging problems and enjoys working on projects. I am
          passionate about the digital world and constantly learning from new
          technologies to improve my skills.
        </p>
      </Fade>
    </Container>

    <FlexContainer>
      <Fade>
        <h3>Technologies I work with:</h3>
        <img src={require("../images/html5.svg")} alt="" width="45" />
        <img src={require("../images/css.svg")} alt="" width="45" />
        <img src={require("../images/bootstrap.svg")} alt="" width="45" />
        <img src={require("../images/sass.svg")} alt="" width="55" />
        <img src={require("../images/javascript.svg")} alt="" width="75" />
        <img src={require("../images/jquery.svg")} alt="" width="135" />
        <img src={require("../images/react.svg")} alt="" width="115" />
        <img src={require("../images/gatsby.svg")} alt="" width="175" />
        <img src={require("../images/git.svg")} alt="" width="95" />
        <img src={require("../images/php.svg")} alt="" width="75" />
        <img src={require("../images/wordpress.svg")} alt="" width="155" />
        <img src={require("../images/shopify.svg")} alt="" width="155" />
      </Fade>
    </FlexContainer>
  </div>
)

export default About
