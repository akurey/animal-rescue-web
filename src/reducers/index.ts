import { combineReducers } from "redux";
import { addressReducer } from "./address/address.reducer";
import { userReducer } from "./user/user.reducer";

const rootReducer = combineReducers({
  address: addressReducer,
  user: userReducer,
});

export default rootReducer;
