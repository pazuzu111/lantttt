import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

const saga = createSagaMiddleware();

export const store = createStore(applyMiddleware(saga));
