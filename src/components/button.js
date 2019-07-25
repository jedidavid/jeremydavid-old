import styled from "styled-components"

const Button = styled.button`
  align-self: center;
  padding: 0 50px;
  margin: 40px 0;
  height: 50px;
  font-size: 1rem;
  font-family: "Roboto";
  font-weight: 500;
  color: #fff;
  border-radius: 28px;
  border: 0;
  background-color: #7a3997;
  cursor: pointer;
  opacity: 1;
  transition: all 0.3s ease 0s;
  &:hover {
    opacity: 0.75;
  }
`

export default Button
