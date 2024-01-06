import axios from "axios";
import { useState, useEffect } from "react";
import Pokemon from "./Pokemon";
import { PokemonsProps, ResponseProps } from "../types/PokemonType";
import { API_CALL } from "../utils/constants";
import { Button } from "react-bootstrap";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState<PokemonsProps[]>([]);
  const [pokemonFilter, setPokemonFilter] = useState<string>("");

  const getPokemons = async () => {
    const res: { data: ResponseProps } = await axios.get(API_CALL);
    const { results } = res.data;
    setPokemons(results);
  };

  useEffect(() => {
    try {
      getPokemons();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const pokemonToList = pokemons.filter((pokemonCopy) =>
    pokemonCopy.name.toLowerCase().includes(pokemonFilter.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        onChange={(e) => setPokemonFilter(e.target.value)}
        value={pokemonFilter}
        className="filter-bar"
        placeholder="  Search for a Pokemon"
      />
      <section className="d-flex flex-wrap">
        {pokemonToList.map((pokemon: PokemonsProps) => (
          <Pokemon key={pokemon.name} pokemon={pokemon} />
        ))}
      </section>
    </>
  );
};

export default PokemonList;
