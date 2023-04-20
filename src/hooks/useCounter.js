import { useState } from "react"

export const useCounter = (valorInicial=10) => {
  
  const [contador, setContador] = useState(valorInicial)
    
  const aumentaContador = (n) => {
    setContador(contador + n)
  }

  const decrementaContador = (n) => {
    setContador(contador - n)
  }

  const restableceContador = () => {
    setContador(valorInicial)
  }
  
  return {
    contador,
    aumentaContador,
    decrementaContador,
    restableceContador
  }
}
