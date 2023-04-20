import React, { useRef } from 'react'
import './App.css'
import { useForm } from './hooks/useForm'

export const App2 = () => {
  
  const inputRef = useRef()

  const {handleInputChange, form} = useForm({
    nombre: "",
    apellido: "",
    edad: ""
  })

  const setFocus = ( node ) => {
    alert('Se hizo click!')
    node.focus()
  }

  const inputClassName = (name) => {
    return form[name].length < 5 ? "input-red" : "input-green"
  }

  return (
    <>
      <h1>Mi segunda App en React!</h1>
      <form className='user-form'>
        <input
          name='nombre'
          className={inputClassName('nombre')}
          ref={inputRef}
          type="text"
          value={form.nombre}
          onChange={(e) => {handleInputChange(e)}}
        />
        <input
          name='apellido'
          className={inputClassName('apellido')}
          type="text"
          value={form.apellido}
          onChange={(e) => {handleInputChange(e)}}
        />
        <input
          name='edad'
          className={inputClassName('edad')}
          type="number"
          value={form.edad}
          onChange={(e) => {handleInputChange(e)}}
        />
      </form>
      <button onClick={() => { setFocus(inputRef.current)}}>
        Click!
      </button>
    </>
  )
}
