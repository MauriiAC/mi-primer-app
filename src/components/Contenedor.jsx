import React from 'react'

export const Contenedor = ({tituloApp, children}) => {
  

  return (
    <div>
      <h1>{tituloApp}</h1>
      {children}
    </div>
  )
}
