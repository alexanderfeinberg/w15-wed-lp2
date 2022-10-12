import { applyMiddleware, compose, createStore, combineReducers } from "redux";
const logger = require("redux-logger").default;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(logger));

const rootReducer = combineReducers({});

export const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enahncer);
};

export default configureStore;
