import React from "react"

import SEO from "../components/seo"
import { Link } from "gatsby"
import error from "../images/404.svg"
import styled from "styled-components"
import { Flex, Box } from "@rebass/grid"

const Container = styled(Box)`
  padding: 0 15px;
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  height: 100vh;
`
const Wrapper = styled(Flex)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`

const Home = styled(Link)`
  padding-top: 1.5em;
  text-decoration: none;
  font-size: 2rem;
  font-family: "Roboto";
  font-weight: 700;
  color: #595186;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
`

const NotFoundPage = () => (
  <React.Fragment>
    <SEO title="404: Not found" />
    <Container>
      <Wrapper>
        <img src={error} alt="" />
        <Home to="/">Return to Home</Home>
      </Wrapper>
    </Container>
  </React.Fragment>
)

export default NotFoundPage
