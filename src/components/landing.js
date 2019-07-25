import React from "react"
import styled from "styled-components"
import { Flex, Box } from "@rebass/grid"
import Button from "./button"
import { jumping } from "./animations"
import dev from "../images/developer1.svg"
import { Link, animateScroll as scroll } from "react-scroll"
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
    font-size: 4.3rem;
    font-weight: 600;
    line-height: 1.2;
    color: #202331;
  }
`

const HeroImg = styled.img`
  max-width: 100%;
  height: auto;
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
  <div className="section-landing">
    <Container>
      <Holder>
        <Flex flexWrap="wrap">
          <Box width={1 / 2}>
            <Jump Top="20%" Left="10%">
              <svg>
                <circle
                  cx="11.5"
                  cy="11.5"
                  r="11.5"
                  fill="#8e94e4"
                  opacity="0.8"
                />
              </svg>
            </Jump>
            <Jump Top="20%" Left="10%">
              <svg height="100" width="100">
                <circle cx="50" cy="50" r="40" fill="#eaeaea" opacity="0.9" />
              </svg>
            </Jump>
            <Jump Top="10%" Right="0">
              <svg height="100" width="100">
                <circle cx="50" cy="50" r="40" fill="#8e94e4" opacity="0.6" />
              </svg>
            </Jump>
            <Tagline>
              <h1>
                Passion, <br />
                dedication, <br />
                and a lot of coffee.
              </h1>
            </Tagline>
            <Link to="work" smooth={true}>
              <Button>View my works</Button>
            </Link>
          </Box>
          <Box width={1 / 2}>
            <HeroImg src={dev} alt="" />
          </Box>
        </Flex>
      </Holder>
    </Container>
  </div>
)

export default Home
