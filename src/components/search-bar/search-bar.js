import React from 'react';
import {Button} from '../button';
import './search-bar.css'

export class SearchBar extends React.Component{
  onSubmitHandler(e){
    e.preventDefault();
    this.props.search(e.target[0].value);
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.onSubmitHandler(e)}>
          <input
            placeholder={this.props.placeholder}
            className="search-bar__input"
           />
          <Button
            type="submit"
            className="search-bar__button"
          >
            {this.props.buttonText || 'search'}
          </Button>
        </form>
      </div>
    );
  }
}
