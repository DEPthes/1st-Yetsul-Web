import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Header from './components/common/Header';
import Login from './components/Login/Login';
import store from './store/config';

const Router: React.FC = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
};

export default Router;
