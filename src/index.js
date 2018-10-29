import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import './index.css';
import App from './App';
import reducer from './store/reducer'
import * as serviceWorker from './serviceWorker';
import Axios from 'axios';


const store = createStore(reducer)


Axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
Axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
Axios.defaults.headers.post['Content-Type'] = 'application/json';

Axios.interceptors.request.use(request => {
  console.log(request);
  // Edit request config
  return request;
}, error => {
  console.log(error);
  return Promise.reject(error);
})

Axios.interceptors.response.use(response => {
  console.log(response);
  // Edit request config
  return response;
}, error => {
  console.log(error);
  return Promise.reject(error);
})

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
