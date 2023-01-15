import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import './index.css';
import Router from './Router';
import store from './store/config';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);

root.render(
    <Provider store={store}>
        <HelmetProvider>
            <Router />
        </HelmetProvider>
    </Provider>,
);
