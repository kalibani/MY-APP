// Input Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Input = ({ propsName }) => (
  <div>
    Functional Component (Stateless Component)
  </div>

);

Input.propTypes = {
  propsName: PropTypes.string
};

Input.defaultProps = {
  propsName: ''
};

export default Input;
