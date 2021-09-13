import { combineReducers } from "redux";
import daycareReducer from './daycareReducer';

export default combineReducers({
  daycares: daycareReducer
});
