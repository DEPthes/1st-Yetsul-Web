import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Header from './components/common/Header';
import store from './store/config';
import Depth from './components/introduction/depth';
import Service from './components/introduction/service';
import Detail from './components/Detail/DrinkDetail';

const Router: React.FC = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/auth/:service/callback" element={<App />} />
                    <Route path="/depth" element={<Depth />} />
                    <Route path="/service" element={<Service />} />
                    <Route path="/detail" element={<Detail />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
};

export default Router;
