import { call, put, takeLatest } from "redux-saga/effects";
import { fetchData, fetchData2 } from "../services/fetchService";
import {
  GET_FLORISTS,
  GET_FLORISTS2,
  getFloristsSuccess
} from "../actions/actions";

export function* fetchFlorists({ location }) {
  try {
    const data = yield call(() => fetchData(location[0], location[1]));
    yield put(getFloristsSuccess(data.businesses));
  } catch (e) {
    console.log(e);
  }
}

export function* fetchFlorists2({ userInput }) {
  try {
    const data = yield call(() => fetchData2(userInput));
    yield put(getFloristsSuccess(data.businesses));
  } catch (e) {
    console.log(e);
  }
}

//watcher
export function* rootSaga() {
  yield takeLatest(GET_FLORISTS, fetchFlorists);
  yield takeLatest(GET_FLORISTS2, fetchFlorists2);
}
