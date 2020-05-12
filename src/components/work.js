import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from "styled-components"
import { Flex, Box } from "@rebass/grid"
import Title from "./title"
import Works from "./works"

const theme = {
  breakpoints: ["62em", "75em"],
}

const Container = styled(Box)`
  width: 100%;

  @media screen and (min-width: 1450px) {
    max-width: 1400px;
  }

  @media (min-width: 1200px) and (max-width: 1449px) {
    max-width: 1140px;
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    max-width: 960px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    max-width: 720px;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    max-width: 540px;
  }
`
Container.defaultProps = {
  mx: "auto",
  px: "15px",
}

const LeftBox = styled(Box)`
  padding: 0 25px;
`
const RightBox = styled(Box)`
  padding: 0 25px;
`
const Work = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "caticatures.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image2: file(relativePath: { eq: "plentyfull.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image3: file(relativePath: { eq: "septentrion.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image4: file(relativePath: { eq: "panda.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image5: file(relativePath: { eq: "tach.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <div id="work" className="section-work">
      <ThemeProvider theme={theme}>
        <Container>
          <Title data-num="01">Featured works</Title>
          <Flex flexWrap="wrap">
            <LeftBox width={[1, 1 / 2]}>
              <Works
                projectName="Caticatures"
                subtitle="Shopify"
                imgSrc={data.image1.childImageSharp.fluid}
                link="https://caticatures.com/"
              />

              <Works
                projectName="Plentyfull"
                subtitle="Frontend Development"
                imgSrc={data.image2.childImageSharp.fluid}
                link="#"
              />
              <Works
                projectName="Le Septentrion"
                subtitle="Frontend Development"
                imgSrc={data.image3.childImageSharp.fluid}
                link="https://www.septentrion.fr/"
              />
            </LeftBox>
            <RightBox width={[1, 1 / 2]}>
              <Works
                projectName="Panda"
                subtitle="React"
                imgSrc={data.image4.childImageSharp.fluid}
                link="https://la-fabrik-panda.netlify.com"
              />
              <Works
                projectName="Tach"
                subtitle="Frontend Development"
                imgSrc={data.image5.childImageSharp.fluid}
                link="https://www.tach-group.com"
              />
            </RightBox>
          </Flex>
        </Container>
      </ThemeProvider>
    </div>
  )
}

export default Work
