import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import Router from './Router';
import store from './store/config';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);

root.render(
    <Provider store={store}>
        <Router />
    </Provider>,
);
