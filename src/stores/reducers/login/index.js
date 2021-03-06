// login Reducers
// --------------------------------------------------------

import {
  SET_LOADING,
  CLEAR_ERROR,
  SET_ERROR,
  INIT_DATA
} from 'stores/actions/login';

const initialState = {
  isLoading: false,
  error: {}
};

export default (state = initialState, { payload, type }) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: payload
      };
    case SET_ERROR:
      return {
        ...state,
        error: payload
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: {}
      };
    case INIT_DATA:
      return {
        ...initialState
      };
    default:
      return state;
  }
};
