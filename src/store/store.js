import { createStore, applyMiddleware } from "redux";
import reducers from "../reducers/reducers";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "../sagas/sagas";

const saga = createSagaMiddleware();

export const store = createStore(reducers, applyMiddleware(saga));

saga.run(rootSaga);
