import React from "react"
import styled from "styled-components"

const Holder = styled.div`
  .text-holder {
    padding: 20px 0 30px;
    h3 {
      font-size: 1.1rem;
      line-height: 1.2;
    }
    p {
      font-size: 0.95rem;
      color: #404040;
    }
  }
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
  transition: 0.3s ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.025);
  }
`

const Works = props => {
  return (
    <Holder>
      <Tile>
        <a href={props.link}>
          <Image src={require(`../images/${props.imgSrc}.jpg`)} alt="" />
        </a>
      </Tile>
      <div className="text-holder">
        <h3>{props.projectName}</h3>
        <p>{props.subtitle}</p>
      </div>
    </Holder>
  )
}

export default Works
