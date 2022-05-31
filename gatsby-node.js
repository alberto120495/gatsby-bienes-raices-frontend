const urlSlug = require("url-slug")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const resultado = await graphql(`
    query {
      allStrapiPage {
        nodes {
          nombre
          id
        }
      }

      allStrapiProperty {
        nodes {
          nombre
          id
        }
      }
    }
  `)
  if (resultado.errors) {
    reporter.panic(`Error al consultar datos  - ${resultado.errors}`)
  }

  const propiedades = resultado.data.allStrapiProperty.nodes
  const paginas = resultado.data.allStrapiPage.nodes

  //Paginas
  paginas.forEach(pagina => {
    actions.createPage({
      path: urlSlug(pagina.nombre),
      component: require.resolve("./src/components/paginas.js"),
      context: {
        id: pagina.id,
      },
    })
  })

  propiedades.forEach(propiedad => {
    actions.createPage({
      path: urlSlug(propiedad.nombre),
      component: require.resolve("./src/components/propiedades.js"),
      context: {
        id: propiedad.id,
      },
    })
  })
}
