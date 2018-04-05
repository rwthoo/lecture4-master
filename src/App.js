import React, { Component } from 'react';
import { PokemonSearch, PokemonList } from './containers';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pending: false,
      appUsed: false,
      pokemonCards: [],
    };
  }

  searchPokemonCardByName(name) {
    const api = 'https://api.pokemontcg.io/v1/cards?page=1&pageSize=30&name=';

    this.setState({
      pokemonCards: [],
      pending: true,
      appUsed: true,
    });

    fetch(api + name)
    .then(response => response.json())
    .then(data => {
        this.setState({
          pending: false,
          pokemonCards: data.cards
        });
      }
    );
  }

  render() {
    return (
      <div className="App">
        <div className="App__container">
          <PokemonSearch search={(pokemonName) => this.searchPokemonCardByName(pokemonName)}/>
          <PokemonList
            appUsed={this.state.appUsed}
            pending={this.state.pending}
            pokemonCards={this.state.pokemonCards}
          />
        </div>
      </div>
    );
  }
}

export default App;
