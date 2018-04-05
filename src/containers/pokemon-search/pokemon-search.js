import React from 'react';
import { SearchBar } from '../../components';
import './pokemon-search.css';

export const PokemonSearch = (props) => (
  <div className="pokemon-search">
    <div
      className="pokemon-search__title"
    >
      POKÉ CARDS
    </div>
    <SearchBar
      buttonText="search pokemon"
      placeholder="pokemon name ex. pikachu"
      search={props.search}
    />
  </div>
);
