import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const Button = ({ content }) => (
  <div className={`Button ${content === '0' ? 'zero' : ''}`}>{content}</div>
);

Button.propTypes = {
  content: PropTypes.string,
};

Button.defaultProps = {
  content: '',
};

export default Button;
