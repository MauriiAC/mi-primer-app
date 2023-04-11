import React, { useEffect, useRef, useState } from 'react'
import './App.css'

export const App2 = () => {
  
  const inputRef = useRef()

  const [inputValue, setInputValue] = useState("")
  const [inputValue2, setInputValue2] = useState("")

  console.log('Me estoy leyendo de nuevo')

  useEffect( () => {
    console.log("useEffect 1")
  }, [])

  useEffect( () => {
    console.log("Cambió algún input")
  }, [inputValue, inputValue2])

  useEffect( () => {
    console.log("Cambió el input 2")
  }, [inputValue2])

  const setFocus = ( node ) => {
    alert('Se hizo click!')
    node.focus()
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleInputChange2 = (e) => {
    setInputValue2(e.target.value)
  }

  const inputClassName = inputValue.length < 5 ? "input-red" : "input-green"
  const inputClassName2 = inputValue2.length < 5 ? "input-red" : "input-green"

  return (
    <>
      <h1>Mi segunda App en React!</h1>
      <form action="">
        <input
          className={inputClassName}
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => {handleInputChange(e)}}
        />
        <input
          className={inputClassName2}
          type="text"
          value={inputValue2}
          onChange={(e) => {handleInputChange2(e)}}
        />
      </form>
      <button onClick={() => { setFocus(inputRef.current)}}>
        Click!
      </button>
    </>
  )
}
