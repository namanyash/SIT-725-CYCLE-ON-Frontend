import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import authSlice from "./slices/authSlice";
import { watcherSaga } from "./sagas/rootSaga";
import userSlice from "./slices/userSlice";
import {
  ALERT_REDUCER,
  AUTH_REDUCER,
  LOADER_REDUCER,
  USER_REDUCER,
} from "../../utils";
import alertSlice from "./slices/alertSlice";
import loaderSlice from "./slices/loaderSlice";

const reducer = combineReducers({
  [AUTH_REDUCER]: authSlice,
  [USER_REDUCER]: userSlice,
  [ALERT_REDUCER]: alertSlice,
  [LOADER_REDUCER]: loaderSlice,
});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(watcherSaga);

export default store;
