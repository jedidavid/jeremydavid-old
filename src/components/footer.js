import React from "react"
import styled from "styled-components"
import { Box } from "@rebass/grid"
import gatsby from "../images/gatsby.svg"
const Webfooter = styled.footer`
  padding: 50px 0;
  background: #2a2a30;
  color: #fff;
  img {
    width: 80px;
  }
  .copyright {
    font-size: 0.9rem;
  }
  .made {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.85rem;
  }
`
const Container = styled.div`
  margin: 0 auto;
  max-width: 1100px;
`
const Link = styled.a`
  padding: 0 40px;
  font-size: 1rem;
  text-decoration: none;
  color: #fff;
`
const ContentBox = styled(Box)`
  text-align: center;
  .social-icons {
    margin-bottom: 1rem;
  }
`
const Footer = () => (
  <Webfooter>
    <Container>
      <ContentBox width={1}>
        <div className="social-icons">
          <Link href="#">Github</Link>
          <Link href="#">LinkedIn</Link>
          <Link href="#">Email</Link>
        </div>
        <p className="copyright">Copyright © 2019, Jeremy David </p>
        <p className="made">
          Made with <img src={gatsby} alt="" />
        </p>
      </ContentBox>
    </Container>
  </Webfooter>
)

export default Footer
