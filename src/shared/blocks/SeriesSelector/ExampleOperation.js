import React from 'react';
import { mktdata as data } from '../../../assets/data/mktdata';
import { formatCurrency } from '../../../shared/helpers/HelperFunctions';

class ExampleOperation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      multiplikator: 1
    };
  }

  setMultiplikator(event) {
    this.setState({
      multiplikator: event.target.value
    });
  }

  render() {
    let multiplikator = [1, 2, 3];
    let currentSeries = data[this.props.selectedSeries].timeSeries.entries;
    let currentSumArray = currentSeries
      .map(i => parseInt(i.v, 10) * this.state.multiplikator)
      .filter(i => !isNaN(i));

    let currentSum = currentSumArray.reduce((i, j) => i + j, 0);
    // Todo: Division by Zero could be possible
    let avarage = currentSum / currentSumArray.length;

    currentSum = formatCurrency(currentSum);
    avarage = formatCurrency(avarage);

    return (
      <span>
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
      </span>
    );
  }
}

export default ExampleOperation;
