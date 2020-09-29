import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const Button = ({ content, color, wide }) => (
  <div className={`Button ${wide === true ? 'zero' : ''} ${color === 'gray' ? 'gray' : ''}`}>{content}</div>
);

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
