import React from 'react';
import Button from '../Button/Button';
import './ButtonPanel.css';

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

export default ButtonPanel;
