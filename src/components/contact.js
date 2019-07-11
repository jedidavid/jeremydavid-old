import React from "react"
import styled from "styled-components"
import { Flex, Box } from "@rebass/grid"
import { Button } from "./button"
const Container = styled(Box)`
  max-width: 800px;
  h2 {
    padding: 50px 0 20px;
    text-align: center;
    font-size: 2rem;
    font-weight: 600;
  }
  p {
    font-size: 1.1rem;
    margin-bottom: 25px;
    text-align: center;
    color: #404040;
  }
  a {
    text-decoration: none;
    color: #8c43ff;
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

const Contact = () => (
  <React.Fragment>
    <Container>
      <h2>Get in touch</h2>
      <p>
        Got a question? Need a website? Send me a message below or email me at
        <a href="mailto:jeremydb.david@gmail.com">
          {" "}
          jeremydb.david@gmail.com{" "}
        </a>{" "}
        and I'll respond as soon as possible.
      </p>
      <Flex flexWrap="wrap">
        <Box width={1}>
          <form name="contact" method="POST" data-netlify="true">
            <Flex flexDirection="column">
              <Input type="text" name="" id="" placeholder="Name" />
              <Input type="email" name="" id="" placeholder="Email" />
              <Textarea name="" id="" rows="10" placeholder="Message" />
              <Button type="submit">Submit</Button>
            </Flex>
          </form>
        </Box>
      </Flex>
    </Container>
  </React.Fragment>
)

export default Contact
