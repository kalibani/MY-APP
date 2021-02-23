// Dashboard Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Dashboard = ({ propsName }) => (
  <div>
    Functional Component (Stateless Component)
  </div>

);

Dashboard.propTypes = {
  propsName: PropTypes.string
};

Dashboard.defaultProps = {
  propsName: ''
};

export default Dashboard;
