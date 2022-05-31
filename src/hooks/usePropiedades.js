import { graphql, useStaticQuery } from "gatsby"

function usePropiedades() {
  const datos = useStaticQuery(graphql`
    query {
      allStrapiProperty {
        nodes {
          nombre
          descripcion {
            data {
              descripcion
            }
          }
          id
          wc
          precio
          estacionamiento
          habitaciones
          imagen {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 600, height: 400)
              }
            }
          }
          category {
            nombre
          }
          agent {
            nombre
            telefono
            email
          }
        }
      }
    }
  `)
  return datos.allStrapiProperty.nodes.map(propiedad => ({
    nombre: propiedad.nombre,
    descripcion: propiedad.descripcion.data.descripcion,
    imagen: propiedad.imagen,
    id: propiedad.id,
    wc: propiedad.wc,
    estacionamiento: propiedad.estacionamiento,
    habitaciones: propiedad.habitaciones,
    agent: propiedad.agent,
    precio: propiedad.precio,
    category: propiedad.category,
  }))
}

export default usePropiedades
