import React from "react"
import styled from "styled-components"
import { Flex, Box } from "@rebass/grid"
import Title from "./title"
import Button from "./button"
import Fade from "react-reveal/Fade"
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
  a {
    text-decoration: none;
    color: #7a3997;
    &:hover,
    &:focus {
      text-decoration: underline;
    }
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
const Input = styled.input`
  display: block;
  align-self: center;
  padding: 0 20px;
  margin: 0 0 20px;
  height: 40px;
  border: 1px solid #d8d8d8;
  background: transparent;
  &::placeholder {
    font-size: 0.75rem;
  }
  @media screen and (min-width: 768px) {
    width: 100%;
    max-width: 550px;
  }
`
const Textarea = styled.textarea`
  display: block;
  align-self: center;
  padding: 10px 20px 0;
  margin: 0;
  border: 1px solid #d8d8d8;
  background: transparent;
  &::placeholder {
    font-size: 0.75rem;
  }
  @media screen and (min-width: 768px) {
    width: 100%;
    max-width: 550px;
  }
`

Container.defaultProps = {
  mx: "auto",
  px: "15px",
}

const FlexWrapper = styled(Flex)`
  margin: 2.5em auto;
  width: 100%;
  max-width: 1200px;
`
const Contact = () => (
  <div id="contact" className="section-contact">
    <Container>
      <Fade>
        <Title data-num="03">Get in Touch</Title>
        <p>
          Got a question? Need a website? Send me a message below or email me at
          <a href="mailto:jeremydb.david@gmail.com">
            {" "}
            jeremydb.david@gmail.com{" "}
          </a>{" "}
          and I'll respond as soon as possible.
        </p>
      </Fade>
      <FlexWrapper flexWrap="wrap">
        <Box width={1}>
          <Fade>
            <form name="contact" method="POST" data-netlify="true">
              <Flex flexDirection="column">
                <Input type="text" name="" id="" placeholder="Name" />
                <Input type="email" name="" id="" placeholder="Email" />
                <Textarea name="" id="" rows="10" placeholder="Message" />
                <Button type="submit">Submit</Button>
              </Flex>
            </form>
          </Fade>
        </Box>
      </FlexWrapper>
    </Container>
  </div>
)

export default Contact
