import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: #262626;
`
const Image = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  transition: 0.4s ease;
`

const Tile = styled.div`
  position: relative;
  overflow: hidden;
  &:hover ${Overlay} {
    opacity: 0.5;
  }
  &:hover ${Image} {
    transform: scale(1.1);
  }
`

const Work = () => (
  <Tile>
    <a href="projects/tach-group">
      <Image src={require("../images/gatsby-astronaut.png")} alt="" />
      <Overlay>
        <p>dasdasd</p>
      </Overlay>
    </a>
  </Tile>
)

export default Work
