import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Header from './components/common/Header';
import store from './store/config';
import Depth from './components/introduction/depth';
import Service from './components/introduction/service';

import DrinkList from './components/DrinkList/DrinkList';
import SoolotMachine from './components/soolotmachine/SoolotMachine';
import DrinkTestBox from './components/DrinkTest/DrinkTest';
import DrinkTestResult from './components/DrinkTest/DrinkTestResult';
import MonthDrink from './components/MonthDrink/MonthDrink';
import DrinkDetail from './components/Detail/DrinkDetail';

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
                    <Route path="/list/:id/spec" element={<DrinkDetail />} />
                    <Route path="/list" element={<DrinkList />} />
                    <Route path="/month" element={<MonthDrink />} />
                    <Route path="/soolot" element={<SoolotMachine />} />
                    <Route path="/ticketbox" element={<DrinkTestBox />} />
                    <Route
                        path="ticketbox/result/:result"
                        element={<DrinkTestResult />}
                    />
                    <Route path="/month" element={<MonthDrink />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
};

export default Router;
