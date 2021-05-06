import { combineReducers } from "redux";
import alert from "./r_alert";
import auth from "./r_auth";

export default combineReducers({
  alert,
  auth,
});
