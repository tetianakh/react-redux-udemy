import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';



// global axios setup which all axios imports share
//
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';
//
axios.interceptors.request.use(requestConfig => {
  console.log(requestConfig);
  // can change request configuration
  return requestConfig;
}, error => {
  console.log(error);
  // can handle errors if request sending fails
  return Promise.reject(error);
});
//
axios.interceptors.response.use(response => {
  console.log(response);
  // can change response
  return response
}, error => {
  console.log(error);
  // can handle errors
  return Promise.reject(error);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
