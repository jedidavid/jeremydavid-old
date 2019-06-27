import React from "react"
import styled from "styled-components"
import { Box } from "@rebass/grid"

const Webfooter = styled.footer`
  padding: 75px 0;
  background: #2a2a30;
  color: #fff;
`
const Container = styled.div`
  margin: 0 auto;
  max-width: 1100px;
`
const Link = styled.a`
  padding: 0 40px;
  font-size: 20px;
  text-decoration: none;
  color: #fff;
`

const Footer = () => (
  <Webfooter>
    <Container>
      <Box width={1}>
        <Link href="#">Github</Link>
        <Link href="#">LinkedIn</Link>
        <Link href="#">Email</Link>
      </Box>
      <Box width={1}>
        <p>© 2019 Jeremy David | Built with React &amp; Gatsby</p>
      </Box>
    </Container>
  </Webfooter>
)

export default Footer
