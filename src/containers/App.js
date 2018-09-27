import React, { Component } from 'react';
import img from './starwars.jpeg';
import './App.css';
import SearchBox from '../components/SearchBox';
import 'tachyons';
import CardList from '../components/CardList';
import { defaultSearch } from '../constants/constants';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchField: '',
      people: [],
      isPending: true
    };
  }

  componentDidMount() {
    this.setState({ people: [defaultSearch], isPending: false });
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value, isPending: true });
    if (event.target.value === '') {
      this.setState({ people: [defaultSearch], isPending: false });
    } else {
      fetch(`https://swapi.co/api/people/?search=${event.target.value}`)
        .then(response => response.json())
        .then(data => {
          this.setState({ people: data.results, isPending: false });
        });
    }
  };

  render() {
    const { people, isPending } = this.state;
    return isPending ? (
      <div className="App">
        <header className="flex justify-around bg-black ">
          <div className="flex items-center ">
            <img src={img} className="App-logo" alt="img" />
          </div>
          <div className="flex items-center ">
            <SearchBox searchChange={this.onSearchChange} />
          </div>
        </header>
        <h1>Loading.. </h1>
      </div>
    ) : (
      <div className="App">
        <header className="flex justify-around bg-black ">
          <div className="flex items-center ">
            <img src={img} className="App-logo" alt="img" />
          </div>
          <div className="flex items-center ">
            <SearchBox searchChange={this.onSearchChange} />
          </div>
        </header>
        <CardList people={people} />
      </div>
    );
  }
}

export default App;
