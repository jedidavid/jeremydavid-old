import React from "react"
import styled from "styled-components"
import { Flex, Box } from "@rebass/grid"
import Button from "./button"
const Container = styled(Box)`
  max-width: 800px;
  h2 {
    padding: 50px 0;
    text-align: center;
    font-size: 30px;
    font-family: "Poppins";
    font-weight: 600;
  }
  p {
    text-align: center;
  }
`
const Input = styled.input`
  display: block;
  padding: 0 20px;
  margin: 0 auto 20px;
  height: 40px;
  width: 100%;
  max-width: 550px;
`
const Textarea = styled.textarea`
  display: block;
  padding: 0 20px;
  margin: 0 auto;
  width: 100%;
  max-width: 550px;
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
        Got a question? Need a website? send me a message below or email me at
        <a href="mailto:jeremydb.david@gmail.com">
          {" "}
          jeremydb.david@gmail.com{" "}
        </a>{" "}
        and I'll respond as soon as possible.
      </p>
      <Flex flexWrap="wrap">
        <Box width={1}>
          <form name="contact" method="POST" data-netlify="true">
            <Flex flexWrap="wrap">
              <Box width={1}>
                <Input type="text" name="" id="" placeholder="Name" />
                <Input type="email" name="" id="" placeholder="Email" />
                <Textarea name="" id="" rows="10" placeholder="Message" />
                <Button type="submit">Send</Button>
              </Box>
            </Flex>
          </form>
        </Box>
      </Flex>
    </Container>
  </React.Fragment>
)

export default Contact
