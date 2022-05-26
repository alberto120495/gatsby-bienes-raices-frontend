import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  padding-bottom: 3rem;

  @media (min-width: 768px) {
    padding: 0;
    flex-direction: row;
  }
`

const NavLink = styled(Link)`
  color: #fff;
  font-weight: 700;
  text-decoration: none;
  padding: 0.5rem;
  margin-right: 1rem;
  &::last-of-type {
    margin-right: 0;
  }

  &.pagina-actual {
    color: #ffc107;
    border-bottom: 1px solid #ffc107;
  }

  @media (min-width: 768px) {
    padding: 1rem;
  }
`

function Navegacion() {
  return (
    <Nav>
      <NavLink to="/" activeClassName="pagina-actual">
        Inicio
      </NavLink>
      <NavLink to="/propiedades" activeClassName="pagina-actual">
        Propiedades
      </NavLink>
    </Nav>
  )
}

export default Navegacion
