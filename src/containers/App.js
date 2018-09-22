import React, { Component } from 'react';
import img from './starwars.jpeg';
import './App.css';
import SearchBox from '../components/SearchBox';
import 'tachyons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="flex justify-around bg-black ">
          <div className="flex items-center ">
            <img src={img} className="App-logo" alt="img" />
          </div>
          <div className="flex items-center ">
            <SearchBox />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
