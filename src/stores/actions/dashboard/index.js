// dashboard Actions
// --------------------------------------------------------

export const SET_LOADING = 'dashboard/SET_LOADING';
export const CLEAR_ERROR = 'dashboard/CLEAR_ERROR';
export const SET_ERROR = 'dashboard/SET_ERROR';
export const INIT_DATA = 'dashboard/INIT_DATA';

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
