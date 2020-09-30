import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Button.css';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }

  render() {
    const {
      wide, color, content, onClick,
    } = this.props;
    return (
      <div
        className={`Button ${wide ? 'zero' : ''} ${color}`}
        onClick={() => onClick(content)}
        role="presentation"
      >
        {content}
      </div>
    );
  }
}

Button.propTypes = {
  content: PropTypes.string,
  color: PropTypes.string,
  wide: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  content: 'x',
  color: 'orangered',
  wide: false,
  onClick: () => {},
};

export default Button;
