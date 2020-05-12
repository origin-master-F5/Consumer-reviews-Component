import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App.jsx";
import store from './store/index';
import { getReviews, sortByStar, switchVerified } from './actions/index';
import { Provider } from 'react-redux';

window.store = store;
window.getReviews = getReviews;
window.sortByStar = sortByStar;
window.switchVerified = switchVerified;



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('reviews'));