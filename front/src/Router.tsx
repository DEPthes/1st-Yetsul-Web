import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import Header from './components/common/Header';
import Service from './components/introduction/service';
import DrinkList from './components/DrinkList/DrinkList';
// `import SoolotMachine from './components/soolotmachine/SoolotMachine';`
import DrinkTestBox from './components/DrinkTest/DrinkTest';
import DrinkTestResult from './components/DrinkTest/DrinkTestResult';
import MonthDrink from './components/BlockPage/MonthDrinkBlocks';
import DrinkDetail from './components/Detail/DrinkDetail';
import ReviewDetail from './components/Review/ReveiwDetail';
import { Profile } from './components/profile/Profile';
import { FixProfile } from './components/profile/fixprofile';
import { MyReviewAll } from './components/profile/MyReviewAll';
import { MyLikeAll } from './components/profile/MyLikeAll';
import ReviewWrite from './components/Review/ReviewWrite/ReviewWrite';
import KakaoLogin from './components/Login/KakaoLogin';
import RecommendSlot from './components/BlockPage/RecommendSlot';
import RecommendTicket from './components/BlockPage/RecommendTicket';
import DrinkTradition from './components/Tradition/DrinkTradition';
import SoolotMachine from './components/soolotmachine/SoolotMachine';
import SoolotMachineResult from './components/soolotmachine/SoolotMachineResult';
import ScrollToTop from './utils/scrollToTop';
import ReviewEdit from './components/Review/ReviewWrite/ReviewEdit';
import TemporaryReviewEdit from './components/Review/ReviewWrite/TemporaryReviewEdit';
import DecDrink from './components/BlockPage/DecDrink';
import RecommendBlocks from './components/BlockPage/RecommendBlocks';
import MetaTag from './SEOMetatag';

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <HelmetProvider>
                <MetaTag
                    title="옛술의 전당"
                    description="우리 술 전통주, 어렵지 않다! 옛술의 전당에서 전통주를 새롭고 즐겁게 즐겨보세요."
                    keywords="전통주, 옛술, 옛술의 전당, 우리술, 술, 우리나라 술, 청주, 약주, 증류주, 리큐르주, 과실주, 탁주, 막걸리"
                    imgsrc="images/logoBackGroundImg.png"
                    url="https://www.yetsul.com/"
                />
                <ScrollToTop />
                <Header />
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route
                        path="/AllDrinkRecommend"
                        element={<RecommendBlocks />}
                    />
                    <Route
                        path="/auth/:service/callback"
                        element={<KakaoLogin />}
                    />
                    <Route path="/tradition" element={<DrinkTradition />} />
                    <Route path="/auth/*" element={<KakaoLogin />} />
                    <Route path="/service" element={<Service />} />
                    <Route path="/list/:id/spec" element={<DrinkDetail />} />
                    <Route path="/list" element={<DrinkList />} />
                    <Route path="/month" element={<MonthDrink />} />
                    {/* <Route path="/soolot" element={<SoolotMachine />} /> */}
                    <Route path="/ticketbox" element={<DrinkTestBox />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/profile/fix" element={<FixProfile />} />
                    <Route path="/profile/MyReview" element={<MyReviewAll />} />
                    <Route
                        path="/profile/MyLikeAlcohole"
                        element={<MyLikeAll />}
                    />
                    <Route
                        path="ticketbox/result/:resultStr"
                        element={<DrinkTestResult />}
                    />
                    <Route path="/month" element={<MonthDrink />} />

                    <Route
                        path="/review/alcohol:alcoholId/review:reviewId"
                        element={<ReviewDetail />}
                    />

                    <Route path="/BlockPage/DecDrink" element={<DecDrink />} />
                    <Route
                        path="/review/alcohol:alcoholId/review:reviewId/temporaryedit"
                        element={<TemporaryReviewEdit />}
                    />
                    <Route
                        path="/review/alcohol:alcoholId/review:reviewId/edit"
                        element={<ReviewEdit />}
                    />
                    <Route path="/list/:id/write" element={<ReviewWrite />} />
                    <Route
                        path="/RecommendTicket"
                        element={<RecommendTicket />}
                    />
                    <Route path="/RecommendSlot" element={<RecommendSlot />} />
                    <Route path="/soolot" element={<SoolotMachine />} />
                    <Route
                        path="/soolotres"
                        element={<SoolotMachineResult />}
                    />
                </Routes>
            </HelmetProvider>
        </BrowserRouter>
    );
};

export default Router;
