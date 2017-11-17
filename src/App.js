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
  ResponsiveContainer,
  Legend
} from 'recharts';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSeries: 0,
      multiplikator: 1
    };
  }

  formatCurrency(input) {
    return input.toLocaleString('de-DE', {
      style: 'decimal',
      maximumFractionDigits: 0
    });
  }

  setSelectedSeries(event) {
    this.setState({
      selectedSeries: event.target.value
    });
  }

  setMultiplikator(event) {
    this.setState({
      multiplikator: event.target.value
    });
  }

  render() {
    let multiplikator = [1, 2, 3];
    let currentSeries = data[this.state.selectedSeries].timeSeries.entries;
    let currentSumArray = currentSeries
      .map(i => parseInt(i.v, 10) * this.state.multiplikator)
      .filter(i => !isNaN(i));

    let currentSum = currentSumArray.reduce((i, j) => i + j, 0);
    // Todo: Division by Zero could be possible
    let avarage = currentSum / currentSumArray.length;

    currentSum = this.formatCurrency(currentSum);
    avarage = this.formatCurrency(avarage);

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
            *
            <span className="App-series-info">
              <select
                value={this.state.multiplikator}
                onChange={this.setMultiplikator.bind(this)}
              >
                {multiplikator.map(key => (
                  <option value={key} key={key}>
                    {key}
                  </option>
                ))}
              </select>
            </span>
            <span className="App-series-info">{'Summe: ' + currentSum}</span>
            <span className="App-series-info">{'Avarage: ' + avarage}</span>
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
              <Legend verticalAlign="top" height={36} />
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
