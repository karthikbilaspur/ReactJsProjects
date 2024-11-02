// src/components/FlipHistory.js

import React, { Component } from 'react';

class FlipHistory extends Component {
  render() {
    const { flips } = this.props;

    return (
      <div>
        <h2>Flip History:</h2>
        <ul>
          {flips.map((flip, index) => (
            <li key={index}>{flip.result}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default FlipHistory;