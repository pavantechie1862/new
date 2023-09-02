import { createStore, combineReducers } from "redux";
import { listOrdersReducer } from "./Reducers/listOrdersReducer";
import currentUserReducer from "./Reducers/currentUserReducer";

const rootReducer = combineReducers({
  listOrders: listOrdersReducer,
  currentUserInfo: currentUserReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
