import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App.jsx";
import store from './store/index'
import { addTest, getReviews } from './actions/index'

window.store = store;
window.addTest = addTest;
window.getReviews = getReviews;


ReactDOM.render(<App />, document.getElementById('reviews'));