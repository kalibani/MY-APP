// Header Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Header = ({ propsName }) => (
  <div>
    Functional Component (Stateless Component)
  </div>

);

Header.propTypes = {
  propsName: PropTypes.string
};

Header.defaultProps = {
  propsName: ''
};

export default Header;
