import PropTypes from "prop-types"
import React, { Component } from "react"
import { Link } from "gatsby"
import { Flex } from "@rebass/grid"
import styled from "styled-components"
import Burger from "@animated-burgers/burger-slide"
import "@animated-burgers/burger-slide/dist/styles.css"
import { fadeInRight } from "./animations"
import disableScroll from "disable-scroll"

const Nav = styled.header`
  position: absolute;
  width: 100%;
  z-index: 15;
`
const Logo = styled(Link)`
  font-size: 1rem;
  font-family: "Roboto";
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  color: #000;
  cursor: pointer;
  &.active {
    color: #faf9f8;
  }
`

const Container = styled.div`
  padding-top: 40px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media screen and (min-width: 1600px) {
    max-width: 1600px;
  }
`

const MenuWrapper = styled.div`
  position: relative;
  margin-left: auto;
  z-index: 12;
  &.scroll {
    position: fixed;
  }
`
const CustomBurger = styled(Burger)`
  &&& {
    font-size: 8px;
    .burger-lines {
      background-color: #202331;
      height: 0.4em;
      border-radius: 0.4em;
      &:before,
      &:after {
        background-color: #202331;
        height: 0.4em;
        border-radius: 0.4em;
      }
    }
    &.open {
      .burger-lines {
        &:before,
        &:after {
          background-color: #f3f1f0;
        }
      }
    }
  }
`
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 0%;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.35s, visibility 0.35s, height 0.35s;
  overflow: hidden;
  z-index: 3;
  background: #202331;

  &.open {
    opacity: 1;
    visibility: visible;
    height: 100%;

    a {
      animation: ${fadeInRight} 0.5s ease forwards;
      animation-delay: 0.35s;
      &:nth-of-type(2) {
        animation-delay: 0.4s;
      }
      &:nth-of-type(3) {
        animation-delay: 0.45s;
      }
      &:nth-of-type(4) {
        animation-delay: 0.5s;
      }
      &:nth-of-type(5) {
        animation-delay: 0.55s;
      }
    }
  }
`

const MenuOverlay = styled.nav`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  a {
    opacity: 0;
    display: block;
    position: relative;
    font-size: 4rem;
    font-family: "Roboto";
    font-weight: 900;
    color: #f3f1f0;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    &:hover,
    &:focus {
      opacity: 0.75;
    }
  }
`

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = { isToggle: false, isDisabled: false }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const { isDisabled } = this.state

    disableScroll[isDisabled ? "off" : "on"]()

    this.setState(prevState => ({
      isToggle: !prevState.isToggle,
      isDisabled: !isDisabled,
    }))
  }

  render() {
    return (
      <Nav>
        <Container>
          <Flex>
            <Logo to="/" className={this.state.isToggle ? "active" : ""}>
              jeremy david
            </Logo>
            <MenuWrapper>
              <CustomBurger
                onClick={this.handleClick}
                isOpen={this.state.isToggle}
              />
            </MenuWrapper>
            <Overlay className={this.state.isToggle ? "open" : ""}>
              <MenuOverlay>
                <Link to="/" onClick={this.handleClick}>
                  Home
                </Link>
                <a href="#work" onClick={this.handleClick}>
                  Work
                </a>
                <a href="#about" onClick={this.handleClick}>
                  About
                </a>
                <a href="#contact" onClick={this.handleClick}>
                  Contact
                </a>
                <a
                  href={"CV.pdf"}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={this.handleClick}
                >
                  CV
                </a>
              </MenuOverlay>
            </Overlay>
          </Flex>
        </Container>
      </Nav>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
