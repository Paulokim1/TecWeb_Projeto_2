import React from "react";
import "./index.css";

export default function pokemonBox(props) {

  return (
    <div className = 'pokemonBoxContainer'>
      <div className='headerPokemonBox'>
        <button className='delete'>X</button>
      </div>

      <div className='bodyPokemonBox'>
        <img className="imagemPokemon" src='logo192.png'></img>
        <div className='infos'>
          <b>Name: </b>
          <b>Type: </b>
          <b>Weakness: </b>
        </div>
      </div>
      
      </div>
  );
}