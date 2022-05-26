import { graphql, useStaticQuery, Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Navegacion from "./navegacion"

const HeaderStyle = styled.header`
  background: #0d283b;
  padding: 1rem;
`

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  text-align: center;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

function Header() {
  const { logo } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.svg" }) {
        publicURL
      }
    }
  `)

  return (
    <HeaderStyle>
      <Container>
        <Link to="/">
          <img src={logo.publicURL} alt="logo" />
        </Link>
        <Navegacion />
      </Container>
    </HeaderStyle>
  )
}

export default Header
