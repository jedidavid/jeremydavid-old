import styled from "styled-components"

const Title = styled.h2`
  position: relative;
  margin-top: 1em;
  margin-bottom: 2.5em;
  text-transform: uppercase;
  font-size: 1.3rem;
  font-weight: 700;
  color: #7a3997;
  &:before {
    content: attr(data-num) ".";
    padding-right: 72px;
  }
  &:after {
    content: "";
    display: block;
    background-color: #7a3997;
    height: 1px;
    margin-top: -1px;
    width: 2em;
    position: absolute;
    top: 50%;
    left: 1.8em;
  }
`
export default Title
