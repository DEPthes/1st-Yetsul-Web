/* eslint-disable no-plusplus */
import React, { useState, useEffect, ReactNode } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BackgroundTemplate from '../common/BackgroundTemplate';
import { MyReviewWidget } from './MyReviewWidget';
import { FavoriteAlcholWidget } from './MyLikeAlcholWidget';

export const Profile: React.FC = () => {
    const [MyLikeAlcholData, setMyLikeAlcholData] = useState<DrinkType[]>([]);
    const [AlcholthatUserWrite, setAlcholthatUserWrite] = useState<DrinkType[]>(
        [],
    );
    const [userData, setUserData] = useState<UserType>(Object);
    const getData = () => {
        const JWT = localStorage.getItem('accessToken') || '';
        return axios.create({
            headers: { Authorization: `Bearer ${JWT}` },
        });
    };

    useEffect(() => {
        getData()
            .post('https://depth-server.herokuapp.com/auth/myLikeAlcoholList')
            .then((res) => setMyLikeAlcholData(res.data))
            .catch((err) => console.log(err));
    }, []);

    const MyLikeAlcoholDataforWidget = MyLikeAlcholData.slice(0, 4);

    useEffect(() => {
        getData()
            .post('https://depth-server.herokuapp.com/review/user')
            .then((res) => setAlcholthatUserWrite(res.data))
            .catch((err) => console.log(err));
    }, []);

    const AlcholthatUserWriteforWidget = AlcholthatUserWrite.slice(0, 3);

    useEffect(() => {
        getData()
            .get('https://depth-server.herokuapp.com/auth/user')
            .then((res) => setUserData(res.data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <BackgroundTemplate heightValue="auto">
            <Inner>
                <ProfileContainer>
                    <ProfileImgSection>
                        <ProfileBox>
                            <ProfileImgBox>
                                <ProfileImg />
                                <ProfileFixImgBtn to="/profile/fix">
                                    <ProfileFixImgBg>
                                        <ProfileFixImg src="images/profileFixIcon.png" />
                                    </ProfileFixImgBg>
                                </ProfileFixImgBtn>
                            </ProfileImgBox>
                            <ProfileName>{userData.nickname}</ProfileName>
                        </ProfileBox>
                    </ProfileImgSection>
                    <ProfileImformationSection>
                        <MyreviewHeader>
                            <MyreviewHeadingCom>
                                나의 리뷰 모아보기
                            </MyreviewHeadingCom>
                            <MyreviewArray>
                                <MyreviewArrayLi>
                                    <MyreviwArrayText>최신순</MyreviwArrayText>
                                </MyreviewArrayLi>
                                <MyreviewArrayLi>
                                    <MyreviewArrayBar>|</MyreviewArrayBar>
                                </MyreviewArrayLi>
                                <MyreviewArrayLi>
                                    <MyreviwArrayText>
                                        오래된 순
                                    </MyreviwArrayText>
                                </MyreviewArrayLi>
                            </MyreviewArray>
                        </MyreviewHeader>
                        <Myreview>
                            {AlcholthatUserWriteforWidget.map(
                                (myreview: {
                                    id: number;
                                    alcoholId: number;
                                    title: string;
                                    star: number;
                                }) => (
                                    <MyReviewWidget
                                        key={myreview.id}
                                        alcoholId={myreview.alcoholId}
                                        title={myreview.title}
                                        star={myreview.star}
                                    />
                                ),
                            )}
                            <MyReviewSeeFullLink to="/profile/MyReview">
                                <SeeFullOuter>전체보기 &#62;</SeeFullOuter>
                            </MyReviewSeeFullLink>
                        </Myreview>
                        <MyreviewHeader>
                            <MyreviewHeadingCom>
                                찜한 옛술 모아보기
                            </MyreviewHeadingCom>
                        </MyreviewHeader>
                        <MyfavoriteBox>
                            <MyLikeWidgetContainer>
                                {MyLikeAlcoholDataforWidget.map(
                                    (mylike: {
                                        id: number;
                                        AlcoholName: string;
                                        star: number;
                                        AlcoholByVolume: number;
                                        alcoholImage: string;
                                    }) => (
                                        <FavoriteAlcholWidget
                                            id={mylike.id}
                                            key={mylike.id}
                                            AlcoholName={mylike.AlcoholName}
                                            star={mylike.star}
                                            AlcoholByVolume={
                                                mylike.AlcoholByVolume
                                            }
                                            alcoholImage={mylike.alcoholImage}
                                        />
                                    ),
                                )}
                            </MyLikeWidgetContainer>
                            <SeeFullOuter2Container>
                                <MyLikeSeeFullLink to="/profile/MyLikeAlcohole">
                                    <SeeFullOuter2>
                                        전체보기 &#62;
                                    </SeeFullOuter2>
                                </MyLikeSeeFullLink>
                            </SeeFullOuter2Container>
                        </MyfavoriteBox>
                    </ProfileImformationSection>
                </ProfileContainer>
            </Inner>
        </BackgroundTemplate>
    );
};

const Inner = styled.div`
    width: 100vw;
`;

const ProfileContainer = styled.div`
    margin-left: 13.958vw;
    margin-top: 120px;
    display: flex;
    border-top: 1.3px solid #bbb6a8;
    justify-content: flex-start;
`;

const ProfileImgSection = styled.section`
    width: 20.104vw;
    height: calc(100vh - 142px);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

const ProfileImformationSection = styled.section`
    border-left: 1.3px solid #bbb6a8;
`;

const ProfileBox = styled.div`
    margin-top: 62px;
    margin-right: 131px;
`;

const ProfileImgBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

const ProfileImg = styled.div`
    width: 139px;
    height: 139px;
    background: #d9d9d9;
    border-radius: 100%;
`;

const ProfileFixImg = styled.img`
    position: relative;
    left: 5px;
    z-index: 200;
`;

const ProfileFixImgBg = styled.div`
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background-color: white;
    top: -135px;
`;

const ProfileFixImgBtn = styled(Link)``;

const ProfileName = styled.p`
    font-weight: 600;
    font-size: 30px;
    text-align: center;
`;

const Myreview = styled.div`
    width: 907px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-left: 48px;
    padding-right: 130px;
`;

const MyreviewHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: 60px;
    width: 1014px;
    margin-left: 48px;
`;

const MyreviewHeadingCom = styled.p`
    font-size: 1.4375rem;
    color: #675b4f;
`;

const MyreviewArray = styled.ul`
    list-style: none;
    margin-right: 95px;
`;

const MyreviewArrayLi = styled.li`
    float: left;
    margin: 0 10px;
`;
const MyreviwArrayText = styled.p`
    font-size: 0.9375rem;
    margin-top: 1.8px;
`;

const MyreviewArrayBar = styled.p`
    font-size: 19px;
`;

const MyReviewSeeFullLink = styled(Link)`
    text-decoration: none;
    color: #8b7e6a;
`;

const MyLikeSeeFullLink = styled(Link)`
    text-decoration: none;
    color: #8b7e6a;
`;

const SeeFullOuter = styled.p`
    margin-right: 20px;
`;

const SeeFullOuter2Container = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const SeeFullOuter2 = styled.p`
    margin-right: 30px;
`;

const MyfavoriteBox = styled.div`
    display: inline-flex;
    flex-direction: column;
    margin-left: 48px;
`;

const MyLikeWidgetContainer = styled.div`
    display: flex;
    margin-top: 15px;
`;

type UserType = {
    id: number;
    email: string;
    nickname: string;
    profileImag: string;
};

type DrinkType = {
    children: ReactNode;
    id: number;
    AlcoholName: string;
    category: number;
    brewery: string;
    price: number;
    AlcoholByVolume: number;
    sweet: boolean;
    bitter: boolean;
    refreshing: boolean;
    clean: boolean;
    cool: boolean;
    sour: boolean;
    description: string;
    star: number;
    alcoholImage: string;
    alcoholId: number;
    title: string;
};
