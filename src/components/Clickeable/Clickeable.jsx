import React, { useEffect, useRef } from 'react'
import './Clickeable.css'

export const Clickeable = ({onOutclick}) => {

  const cajaRef = useRef()

  useEffect(()=>{

    const handleClick = (event) => {
      if(cajaRef.current && cajaRef.current.contains(event.target)){
        console.log('Bien hecho!')
      }
      else{
        console.log('Fallaste!')
        onOutclick()
      }
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick);
    }

  }, [onOutclick])

  return (
    <div ref={cajaRef} className='clickeable-container'>
      <p>Haz click dentro de la caja</p>
    </div>
  )
}
