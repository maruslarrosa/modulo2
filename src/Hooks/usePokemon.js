import { useEffect, useState } from "react"

/**
* @typedef {object} responsePokemon
* @property {object} pokemon Respuesta del server
* @property {function(): void} next poke siguiente
* @property {function(): void} prev poke anterior
*/

/** 
 * @param {number} idPokemon
 * @return {responsePokemon}
 */
export const usePokemon = (idPokemon) => {
    const [pokemon, setPokemon] = useState()
    const [id, setId] = useState(idPokemon)

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => res.json())
            .then(setPokemon)
    }, [id])

    const next = () => setId(id + 1)
    const prev = () => setId(id - 1)

    return { pokemon, next, prev }
}