import React from 'react';
import Loadable from 'react-loadable';

import Loader from './Loader';

const LoadingBackground = () => <Loader />;

const Dashboard = Loadable({
  loader: () => import('./Dashboard'),
  loading: LoadingBackground
});

const Login = Loadable({
  loader: () => import('./Login'),
  loading: LoadingBackground
});

export {
  Dashboard,
  Login
};
