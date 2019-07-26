import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { Flex, Box } from "@rebass/grid"
import Button from "./button"
import { jumping } from "./animations"
import dev from "../images/developer1.svg"
import { Link, animateScroll as scroll } from "react-scroll"

const theme = {
  breakpoints: ["62em", "75em"],
}

const Container = styled(Box)`
  display: flex;
  height: 100vh;
  width: 100%;
  @media screen and (min-width: 1450px) {
    max-width: 1400px;
  }

  @media (min-width: 1200px) and (max-width: 1449px) {
    max-width: 1140px;
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    max-width: 960px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    max-width: 720px;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    max-width: 540px;
  }
`

Container.defaultProps = {
  mx: "auto",
  px: "15px",
}
const Row = styled(Flex)`
  position: relative;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 991px) {
    flex-direction: column;
    max-width: 720px;
  }
`
const Tagline = styled.div`
  position: relative;
  z-index: 1;
  h1 {
    font-size: 4.3rem;
    font-weight: 900;
    line-height: 1.2;
    color: #202331;
    @media screen and (min-width: 992px) {
      span {
        display: block;
      }
    }
    @media (min-width: 1200px) and (max-width: 1449px) {
      font-size: 4rem;
    }
    @media (min-width: 992px) and (max-width: 1199px) {
      font-size: 3.3rem;
    }
    @media screen and (max-width: 991px) {
      margin-top: 1em;
      max-width: 720px;
      font-size: 2.5rem;
    }
    @media screen and (max-width: 575px) {
      font-size: 2.4rem;
    }
  }
`

const HeroImg = styled.img`
  max-width: 100%;
  height: auto;
  @media (min-width: 768px) and (max-width: 991px) {
  }
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
    <ThemeProvider theme={theme}>
      <Container>
        <Row>
          <Box width={[1, 1 / 2]} order={[2, 1]}>
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
                <span>Passion, </span>
                <span>dedication, </span>
                <span>and a lot of coffee.</span>
              </h1>
            </Tagline>
            <Link to="work" smooth={true}>
              <Button>View my works</Button>
            </Link>
          </Box>
          <Box width={[1, 1 / 2]} order={[1, 2]}>
            <HeroImg src={dev} alt="" />
          </Box>
        </Row>
      </Container>
    </ThemeProvider>
  </div>
)

export default Home
