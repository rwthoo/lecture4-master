import React from 'react';
import { PokemonCard, Spinner } from '../../components';
import './pokemon-list.css';

export const PokemonList = (props) => (
  <div className="pokemon-list">
    { props.pending ? <Spinner /> : ''}
    {
      props.pokemonCards.map(card => (
      <div className="pokemon-list__pokemon-card">
        <PokemonCard
          imageUrl={card.imageUrl}
        />
      </div>
      ))
    }
    {
      (!props.pokemonCards.length && props.appUsed && !props.pending) ?
      <div className="pokemon-list__nothing-found">
        Nothing To Display. Search Again 😓
      </div> :
      ''
    }
  </div>
);
