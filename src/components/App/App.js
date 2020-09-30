import React, { Component } from 'react';
import ButtonPanel from '../ButtonPannel/ButtonPanel';
import Display from '../Display/Display';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operator: null,
    };
  }

  render() {
    const { total, next, operator } = this.state;
    return (
      <div className="App">
        <Display currentValue={next + total + operator} />
        <ButtonPanel />
      </div>
    );
  }
}

/* CurrentValue must be only next */

export default App;
