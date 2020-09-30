import React, { Component } from 'react';
import calculate from '../../logic/calculate';
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

  handleClick = content => {
    const { total, next, operator } = calculate(this.state, content);
    this.setState({ total, next, operator });
  }

  render() {
    const { next } = this.state;
    return (
      <div className="App">
        <Display currentValue={next} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
