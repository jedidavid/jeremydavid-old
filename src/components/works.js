import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const Holder = styled.div`
  h3 {
    font-size: 28px;
  }
`
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
  width: 100%;
  heigth: 100%;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  &:hover ${Overlay} {
    opacity: 0.5;
  }
  &:hover ${Image} {
    transform: scale(1.1);
  }
`

const Works = props => {
  console.log(props)
  return (
    <Holder>
      <Tile>
        <a href="static/projects/tach-group/index.html">
          <Image src={require(`../images/tach.jpg`)} alt="" />
          <Overlay />
        </a>
      </Tile>
      <h3>{props.projectName}</h3>
      <h4>{props.subtitle}</h4>
    </Holder>
  )
}

export default Works
