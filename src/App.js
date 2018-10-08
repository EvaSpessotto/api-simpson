import React, { Component } from 'react';
import './App.css';

import SimpsonQuote from './SimpsonQuote';
import ButtonQuote from './ButtonQuote';

const  sampleQuote = {
     quote: "Shoplifting is a victimless crime, like punching someone in the dark.",
     character: "Nelson Muntz",
     image : "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
     characterDirection : "Left"
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: sampleQuote
    };
  }

  getQuote() {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(response => response.json())
      .then(data => {
        this.setState({
          quote: data[0],
        });
      });
  }

  render() {
    return (
      <div className="App">
        <SimpsonQuote quote={this.state.quote} />
        <ButtonQuote selectQuote={() =>  this.getQuote()} />
      </div>
    );
  }
}

export default App;
