import React from "react"
import styled from "styled-components"
import { Flex, Box } from "@rebass/grid"
import { jumping, scrolling } from "./animations"
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
    font-family: "Poppins";
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

const Scroll = styled.div`
  position: relative;
  span {
    &.text {
      transform: rotate(-90deg);
      transform-origin: bottom left;
      text-transform: uppercase;
      font-weight: 700;
      color: #000;
      letter-spacing: 1px;
      font-size: 14px;
      line-height: 1;
      vertical-align: top;
    }
    &.scrolldown {
      width: 1px;
      height: 60px;
      position: absolute;
      bottom: 20px;
      left: 0;
      right: 0;
      margin: 0 auto;
      overflow: hidden;
    }
    &.line {
      width: 100%;
      height: 100%;
      display: block;
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 1) 50%,
        rgba(0, 0, 0, 0) 50%
      );
      background-position: 0 -60px;
      background-size: 100% 200%;
      animation: ${scrolling} 2.2s cubic-bezier(0.76, 0, 0.3, 1) forwards
        infinite;
    }
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
        </Box>
        <Box>
          <HeroImg src={dev} alt="" />
        </Box>
      </Flex>
    </Holder>
    <Scroll>
      <span className="scrolldown">
        <span className="line" />
      </span>
      <span className="text">Scroll</span>
    </Scroll>
  </Container>
)

export default Home
