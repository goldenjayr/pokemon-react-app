import React from 'react'

export default function PokemonList({ pokemons }) {
    return (
        <div>
            {pokemons.map(pokemon => (
                <div key={pokemon}>{pokemon}</div>
            ))}
        </div>
    )
}
