import React from "react"
import styled from "styled-components"
import { Flex, Box } from "@rebass/grid"
import Title from "./title"
const Container = styled(Box)`
  width: 100%;
  @media screen and (min-width: 1450px) {
    max-width: 1400px;
  }
  p {
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
    font-size: 2rem;
    color: #202331;
  }

  @media (min-width: 1200px) and (max-width: 1449px) {
    max-width: 1140px;
    p {
      max-width: 1040px;
      font-size: 1.6rem;
    }
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    max-width: 960px;
    p {
      max-width: 860px;
      font-size: 1.6rem;
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {
    max-width: 720px;
    p {
      max-width: 620px;
      font-size: 1.5rem;
    }
  }
  @media (min-width: 576px) and (max-width: 767px) {
    max-width: 540px;
    p {
      max-width: 440px;
      font-size: 1.5rem;
    }
  }
  @media screen and (max-width: 575px) {
    p {
      max-width: 280px;
      font-size: 1.4rem;
    }
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
    max-height: 40px;
  }
  @media (min-width: 1200px) and (max-width: 1449px) {
    max-width: 1040px;
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    max-width: 860px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    max-width: 620px;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    max-width: 440px;
    img {
      margin: 8px 10px;
    }
  }
  @media screen and (max-width: 575px) {
    max-width: 280px;
    justify-content: space-between;
    img {
      margin: 4px 10px;
      max-height: 30px;
    }
  }
`
FlexContainer.defaultProps = {
  mx: "auto",
}

const About = () => (
  <div id="about" className="section-about">
    <Container>
      <Title data-num="02">About Me</Title>
      <p>
        Hi, I'm Jeremy. A graduate of Computer Science and currently working as
        a freelance web developer. I am solution oriented and flexible who
        thrives in challenging problems and enjoys working on projects. I am
        passionate about the digital world and constantly learning from new
        technologies to improve my skills.
      </p>
    </Container>

    <FlexContainer>
      <h3>Technologies I work with:</h3>
      <img src={require("../images/html.svg")} alt="" />
      <img src={require("../images/css.svg")} alt="" />
      <img src={require("../images/javascript.svg")} alt="" />
      <img src={require("../images/sass.svg")} alt="" />
      <img src={require("../images/bootstrap.svg")} alt="" />
      <img src={require("../images/jquery.svg")} alt="" />
      <img src={require("../images/react.svg")} alt="" />
      <img src={require("../images/gatsby.svg")} alt="" />
      <img src={require("../images/git.svg")} alt="" />
      <img src={require("../images/php.svg")} alt="" />
      <img src={require("../images/wordpress.svg")} alt="" />
      <img src={require("../images/shopify.svg")} alt="" />
      <img src={require("../images/nodejs.svg")} alt="" />
      <img src={require("../images/mongodb.svg")} alt="" />
    </FlexContainer>
  </div>
)

export default About
