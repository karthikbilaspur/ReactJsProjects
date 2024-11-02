// src/components/Coin.js

import React, { Component } from 'react';

class Coin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '',
    };
    this.flipCoin = this.flipCoin.bind(this);
  }

  flipCoin() {
    const result = Math.random() < 0.5 ? 'Heads' : 'Tails';
    this.setState({ result });
    this.props.onFlip(result);
  }

  render() {
    return (
      <div>
        <button onClick={this.flipCoin}>Flip Coin</button>
        <p>Result: {this.state.result}</p>
      </div>
    );
  }
}

export default Coin;
