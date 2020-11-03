import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import {compose, createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {Provider} from 'react-redux';
import {rootReducer} from "./redux/rootReducer";
import * as Sentry from '@sentry/browser';
import App from './App';

Sentry.init({dsn: "https://b113e932830142b69215dd22ee35cb91@o400454.ingest.sentry.io/5258905"});

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ));

const app = (
  <Provider store={store}>
    <App/>
  </Provider>
);

ReactDOM.render(app,document.getElementById('root'));
