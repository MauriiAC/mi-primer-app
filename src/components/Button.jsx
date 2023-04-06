import React from 'react'

const buttonStyles = {
  "border": "solid 3px green",
  "marginTop": "5px"
}

export const Button = ({ cambiaContador, text }) => {
  return (
    <button style={buttonStyles} onClick={cambiaContador}>
      {text}
    </button>
  )
}
