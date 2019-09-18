import React, { Component } from 'react';
import './App.css';
import Intro from '../Intro';
import 'whatwg-fetch';

class App extends Component {
  state = {
    series: []
  }

  componentDidMount() {
    fetch('http://api.tvmaze.com/singlesearch/shows?q=gear')
    .then(response => response.json())
    .then(json => console.log(json))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TV Series List</h1>
        </header>
        <Intro message="Here you can find all of your most loved series" />
        The length of the series array - {this.state.series.length}
      </div>
    );
  }
}

export default App;
