import React, { useState, useEffect } from "react"
import styled from "styled-components"
import usePropiedades from "../hooks/usePropiedades"
import Propiedad from "./propiedad"
import * as listadoPropiedadesCSS from "../css/listadoPropiedades.module.css"
import useFiltro from "../hooks/useFiltro"

const Lista = styled.h2`
  margin-top: 5rem;
`

function ListadoPropiedades() {
  const resultado = usePropiedades()
  const [propiedades] = useState(resultado)
  const [filtrado, setFiltrado] = useState([])

  //filtrado de propiedades
  const { FiltroUI, categoria } = useFiltro()

  useEffect(() => {
    if (categoria) {
      const filtro = propiedades.filter(
        propiedad => propiedad.category.nombre === categoria
      )
      setFiltrado(filtro)
    } else {
      setFiltrado(propiedades)
    }
  }, [categoria])

  return (
    <>
      <Lista>Nuestras Propiedades</Lista>
      {FiltroUI()}

      <ul className={listadoPropiedadesCSS.propiedades}>
        {filtrado.map(propiedad => (
          <Propiedad key={propiedad.id} propiedad={propiedad} />
        ))}
      </ul>
    </>
  )
}

export default ListadoPropiedades
