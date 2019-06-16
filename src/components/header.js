import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"
import styled from "styled-components"
import Burger from "@animated-burgers/burger-slide"
import "@animated-burgers/burger-slide/dist/styles.css"

const Nav = styled.header`
  position: absolute;
  width: 100%;
`
const Logo = styled(Link)`
  font-size: 16px;
  font-family: "Poppins";
  font-weight: 600;
  text-decoration: none;
  text-transform: uppercase;
  color: #000;
  cursor: pointer;
`
const NavContainer = styled.div`
  display: flex;
  padding: 40px 0;
  margin: 0 auto;
  width: 100%;
  max-width: 1600px;
`
const MenuWrapper = styled.div`
  position: relative;
  margin-left: auto;
  z-index: 1;
`
const CustomBurger = styled(Burger)`
  font-size: 8px;
  .burger-lines {
    background-color: #000;
    height: 0.4em;
    border-radius: 0.4em;
    &:before,
    &:after {
      background-color: #000;
      height: 0.4em;
      border-radius: 0.4em;
    }
  }
`
class Header extends Component {
  constructor(props) {
    super(props)
    this.state = { isToggle: false }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(prevState => ({
      isToggle: !prevState.isToggle,
    }))
  }

  render() {
    return (
      <Nav>
        <NavContainer>
          <Logo to="/">jeremy david</Logo>
          <MenuWrapper>
            <CustomBurger
              onClick={this.handleClick}
              isOpen={this.state.isToggle}
            />
          </MenuWrapper>
        </NavContainer>
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
