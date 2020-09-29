import React from 'react';
import PropTypes from 'prop-types';
import './Display.css';

const Display = ({ currentValue }) => (
  <div className="Display">{currentValue}</div>
);

Display.propTypes = { currentValue: PropTypes.string };

Display.defaultProps = { currentValue: '0' };

export default Display;
