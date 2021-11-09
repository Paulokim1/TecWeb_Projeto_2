import React from "react";
import "./index.css";
import axios from "axios"
import { useState, useEffect } from "react";

export default function Home(props) {

  const [pokemon, setPokemon] = useState("")

  const DadosAPI = (res) => {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then((res) => setPokemon(res.name));

      return console.log(pokemon)
    }

  const contentChanged = (event) =>{
    setPokemon(event.target.value);
}

  return (
    <div className = 'TeamsContainer'>


      <form className="form-card" onSubmit={DadosAPI}>
            <input
            className="form-card-title"
            type="text"
            name="titulo"
            placeholder="Título"
            value={pokemon}
            onChange={contentChanged}
            />
            <button className="btn" type="submit">Criar</button>
      </form>
      <div> O nome do pokemon é: {pokemon} </div>

    </div>
  );
}