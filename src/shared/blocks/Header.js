import React from 'react';
import * as EBIA from '../../assets/img/ebia.png';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img src={EBIA} alt="EBIA" />
        <h3 className="App-title">
          @Webia1 - Simple Graphic App Example - Timeseries
        </h3>
      </div>
    );
  }
}

export default Header;
