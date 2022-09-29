import React, { useEffect, useState } from 'react'

export const App = () => {

  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then(response => response.json())
      .then(response => setPokemon(response.results))
  })

  return (
    <div>
      <ul>
        { pokemon.map( (item, index) =>
          <li key={index}>{item.name}</li>
        )}
      </ul>
    </div>
  )
}
