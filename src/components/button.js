import styled from "styled-components"

const Button = styled.button`
  align-self: center;
  padding: 0 50px;
  margin: 40px 0;
  height: 50px;
  font-size: 18px;
  color: #8c43ff;
  border: 2px solid #8c43ff;
  border-radius: 28px;
  cursor: pointer;
  transition: 0.3s ease;
  &:hover {
    background: #8c43ff;
    color: #fff;
  }
`
const SolidButton = styled.button`
  align-self: center;
  padding: 0 50px;
  margin: 40px 0;
  height: 50px;
  font-size: 18px;
  color: #fff;
  border-radius: 28px;
  border: 0;
  background-size: 300% 100%;
  background-image: linear-gradient(
    to right,
    #854fee,
    #764ba2,
    #6b8dd6,
    #4458dc
  );
  transition: all 0.4s ease-in-out;

  cursor: pointer;
  &:hover {
    background-position: 100% 0;
    transition: all 0.4s ease-in-out;
  }
`

export { Button, SolidButton }
