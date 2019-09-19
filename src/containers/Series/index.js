import React, { Component } from 'react';

class Series extends Component {
  state = {
    series: []
  }

  componentDidMount() {
    fetch('http://api.tvmaze.com/search/shows?q=top-gear')
    .then((response) => response.json())
    .then(json => this.setState({ series: json }))
  }

  render() {
    return (
      <div>
      The length of the series array - {this.state.series.length}
      </div>
    )
  }
}

export default Series;
