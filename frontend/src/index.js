import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';
import * as session from './actions/sessions';
import * as users from './actions/users';
import * as articles from './actions/articles';
import * as categories from './actions/categories';
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));
const store = createStore(rootReducer, composedEnhancer);

store.dispatch(session.autoLoginMiddleWare);
store.dispatch(users.fetchUsersMiddleWare);
store.dispatch(articles.fetchArticlesMiddleWare);
store.dispatch(categories.fetchCategoriesMiddleWare);

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store} >
     <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
