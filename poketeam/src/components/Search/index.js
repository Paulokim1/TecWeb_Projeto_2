import React from "react";
import "./index.css";
import axios from "axios"
import { useState, useEffect } from "react";

export default function Home(props) {

  const [pokemon, setPokemon] = useState("")
  const [pokemonType, setPokemonType] = useState("")
  const [searchPokemon, setSearchPokemon] = useState("")
  


  const DadosAPI = (event) => {
    event.preventDefault();
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${searchPokemon}`)
      .then((res) => {
        setPokemon(res.data.name)
        setPokemonType(res.data.types[0].type.name)
        axios.post('http://localhost:8000/api/notes/', {'title':pokemon,'content':pokemonType})
      })
  ;}

  const searchChanged = (event) =>{
    setSearchPokemon(event.target.value);
}

  return (
    <div className = 'TeamsContainer'>
      <form className="form-card" onSubmit={DadosAPI}>
            <input
            className="form-card-title"
            type="text"
            name="titulo"
            placeholder="Título"
            value={searchPokemon}
            onChange={searchChanged}
            />
            <button className="btn" type="submit">Criar</button>
      </form>
      <div> O nome do pokemon é: {pokemon} </div>
      <div> O tipo do pokemon é: {pokemonType} </div>

    </div>
  );
}