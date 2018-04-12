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
      pokemonType:[],
    };
  }

//takes name and searches through website below
  searchPokemonCardByName(name) {
    const api = 'https://api.pokemontcg.io/v1/cards?page=1&pageSize=30';
    const pokemonTypes = this.state.pokemonTypes;

    //do something to get Fire|water|wind
    var pokemonTypesString = pokemonTypes.join('|');


    this.setState({
      pokemonCards: [],
      pending: true,
      appUsed: true,
    });

    fetch(api + name + '&types=' + pokemonTypesString)
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

//filters through current pokemon types with new checkbox options
handlePokemonTypeChange(e){
  const currentTypes =this.state.pokemonTypes;
  if(e.target.checked){
  const newTypes =currentTypes.concat(e.target.value);
  this.setState({pokemonTypes: newTypes})
}else {
  const newTypes =c urrentTypes.filter(type => type!==e.target.value);
  this.setState({pokemonTypes:newTypes};)
}
}
// the 2 containers below search and list
// takes a function and passes name through it
  render() {
    return (
      <div className="App">
        <div className="App__container">
          <PokemonSearch
            onPokemonTypeChange={(e)=>this.handlePokemonTypeChange(e)}
            search={(pokemonName) => this.searchPokemonCardByName(pokemonName)}/>
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
