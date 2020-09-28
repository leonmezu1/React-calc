import React from 'react';
import Button from '../Button/Button';
import './ButtonPanel.css';

const ButtonPanel = () => (
  <div className="ButtonPanel">
    <div className="Group One">
      <Button content="AC" />
      <Button content="+-" />
      <Button content="%" />
      <Button content="/" />
    </div>
    <div className="Group Two">
      <Button content="7" />
      <Button content="8" />
      <Button content="9" />
      <Button content="x" />
    </div>
    <div className="Group Three">
      <Button content="4" />
      <Button content="5" />
      <Button content="6" />
      <Button content="-" />
    </div>
    <div className="Group Four">
      <Button content="1" />
      <Button content="2" />
      <Button content="3" />
      <Button content="+" />
    </div>
    <div className="Group Five">
      <Button content="0" />
      <Button content="." />
      <Button content="=" />
    </div>
  </div>
);

export default ButtonPanel;
