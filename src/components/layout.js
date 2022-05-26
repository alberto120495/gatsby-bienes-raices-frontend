import React from "react"
import Helmet from "react-helmet"
import { createGlobalStyle } from "styled-components"
import Header from "./header"

const GlobalStyle = createGlobalStyle`
    html{
        font-size:62.5% ;
        box-sizing: border-box;
    }
    *, *:before, *:after {
         box-sizing: inherit;
        }
    body {
        font-size:1.6rem ;
        line-height:2;
        font-family: sans-serif;
    }
    h1,h2,h3{
        margin:0;
        line-height:1.5 ;
    }
    h1,h2{
       text-align:center ;
       font-family:sans-serif ;
       font-weight:300 ;
    }
    h3{
        font-family:sans-serif ;
    }
    ul{
        list-style:none;
        margin:0;
        padding:0;
    }
    .contenedor{
        max-width: 120rem;
        margin: 0 auto;
        width:95% ;
    }
    img{
      max-width:100% ;
    }
`
function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Helmet>
        <title>Bienes Raices Gatsby</title>
        <meta
          name="description"
          content="Sitio web de bienes raices en Gatsby"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          rel="stylesheet"
          as="style"
          crossorigin="anonymous"
        />
      </Helmet>
      <Header />
      {children}
    </>
  )
}

export default Layout
