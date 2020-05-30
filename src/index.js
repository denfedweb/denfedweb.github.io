import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import * as Sentry from '@sentry/browser';
import App from './App';

Sentry.init({dsn: "https://b113e932830142b69215dd22ee35cb91@o400454.ingest.sentry.io/5258905"});

ReactDOM.render(<App />,document.getElementById('root'));
