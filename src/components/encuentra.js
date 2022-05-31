import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import * as hero from "../css/hero.module.css"

const ImageBackground = styled(BackgroundImage)`
  height: 300px;
`
function Encuentra() {
  const { imagen } = useStaticQuery(graphql`
    query {
      imagen: file(relativePath: { eq: "encuentra.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <ImageBackground
      tag="section"
      fluid={imagen.childImageSharp.fluid}
      fadeIn="soft"
    >
      <div className={hero.imagenbg}>
        <h1 className={hero.titulo}>Encuentra</h1>
        <p>15 años de experiencia</p>
      </div>
    </ImageBackground>
  )
}

export default Encuentra
