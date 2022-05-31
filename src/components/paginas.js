import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import Layout from "./layout"
import ListadoPropiedades from "./listadoPropiedades"

const ContenidoPagina = styled.div`
  max-width: 1200%;
  margin: 0 auto;
  width: 95%;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 5rem;
  }
`

export const data = graphql`
  query ($id: String!) {
    allStrapiPage(filter: { id: { eq: $id } }) {
      nodes {
        id
        nombre
        contenido
        imagen {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 1200)
            }
          }
        }
      }
    }
  }
`
function Paginas({ data }) {
  const { nombre, contenido } = data.allStrapiPage.nodes[0]
  const { localFile } = data.allStrapiPage.nodes[0].imagen

  return (
    <Layout>
      <main className="contenedor">
        <h1>{nombre}</h1>
        <ContenidoPagina>
          <GatsbyImage
            image={getImage(localFile.childImageSharp.gatsbyImageData)}
            layout="fixed"
            alt="propiedad"
          />
          <p>{contenido}</p>
        </ContenidoPagina>
      </main>
      {nombre === "Propiedades" && <ListadoPropiedades />}
    </Layout>
  )
}

export default Paginas
