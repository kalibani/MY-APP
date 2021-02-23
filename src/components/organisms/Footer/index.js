// Footer Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Footer = ({ propsName }) => (
  <div>
    Functional Component (Stateless Component)
  </div>

);

Footer.propTypes = {
  propsName: PropTypes.string
};

Footer.defaultProps = {
  propsName: ''
};

export default Footer;
