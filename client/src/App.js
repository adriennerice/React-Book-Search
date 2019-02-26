import React, { Component } from 'react';
import Nav from "./components/Nav";
import Header from "./components/Header";
import Search from "./components/Search";
import Results from "./components/Results";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        <Search />
        <Results />
      </div>
    );
  }
}

export default App;
