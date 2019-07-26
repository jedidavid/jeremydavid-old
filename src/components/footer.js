import React from "react"
import styled from "styled-components"
import { Box } from "@rebass/grid"
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi"

const Webfooter = styled.footer`
  padding: 50px 0;
  background: #202331;
  color: #f3f1f0;
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
  padding: 0 20px;
  font-size: 1.5rem;
  text-decoration: none;
  color: #f3f1f0;
  transition: all 0.3s ease-in-out;
  &:hover,
  &:focus {
    color: #7c97bf;
  }
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
          <Link href="mailto:jeremydb.david@gmail.com">
            <FiMail />
          </Link>
          <Link href="https://www.linkedin.com/in/jeremydaynieldavid/">
            <FiLinkedin />
          </Link>
          <Link href="https://github.com/jedidavid">
            <FiGithub />
          </Link>
        </div>
        <p className="copyright">Copyright © 2019, Jeremy David </p>
        <p className="made">Made with GatsbyJS</p>
      </ContentBox>
    </Container>
  </Webfooter>
)

export default Footer
