import React from 'react';
import { mktdata as data } from '../../../assets/data/mktdata';

class SelectionElement extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <select
        className="App-selected-series"
        value={this.props.selectedSeries}
        onChange={this.props.changeSeries}
      >
        {data.map((key, index) => (
          <option value={index} key={key.instrumentId}>
            {' '}
            {'InstrumentID: ' + key.instrumentId}{' '}
          </option>
        ))}
      </select>
    );
  }
}

export default SelectionElement;
