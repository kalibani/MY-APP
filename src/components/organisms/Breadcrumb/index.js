// Breadcrumb Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Breadcrumb = ({ propsName }) => (
  <div>
    Functional Component (Stateless Component)
  </div>

);

Breadcrumb.propTypes = {
  propsName: PropTypes.string
};

Breadcrumb.defaultProps = {
  propsName: ''
};

export default Breadcrumb;
