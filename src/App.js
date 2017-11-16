import React, { Component } from 'react';
import EBIA from './assets/img/ebia.png';
import { mktdata as data } from './assets/data/mktdata';
import './App.css';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSeries: 0
    };
  }

  setSelectedSeries(event) {
    this.setState({
      selectedSeries: event.target.value
    });
  }

  render() {
    let currentSeries = data[this.state.selectedSeries].timeSeries.entries;
    let currentSum = currentSeries
      .map(i => parseInt(i.v, 10))
      .filter(i => !isNaN(i))
      .reduce((i, j) => {
        console.log(i, j);
        return i + j;
      }, 0);

    return (
      <div className="App">
        <header className="App-header">
          <img src={EBIA} alt="EBIA" />
          <h1 className="App-title">
            @Webia1 - Simple Graphic App Example - Timeseries
          </h1>
          <div>
            <select
              className="App-selected-series"
              value={this.state.selectedSeries}
              onChange={this.setSelectedSeries.bind(this)}
            >
              {data.map((key, index) => (
                <option value={index} key={key.instrumentId}>
                  {' '}
                  {'InstrumentID: ' + key.instrumentId}{' '}
                </option>
              ))}
            </select>
            <span className="App-series-info">
              {'Selected Index: ' + this.state.selectedSeries}
            </span>
            <span className="App-series-info">{'Summe: ' + currentSum}</span>
          </div>
        </header>
        <div className="chartContainer">
          <ResponsiveContainer width="100%" height={360}>
            <AreaChart
              width={600}
              height={400}
              data={currentSeries}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <XAxis dataKey="d" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <defs>
                <linearGradient id="seriesColor" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#345069" stopOpacity={1} />
                  <stop offset="100%" stopColor="#4BABF4" stopOpacity={0.4} />
                </linearGradient>
              </defs>
              <Area
                activeDot={{
                  stroke: '#EEE',
                  strokeWidth: 3,
                  r: 10,
                  fill: '#2196f3'
                }}
                type="monotone"
                dataKey="v"
                stackId="1"
                stroke="#8884d8"
                fill="url(#seriesColor)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
}

export default App;
