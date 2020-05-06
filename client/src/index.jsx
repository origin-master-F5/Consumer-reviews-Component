import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App.jsx";
import store from './store/index'
import { addTest } from './actions/index'

window.store = store;
window.addTest = addTest;

ReactDOM.render(<App />, document.getElementById('reviews'));