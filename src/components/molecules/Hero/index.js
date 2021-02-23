// Hero Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Hero = ({ propsName }) => (
  <div>
    Functional Component (Stateless Component)
  </div>

);

Hero.propTypes = {
  propsName: PropTypes.string
};

Hero.defaultProps = {
  propsName: ''
};

export default Hero;
