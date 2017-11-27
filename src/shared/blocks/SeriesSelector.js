import React from 'react';
import SelectionElement from './SeriesSelector/SelectionElement';
import ExampleOperation from './SeriesSelector/ExampleOperation';

class SeriesSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      multiplikator: 1
    };
  }

  render() {
    return (
      <div className="App-series-selector">
        <SelectionElement changeSeries={this.props.changeSeries} />
        *
        <ExampleOperation selectedSeries={this.props.selectedSeries} />
      </div>
    );
  }
}

export default SeriesSelector;
