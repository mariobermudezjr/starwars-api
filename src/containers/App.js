import React, { Component } from 'react';
import img from './starwars.jpeg';
import './App.css';
import SearchBox from '../components/SearchBox';
import 'tachyons';
import CardList from '../components/CardList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      isPending: true
    };
  }

  componentDidMount() {
    fetch('https://swapi.co/api/people/1')
      .then(response => response.json())
      .then(data => {
        let peoples = data;
        fetch(data.homeworld)
          .then(response2 => response2.json())
          .then(data2 => {
            peoples.homeworld = data2.name;
            this.setState({ people: [peoples], isPending: false });
          });
      });
  }
  render() {
    const { people, isPending } = this.state;
    console.log(people);
    return isPending ? (
      <h1>Loading.. </h1>
    ) : (
      <div className="App">
        <header className="flex justify-around bg-black ">
          <div className="flex items-center ">
            <img src={img} className="App-logo" alt="img" />
          </div>
          <div className="flex items-center ">
            <SearchBox />
          </div>
        </header>
        <CardList people={people} />
      </div>
    );
  }
}

export default App;
