import { combineReducers } from 'redux';
import Dashboard from './dashboard';
import Login from './login';

export default combineReducers({
  Login,
  Dashboard
});
