import React, { useEffect, useState } from 'react'

export const App4 = () => {
  
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then( (response) => response.json())
      .then( (data) => setCharacters(data.results) )
      .catch( (error) => console.log(error) )
  }, [])
  
  // useEffect(() => {
  //   const resp = fetch('http://localhost:3001/sum/3/5')
  //     resp.then( (response) => response.json())
  //     .then( (data) => console.log(data) )
  //     .catch( (error) => console.log(error) )
  // }, [])

  return (
    <div>
      <h1>Lista de Personajes</h1>
      <ul>
        {
          characters.filter(character => character.status === 'Dead').map( (character) => (
            <li key={character.id}> {character.name} - {character.status} </li>
          ) )
        }
      </ul>
    </div>
  )
}
