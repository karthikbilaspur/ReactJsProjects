// src/components/StatisticsChart.js

import React, { Component } from 'react';
import { PieChart } from 'react-minimal-pie-chart';

class StatisticsChart extends Component {
  render() {
    const { heads, tails } = this.props;

    return (
      <div>
        <PieChart
          data={[
            { title: 'Heads', value: heads, color: '#4CAF50' },
            { title: 'Tails', value: tails, color: '#FF9800' },
          ]}
        />
      </div>
    );
  }
}

export default StatisticsChart;