// src/components/Multiplayer.js

import React, { Component } from 'react';

class Multiplayer extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.startMultiplayer}>Start Multiplayer</button>
      </div>
    );
  }
}

export default Multiplayer;