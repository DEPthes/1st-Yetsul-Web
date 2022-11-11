import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Header from './components/common/Header';
import Service from './components/introduction/service';
import DrinkList from './components/DrinkList/DrinkList';
// `import SoolotMachine from './components/soolotmachine/SoolotMachine';`
import DrinkTestBox from './components/DrinkTest/DrinkTest';
import DrinkTestResult from './components/DrinkTest/DrinkTestResult';
import MonthDrink from './components/MonthDrink/MonthDrink';
import DrinkDetail from './components/Detail/DrinkDetail';
import ReviewDetail from './components/Review/ReveiwDetail';
import { Profile } from './components/profile/Profile';
import { FixProfile } from './components/profile/fixprofile';
import { MyReviewAll } from './components/profile/MyReviewAll';
import { MyLikeAll } from './components/profile/MyLikeAll';
import ReviewWrite from './components/Review/ReviewWrite/ReviewWrite';
import KakaoLogin from './components/Login/KakaoLogin';
import AllDrinkRecommend from './components/DrinkRecommend/AllDrinkRecommend';
import RecommendSlot from './components/DrinkRecommend/RecommendSlot';
import RecommendTicket from './components/DrinkRecommend/RecommendTicket';
import SoolotMachine from './components/soolotmachine/SoolotMachine';
import SoolotMachineResult from './components/soolotmachine/SoolotMachineResult';
import DrinkTradition from './components/Tradition/DrinkTradition';

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<App />} />
                <Route
                    path="/auth/:service/callback"
                    element={<KakaoLogin />}
                />
                <Route path="/auth/*" element={<KakaoLogin />} />
                <Route path="/service" element={<Service />} />
                <Route path="/list/:id/spec" element={<DrinkDetail />} />
                <Route path="/list" element={<DrinkList />} />
                <Route path="/month" element={<MonthDrink />} />
                <Route path="/Tradition" element={<DrinkTradition />} />
                {/* <Route path="/soolot" element={<SoolotMachine />} /> */}
                <Route path="/ticketbox" element={<DrinkTestBox />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/profile/fix" element={<FixProfile />} />
                <Route path="/profile/MyReview" element={<MyReviewAll />} />
                <Route path="/profile/MyLikeAlcohole" element={<MyLikeAll />} />
                <Route
                    path="ticketbox/result/:resultStr"
                    element={<DrinkTestResult />}
                />
                <Route path="/month" element={<MonthDrink />} />

                <Route
                    path="/review/alcohol:alcoholId/review:reviewId"
                    element={<ReviewDetail />}
                />
                <Route path="/list/:id/write" element={<ReviewWrite />} />
                <Route
                    path="/AllDrinkRecommend"
                    element={<AllDrinkRecommend />}
                />
                <Route path="/RecommendTicket" element={<RecommendTicket />} />
                <Route path="/RecommendSlot" element={<RecommendSlot />} />
                <Route path="/soolot" element={<SoolotMachine />} />
                <Route path="/soolotres" element={<SoolotMachineResult />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
