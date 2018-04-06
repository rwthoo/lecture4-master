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
      //filterationType:'',
    };
  }

//takes name and searches through website below
  searchPokemonCardByName(name) {
    const api = 'https://api.pokemontcg.io/v1/cards?page=1&pageSize=30';
    const apiWithName = api + '&name' + name;
    const apiWithTypes = apiWithName + '&types=' + type;

    this.setState({
      pokemonCards: [],
      pending: true,
      appUsed: true,
    });

    fetch(apiWithName + name)
    .then(response => response.json())
    .then(data => {
      //console.log('boo') would be seen 2nd, fetch can only display once data comes back
        this.setState({
          pending: false,
          pokemonCards: data.cards
        });
      }
    );
  }
  $(document).ready(function(){
    $("#types").on("keyup", function() {
      var types = $(this).val().toLowerCase();
      $("#types").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });

//console.log('yay') would be shown first, while waiting for data, skips and reads down until data is found

// the 2 containers below search and list
// takes a function and passes name through it
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
