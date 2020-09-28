import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const Button = ({ content, type }) => (
  <div className={`Button ${content === '0' ? 'zero' : ''} ${type === 'operator' ? 'orangered' : ''}`}>{content}</div>
);

Button.propTypes = {
  content: PropTypes.string,
  type: PropTypes.string,
};

Button.defaultProps = {
  content: '',
  type: '',
};

export default Button;
