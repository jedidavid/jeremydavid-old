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
const SolidButton = styled(Button)`
  color: #fff;
  border: 0;
  background: linear-gradient(to right, #4458dc 0%, #854fee 100%),
    radial-gradient(circle at top left, #4458dc, #854fee);
  cursor: pointer;
`

export { Button, SolidButton }
