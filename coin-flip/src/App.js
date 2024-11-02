import React, { Component } from 'react';
import Coin from './components/Coin';
import FlipHistory from './components/FlipHistory';
import StatisticsChart from './components/StatisticsChart';
import CoinDesign from './components/CoinDesign';
import Multiplayer from './components/Multiplayer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flips: 0,
      heads: 0,
      tails: 0,
      flipCount: 1,
      autoFlipInterval: null,
    };
    this.handleFlip = this.handleFlip.bind(this);
    this.resetStatistics = this.resetStatistics.bind(this);
    this.handleFlipCountChange = this.handleFlipCountChange.bind(this);
    this.startAutoFlip = this.startAutoFlip.bind(this);
    this.stopAutoFlip = this.stopAutoFlip.bind(this);
  }

  handleFlip(result) {
    // ...
  }

  resetStatistics() {
    this.setState({
      flips: 0,
      heads: 0,
      tails: 0,
    });
  }

  handleFlipCountChange(event) {
    this.setState({ flipCount: parseInt(event.target.value) });
  }

  startAutoFlip() {
    this.setState({
      autoFlipInterval: setInterval(() => {
        for (let i = 0; i < this.state.flipCount; i++) {
          this.flipCoin();
        }
      }, 1000),
    });
  }

  stopAutoFlip() {
    clearInterval(this.state.autoFlipInterval);
    this.setState({ autoFlipInterval: null });
  }  

  render() {
    return (
      <div className="container">
        <Coin />
        <FlipHistory flips={this.state.flips} />
        <StatisticsChart heads={this.state.heads} tails={this.state.tails} />
        <CoinDesign design={this.state.design} handleDesignChange={this.handleDesignChange} />
        <Multiplayer startMultiplayer={this.startMultiplayer} />
      </div>
    );
  }
   
  render() {
    // ...
    
    return (
      <div className="container">
        <Coin
          onFlip={this.handleFlip}
          resetStatistics={this.resetStatistics}
          flipCount={this.state.flipCount}
          handleFlipCountChange={this.handleFlipCountChange}
        />
        <div>
          <button onClick={this.startAutoFlip}>Start Auto Flip</button>
          <button onClick={this.stopAutoFlip}>Stop Auto Flip</button>
          <button onClick={() => window.open('https://twitter.com/share', '_blank')}>
            Share Results
          </button>
        </div>
      </div>
    );
  }
}