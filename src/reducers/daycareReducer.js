import { SET_DAYCARES, SET_FILTERS } from "../actions/daycareAction";

const initialState = {
  locations: [],
  loading: false,
  error: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_DAYCARES:
      return { ...state, locations: action.payload };
    default:
      return state;
  }
}
