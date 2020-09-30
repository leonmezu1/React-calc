import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

import './ButtonPanel.css';

class ButtonPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: {
        One: ['AC', '±', '%', '÷'],
        Two: ['7', '8', '9', '×'],
        Three: ['4', '5', '6', '-'],
        Four: ['1', '2', '3', '+'],
        Five: ['0', '.', '='],
      },
    };
  }

  handleClick = content => {
    const { clickHandler } = this.props;
    return clickHandler(content);
  }

  render() {
    let color;
    let wide = false;
    const operators = ['÷', '×', '-', '+', '='];
    const { groups } = this.state;
    return (
      <div className="ButtonPanel">
        { Object.keys(groups).map(group => (
          <div key={group} className={`Group ${group}`}>
            {
                groups[group].map(item => {
                  color = operators.includes(item) ? '' : 'gray';
                  wide = item === '0';
                  return (
                    <Button
                      key={item}
                      content={item}
                      color={color}
                      wide={wide}
                      onClick={this.handleClick}
                    />
                  );
                })
              }
          </div>
        ))}
      </div>
    );
  }
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func,
};

ButtonPanel.defaultProps = {
  clickHandler: () => {},
};

export default ButtonPanel;
