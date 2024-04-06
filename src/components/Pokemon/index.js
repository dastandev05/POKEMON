import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_URL } from "../../API";
import PokemonCard from "./PokemonCard";

const PokemonCards = () => {
  const [pokemons, setPokemons] = useState([]);

  async function getPokemons(URL) {
    try {
      const response = await axios.get(URL);
      setPokemons(response.data.results);
    } catch (error) {
      console.log("Error fetching Pocemons:", error);
    }
  }

  useEffect(() => {
    getPokemons(API_URL);
  }, []);
  return (
    <div className="pokemonCards">
      {pokemons.map((pokemon, idx) => (
        <PokemonCard key={idx} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonCards;
