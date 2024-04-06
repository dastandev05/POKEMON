import React, { useEffect, useState } from "react";
import "./PokemonCard.scss"
const PokemonCard = ({ pokemon }) => {
  const [img, setImg] = useState("");
  async function getImg() {
    const pokemonResponse = await fetch(pokemon.url);
    const pokemonData = await pokemonResponse.json();
    setImg(pokemonData.sprites.other.dream_world.front_default);
  }
  useEffect(() => {
    getImg();
  }, []);
  return <div className="pokemonCard">
    <img src={img} alt="" />
    <p>{pokemon.name}</p>
  </div>;
};

export default PokemonCard;
