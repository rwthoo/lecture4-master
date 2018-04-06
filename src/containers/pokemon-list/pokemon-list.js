import React from 'react';
import { PokemonCard, Spinner } from '../../components';
import './pokemon-list.css';

export const PokemonList = (props) => (
//if in a pending state, use spinner
  <div className="pokemon-list">
    { props.pending ? <Spinner /> : ''}
    {
//card image
      props.pokemonCards.map(card => (
      <div className="pokemon-list__pokemon-card">
        <PokemonCard
          imageUrl={card.imageUrl}
        />
      </div>
      ))
    }
    {
      //if there are no cards found and not pending state, display message
      (!props.pokemonCards.length && props.appUsed && !props.pending) ?
      <div className="pokemon-list__nothing-found">
        Nothing To Display. Search Again 😓
      </div> :
      ''
    }
  </div>
);
