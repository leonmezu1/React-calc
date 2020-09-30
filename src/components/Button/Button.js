import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Button.css';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { wide, color, content } = this.props;
    return (
      <div className={`Button ${wide ? 'zero' : ''} ${color}`}>{content}</div>
    );
  }
}

Button.propTypes = {
  content: PropTypes.string,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  content: 'x',
  color: 'orangered',
  wide: false,
};

export default Button;
