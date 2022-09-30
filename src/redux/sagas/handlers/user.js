import { put, call } from "redux-saga/effects";
import { setUser } from "../../slices/userSlice";
import { requestGetUser } from "../requests/userRequest";

export default function* handleGetUser(action) {
  try {
    const response = yield call(requestGetUser); // asyc API call /getUser
    yield put(setUser({ userData: response.data })); // dispatch setUser Action to store user data in redux store
  } catch (error) {
    console.log(error);
  }
}
