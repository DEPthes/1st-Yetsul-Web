import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import Router from './Router';
import store from './store/config';

const container = document.getElementById('root') as HTMLElement;

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);

if (container.hasChildNodes()) {
    ReactDOM.hydrateRoot(
        container,
        <Provider store={store}>
            <Router />
        </Provider>,
    );
} else {
    root.render(
        <Provider store={store}>
            <Router />
        </Provider>,
    );
}

// root.render(
//     <Provider store={store}>
//         <Router />
//     </Provider>,
// );
