import { graphql, useStaticQuery } from "gatsby"

function useInicio() {
  const resultado = useStaticQuery(graphql`
    query MyQuery {
      allStrapiPage(filter: { nombre: { eq: "Inicio" } }) {
        nodes {
          id
          nombre
          contenido
          imagen {
            localFile {
              childImageSharp {
                fluid(
                  maxWidth: 1500
                  duotone: {
                    highlight: "#222222"
                    shadow: "#192550"
                    opacity: 30
                  }
                ) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  `)
  return resultado.allStrapiPage.nodes.map(inicio => ({
    nombre: inicio.nombre,
    contenido: inicio.contenido,
    imagen: inicio.imagen.localFile.childImageSharp.fluid,
  }))
}

export default useInicio
