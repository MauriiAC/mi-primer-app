import React, { useState } from 'react'
import { Clickeable } from './components/Clickeable/Clickeable'

export const App3 = () => {
  
  const [muestraClickeable, setMuestraClickeable] = useState(true)
  
  return (

    <>
      <h1>Mi tercera App en React</h1>
      {
        muestraClickeable && 
        <Clickeable
          onOutclick = {() => {setMuestraClickeable(false)}}
        />
      }
    </>
  )
}
