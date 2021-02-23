// login Actions
// --------------------------------------------------------

export const SET_LOADING = 'login/SET_LOADING';
export const CLEAR_ERROR = 'login/CLEAR_ERROR';
export const SET_ERROR = 'login/SET_ERROR';
export const INIT_DATA = 'login/INIT_DATA';

export const getData = (payload) => (dispatch, getState) => {
  dispatch({ type: INIT_DATA, payload });
};

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload
});

export const setErrOTP = (payload) => ({
  type: SET_ERROR,
  payload
});

export const clearError = () => ({
  type: CLEAR_ERROR
});
