import React, { Component } from 'react';
import Button from '../Button/Button';
import './ButtonPanel.css';

<<<<<<< HEAD
const ButtonPanel = () => (
  <div className="ButtonPanel">
    <div className="Group One">
      <Button content="AC" type="" />
      <Button content="±" type="" />
      <Button content="%" type="" />
      <Button content="÷" type="operator" />
    </div>
    <div className="Group Two">
      <Button content="7" type="" />
      <Button content="8" type="" />
      <Button content="9" type="" />
      <Button content="×" type="operator" />
    </div>
    <div className="Group Three">
      <Button content="4" type="" />
      <Button content="5" type="" />
      <Button content="6" type="" />
      <Button content="-" type="operator" />
    </div>
    <div className="Group Four">
      <Button content="1" type="" />
      <Button content="2" type="" />
      <Button content="3" type="" />
      <Button content="+" type="operator" />
    </div>
    <div className="Group Five">
      <Button content="0" type="" />
      <Button content="." type="" />
      <Button content="=" type="operator" />
    </div>
  </div>
);
=======
class ButtonPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: {
        One: ['AC', '+/-', '%', '÷'],
        Two: ['7', '8', '9', 'X'],
        Three: ['4', '5', '6', '-'],
        Four: ['1', '2', '3', '+'],
        Five: ['0', '.', '='],
      },
    };
  }

  render() {
    const { groups } = this.state;
    return (
      <div className="ButtonPanel">
        { Object.keys(groups).map(group => (
          <div key={group} className={`Group ${group}`}>
            {
              groups[group].map(item => (
                <Button key={item} content={item} />
              ))
            }
          </div>
        ))}
      </div>
    );
  }
}
>>>>>>> milestone-two

export default ButtonPanel;
