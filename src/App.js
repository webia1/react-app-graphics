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

    console.log(currentSeries);

    const xdata = [
      { name: 'Page A', uv: 4000 },
      { name: 'Page B', uv: 3000 },
      { name: 'Page C', uv: 2000 },
      { name: 'Page D', uv: 2780 },
      { name: 'Page E', uv: 1890 },
      { name: 'Page F', uv: 2390 },
      { name: 'Page G', uv: 3490 }
    ];

    var message = 'Selected Index: ' + this.state.selectedSeries;
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
            {message}
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
              <Area
                type="monotone"
                dataKey="v"
                stackId="1"
                stroke="#8884d8"
                fill="#8884d8"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
}

export default App;
