import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const Formulario = styled.form`
  width: 100%;
  display: flex;
  border: 1px solid #e1e1e1;
  max-width: 1200px;
  margin: 2rem auto 0 auto;
`
const Select = styled.select`
  flex: 1;
  padding: 1rem;
  appearance: none;
  border: none;
  outline: none;
`

function useFiltro() {
  const [categoria, setCategoria] = useState("")

  const resultado = useStaticQuery(graphql`
    query {
      allStrapiCategory {
        nodes {
          nombre
          id
        }
      }
    }
  `)

  const categorias = resultado.allStrapiCategory.nodes
  const FiltroUI = () => (
    <Formulario>
      <Select onChange={e => setCategoria(e.target.value)} value={categoria}>
        <option value="">Filtrar</option>
        {categorias.map(opcion => (
          <option key={opcion.id} value={opcion.nombre}>
            {opcion.nombre}
          </option>
        ))}
      </Select>
    </Formulario>
  )

  return { FiltroUI, categoria }
}

export default useFiltro
