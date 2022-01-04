import { combineReducers } from "redux";
//import loginReducer from "./login.reducer";//import numberButton from "./numberButton.reducer";
import manualCidReducer from "./manaulCid.reducer";
import notificationReducer from "./notification.reducer";

export default combineReducers({
  manualCidReducer,
  notificationReducer,
});
