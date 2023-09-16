import { put, takeEvery } from "redux-saga/effects";
import axios from "../../helper/axios";
import { READ_TASK, SET_TASKS_LIST } from "../constants/constants";

function* getTasks() {
  try {
    const response = yield axios.get("/tasks");
    console.warn(response.data);
    yield put({ type: SET_TASKS_LIST, data: response.data });
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}

function* userSaga() {
  yield takeEvery(READ_TASK, getTasks);
}

export default userSaga;
