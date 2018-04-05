import React from 'react';
import './pokemon-card.css';

export const PokemonCard = (props) => (
  <img className="pokemon-card" src={props.imageUrl} alt="pokemon card"/>
);
