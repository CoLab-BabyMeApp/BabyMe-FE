import { getAllDaycares } from "../services/daycaresApi";

export const PREPEND_DAYCARE = 'PREPEND_DAYCARE';
export const prependDaycare = daycare => ({
  type: PREPEND_DAYCARE,
  payload: daycare
});

export const PREPEND_FILTER = 'PREPEND_FILTER';
export const prependFilter = filter => ({
  type: PREPEND_FILTER,
  payload: filter
});

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

export const DELETE_FILTER = 'DELETE_FILTER';

export const fetchDaycares = () => dispatch => {
  getAllDaycares()
    .then(daycares => {
      dispatch(setDaycares(daycares));
    })
};
