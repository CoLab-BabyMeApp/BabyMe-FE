import { PREPEND_DAYCARE, SET_DAYCARES, PREPEND_FILTER, SET_FILTERS, DELETE_FILTER } from "../actions/daycareAction";

const initialState = {
  location: [],
  filters: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case PREPEND_DAYCARE:
      return { ...state, location: [action.payload, ...state.location] };
    case PREPEND_FILTER:
      return { ...state, filter: [action.payload, ...state.filter] };
    case SET_DAYCARES:
      return { ...state, location: [action.payload] };
    case SET_FILTERS:
      return { ...state, filters: [action.payload] };
    case DELETE_FILTER:
      return {
        ...state,
        filters: state.filters.filter(daycare => daycare.id !== action.payload)
      };
    default:
      return state;
  }
}
