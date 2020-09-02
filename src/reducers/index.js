import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import articleReducer from "./articleReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  errors: errorReducer,
  article: articleReducer,
});

export default rootReducer;
