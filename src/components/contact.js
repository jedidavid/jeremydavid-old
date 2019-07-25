import React from "react"
import styled from "styled-components"
import { Flex, Box } from "@rebass/grid"
import Title from "./title"
import Button from "./button"
import Fade from "react-reveal/Fade"
const Container = styled(Box)`
  max-width: 1400px;
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
    &:hover {
      text-decoration: underline;
    }
  }
`
const Input = styled.input`
  display: block;
  padding: 0 20px;
  margin: 0 auto 20px;
  height: 40px;
  width: 100%;
  max-width: 550px;
  border: 1px solid #d8d8d8;
  background: transparent;
  &::placeholder {
    font-size: 0.75rem;
  }
`
const Textarea = styled.textarea`
  display: block;
  padding: 10px 20px 0;
  margin: 0 auto;
  width: 100%;
  max-width: 550px;
  border: 1px solid #d8d8d8;
  background: transparent;
  &::placeholder {
    font-size: 0.75rem;
  }
`
const Image = styled.img`
  max-width: 100%;
  height: auto;
`
Container.defaultProps = {
  mx: "auto",
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
