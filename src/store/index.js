import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import booksReducer from "./booksReducer";
const logger = require("redux-logger").default;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(logger));

const rootReducer = combineReducers({
  books: booksReducer,
});

export const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
