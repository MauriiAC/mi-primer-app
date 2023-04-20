import React from 'react'
import { WithToggle } from './WithToggle'
import './Button.css'

const buttonStyles = {
  "border": "solid 3px green",
  "marginTop": "5px"
}

const Button = ({ cambiaContador, text, toggle, handleToggle }) => {
  return (
    <button 
      style={buttonStyles} 
      className={toggle ? "active" : "inactive"}
      onClick={() => {
        cambiaContador()
        handleToggle()
      }}>
      {text}
    </button>
  )
}

export const ToggleButton = WithToggle( Button )