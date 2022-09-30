import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import authSlice from "./slices/authSlice";
import { watcherSaga } from "./sagas/rootSaga";
import userSlice from "./slices/userSlice";
import { AUTH_REDUCER, USER_REDUCER } from "../../utils";

const reducer = combineReducers({
  [AUTH_REDUCER]: authSlice,
  [USER_REDUCER]: userSlice,
});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(watcherSaga);

export default store;
