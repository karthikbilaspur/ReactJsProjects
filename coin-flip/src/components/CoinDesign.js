// src/components/CoinDesign.js

import React, { Component } from 'react';

class CoinDesign extends Component {
  render() {
    return (
      <div>
        <select value={this.props.design} onChange={this.props.handleDesignChange}>
          <option value="classic">Classic</option>
          <option value="modern">Modern</option>
          <option value="custom">Custom</option>
        </select>
      </div>
    );
  }
}

export default CoinDesign;