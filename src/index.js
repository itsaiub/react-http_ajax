import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import CounterReducer from "./store/reducers/counter";
import ResultReducer from "./store/reducers/result";
import * as serviceWorker from "./serviceWorker";
import Axios from "axios";

const rootReducer = combineReducers({
  ctr: CounterReducer,
  res: ResultReducer
});

const logger = store => {
  return next => {
    return action => {
      console.log("[Middleware Dispathing", action);
      const result = next(action);
      console.log("[Middleware next state", store.getState());
      return result;
    };
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger)));






Axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
Axios.defaults.headers.common["Authorization"] = "AUTH TOKEN";
Axios.defaults.headers.post["Content-Type"] = "application/json";

Axios.interceptors.request.use(
  request => {
    console.log(request);
    // Edit request config
    return request;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

Axios.interceptors.response.use(
  response => {
    console.log(response);
    // Edit request config
    return response;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
