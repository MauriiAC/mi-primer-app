import React from 'react'

export const Button = ({ aumentaContador }) => {
  return (
    <button onClick={aumentaContador}>
      +1
    </button>
  )
}
