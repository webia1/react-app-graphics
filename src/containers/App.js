import React, { Component } from 'react';
import Header from '../shared/blocks/Header';
import SeriesSelector from '../shared/blocks/SeriesSelector';
import ResponsiveChartContainer from '../components/charts/ResponsiveContainer';
import { mktdata as data } from '../assets/data/mktdata';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSeries: 0,
      multiplikator: 1
    };
  }

  changeSelectedSeries(event) {
    this.setState({
      selectedSeries: event.target.value
    });
  }

  render() {
    let currentSeries = data[this.state.selectedSeries].timeSeries.entries;

    return (
      <div className="App">
        <header className="App-header">
          <Header />
          <SeriesSelector
            selectedSeries={this.state.selectedSeries}
            changeSeries={this.changeSelectedSeries.bind(this)}
          />
        </header>
        <ResponsiveChartContainer data={currentSeries} />
      </div>
    );
  }
}

export default App;
