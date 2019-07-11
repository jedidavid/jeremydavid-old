import React from "react"
import styled from "styled-components"
import { Flex, Box } from "@rebass/grid"
import { SolidButton } from "./button"
import { jumping } from "./animations"
import dev from "../images/code.svg"
import circle from "../images/circle.svg"
const Container = styled.div`
  height: 100vh;
`
const Holder = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 auto;
  height: 100%;
  width: 100%;
  max-width: 1400px;
`
const Tagline = styled.div`
  position: relative;
  z-index: 1;
  h1 {
    font-size: 5rem;
    font-weight: 600;
    line-height: 1.2;
  }
`

const HeroImg = styled.img`
  position: absolute;
  top: 50%;
  right: 0;
  width: 650px;
  transform: translate(0, -50%);
`

const Jump = styled.div`
  position: absolute;
  top: ${props => props.Top || "auto"};
  right: ${props => props.Right || "auto"};
  bottom: ${props => props.Bottom || "auto"};
  left: ${props => props.Left || "auto"};
  animation: ${jumping} 20s ease-in-out 2s infinite alternate;
  animation-delay: 1s;
  transition: all 0.9s ease 5s;
  img {
    width: 30%;
  }
`

const Home = () => (
  <Container>
    <Holder>
      <Flex flexWrap="wrap">
        <Box width={1}>
          <Jump Top="20%" Left="10%">
            <img src={circle} alt="" />
          </Jump>
          <Jump Top="20%" Left="10%">
            <svg height="100" width="100">
              <circle cx="50" cy="50" r="40" fill="#f4f4f4" opacity="0.9" />
            </svg>
          </Jump>
          <Jump Top="10%" Right="0">
            <svg height="100" width="100">
              <circle cx="50" cy="50" r="40" fill="#6c63ff" opacity="0.6" />
            </svg>
          </Jump>
          <Tagline>
            <h1>
              Passion, <br />
              dedication, <br />
              and a lot of coffee.
            </h1>
          </Tagline>
          <SolidButton>View works</SolidButton>
        </Box>
        <Box>
          <HeroImg src={dev} alt="" />
        </Box>
      </Flex>
    </Holder>
  </Container>
)

export default Home
