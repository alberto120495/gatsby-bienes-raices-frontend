import React from "react"
import Iconos from "./iconos"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import Layout from "./layout"

const Contenido = styled.div`
  max-width: 1200%;
  margin: 0 auto;
  width: 95%;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 5rem;
  }
`

const Sidebar = styled.aside`
  .precio {
    font-size: 2rem;
    color: #75ab00;
  }

  .agente {
    margin-top: 4rem;
    padding: 3rem;
    background-color: #75ab00;
    border-radius: 2rem;
    color: #fff;
  }

  p {
    margin: 0;
  }
`

export const data = graphql`
  query ($id: String!) {
    allStrapiProperty(filter: { id: { eq: $id } }) {
      nodes {
        nombre
        estacionamiento
        wc
        habitaciones
        precio
        agent {
          nombre
          telefono
          email
        }
        descripcion {
          data {
            descripcion
          }
        }
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
function Propiedades({ data }) {
  const { nombre, estacionamiento, wc, habitaciones, precio } =
    data.allStrapiProperty.nodes[0]
  const { localFile } = data.allStrapiProperty.nodes[0].imagen

  const {
    data: { descripcion },
  } = data.allStrapiProperty.nodes[0].descripcion

  const {
    nombre: nombreAgente,
    telefono,
    email,
  } = data.allStrapiProperty.nodes[0].agent

  return (
    <Layout>
      <h1>{nombre}</h1>
      <Contenido>
        <main>
          <GatsbyImage
            image={getImage(localFile.childImageSharp.gatsbyImageData)}
            layout="fixed"
            alt="propiedad"
          />
          <p>{descripcion}</p>
        </main>
        <Sidebar>
          <p className="precio">$ {precio}</p>
          <Iconos
            wc={wc}
            estacionamiento={estacionamiento}
            habitaciones={habitaciones}
          />

          <div className="agente">
            <h2>Vendedor:</h2>
            <p>{nombreAgente}</p>
            <p>{telefono}</p>
            <p>{email}</p>
          </div>
        </Sidebar>
      </Contenido>
    </Layout>
  )
}

export default Propiedades
