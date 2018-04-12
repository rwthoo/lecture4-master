import React from 'react';
import { SearchBar } from '../../components';
import './pokemon-search.css';

const types =[
  'Fire'
  'Grass'
  'Water'
];

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
  <div>
    {types.map(type =>(
    <span>
      <Checkbox onChange={props.onPokemonTypeChange}value={type}/> {type}
    //<Checkbox value="Water"/> Water//
  //<Checkbox value="Grass"/> Grass//
</span>
  ))}
  </div>

</div>
);
