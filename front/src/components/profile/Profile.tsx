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

    useEffect(() => {
        axios
            .post('https://depth-server.herokuapp.com/auth/myLikeAlcoholList', {
                id: 1,
            })
            .then((res) => setMyLikeAlcholData(res.data))
            .catch((err) => console.log(err));
    }, []);

    const MyLikeAlcoholDataforWidget = MyLikeAlcholData.slice(0, 4);

    useEffect(() => {
        axios
            .post('https://depth-server.herokuapp.com/review/user', {
                user: 1,
            })
            .then((res) => setAlcholthatUserWrite(res.data))
            .catch((err) => console.log(err));
    }, []);

    // const ReviewalcholId = AlcholthatUserWrite.alcoholId;
    // console.log(ReviewalcholId);
    return (
        <BackgroundTemplate heightValue="100%">
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

                            <ProfileName>옛술님</ProfileName>
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
                                        평점 높은 순
                                    </MyreviwArrayText>
                                </MyreviewArrayLi>
                            </MyreviewArray>
                        </MyreviewHeader>
                        <Myreview>
                            {AlcholthatUserWrite.map(
                                (myreview: {
                                    id: number;
                                    alcoholId: number;
                                    title: string;
                                }) => (
                                    <MyReviewWidget
                                        key={myreview.id}
                                        alcoholId={myreview.alcoholId}
                                        title={myreview.title}
                                    />
                                ),
                            )}

                            <SeeFullOuter>전체보기 &#62;</SeeFullOuter>
                        </Myreview>
                        <MyreviewHeader>
                            <MyreviewHeadingCom>
                                찜한 옛술 모아보기
                            </MyreviewHeadingCom>
                        </MyreviewHeader>
                        <MyfavoriteBox>
                            {MyLikeAlcoholDataforWidget.map(
                                (mylike: {
                                    id: number;
                                    AlcoholName: string;
                                    star: number;
                                    AlcoholByVolume: number;
                                }) => (
                                    <FavoriteAlcholWidget
                                        key={mylike.id}
                                        AlcoholName={mylike.AlcoholName}
                                        star={mylike.star}
                                        AlcoholByVolume={mylike.AlcoholByVolume}
                                    />
                                ),
                            )}
                        </MyfavoriteBox>
                    </ProfileImformationSection>
                </ProfileContainer>
            </Inner>
        </BackgroundTemplate>
    );
};

const Inner = styled.div`
    width: 100vw;
    overflow-y: hidden;
    overflow-x: hidden;
`;

const ProfileContainer = styled.div`
    width: 185.938vw;
    margin-left: 13.958vw;
    margin-top: 147px;
    display: flex;
    border-top: 1.3px solid #bbb6a8;
    border-bottom: 1.3px solid #bbb6a8;
    justify-content: flex-start;
`;

const ProfileImgSection = styled.section`
    border-right: 1.3px solid #bbb6a8;
    width: 20.104vw;
    height: calc(100vh - 147px);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

const ProfileImformationSection = styled.section`
    border-right: 1.3px solid #bbb6a8;
    width: 65.833vw;
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
    width: 1014px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-left: 2.5vw;
`;

const MyreviewHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: 90px;
    width: 1014px;
    margin-left: 48px;
`;

const MyreviewHeadingCom = styled.p`
    font-size: 1.4375rem;
    color: #675b4f;
    margin-bottom: 28px;
`;

const MyreviewArray = styled.ul`
    list-style: none;
`;

const MyreviewArrayLi = styled.li`
    float: left;
    margin: 0 10px;
`;
const MyreviwArrayText = styled.p`
    font-size: 0.9375rem;
`;

const MyreviewArrayBar = styled.p`
    font-size: 19px;
`;

const SeeFullOuter = styled.p`
    margin-right: 20px;
`;

const MyfavoriteBox = styled.div`
    display: flex;
    margin-left: 48px;
`;

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
