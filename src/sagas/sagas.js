import { call, put, takeLatest } from "redux-saga/effects";
import { fetchData } from "../services/fetchService";
import { GET_FLORISTS, getFloristsSuccess } from "../actions/actions";

export function* fetchFlorists({ location }) {
  try {
    const data = yield call(() => fetchData(location[0], location[1]));
    yield put(getFloristsSuccess(data.businesses));
  } catch (e) {
    console.log(e);
  }
}

//watcher
export function* rootSaga() {
  yield takeLatest(GET_FLORISTS, fetchFlorists);
}
