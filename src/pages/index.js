import React from "react"
import Layout from "../components/layout"
import useInicio from "../hooks/useInicio"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import * as heroCSS from "../css/hero.module.css"
import Encuentra from "../components/encuentra"
import ListadoPropiedades from "../components/listadoPropiedades"

const ImageBackground = styled(BackgroundImage)`
  height: 600px;
`

const Contenido = styled.div`
  max-width: 800px;
  margin: 0 auto;
`
const ContenidoTexto = styled.p`
  text-align: justify;
`

function Index() {
  const inicio = useInicio()
  const { nombre, contenido, imagen } = inicio[0]

  return (
    <Layout>
      <ImageBackground tag="section" fluid={imagen} fadeIn="soft">
        <div className={heroCSS.imagenbg}>
          <h1 className={heroCSS.titulo}>
            Venta de casa y departamentos exclusivos
          </h1>
        </div>
      </ImageBackground>
      <main>
        <Contenido>
          <h1>{nombre}</h1>
          <ContenidoTexto>{contenido}</ContenidoTexto>
        </Contenido>
      </main>
      <Encuentra />
      <ListadoPropiedades />
    </Layout>
  )
}

export default Index
