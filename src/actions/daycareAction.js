import { getAllDaycares } from "../services/daycaresApi";

export const SET_DAYCARES = 'SET_DAYCARES';
export const setDaycares = daycares => ({
  type: SET_DAYCARES,
  payload: daycares
});


export const SET_FILTERS = 'SET_FILTERS';
export const setFilters = filters => ({
  type: SET_FILTERS,
  payload: filters
});

export const fetchDaycares = () => dispatch => {
  getAllDaycares()
    .then(daycares => {
      dispatch(setDaycares(daycares));
    })
};
