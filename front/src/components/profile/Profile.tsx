/* eslint-disable no-plusplus */
import React, { useState, useEffect, ReactNode } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import BackgroundTemplate from '../common/BackgroundTemplate';
import { MyReviewWidget } from './MyReviewWidget';
import { FavoriteAlcholWidget } from './MyLikeAlcholWidget';
import { getAccessToken } from '../../services/tokenControl';

export const Profile: React.FC = () => {
    const [MyLikeAlcholData, setMyLikeAlcholData] = useState<DrinkType[]>([]);

    const [AlcoholReviewData, setAlcoholReviewData] = useState<DrinkType[]>([]);

    const [AlcholReviewReverse, setAlcholReviewReverse] = useState<DrinkType[]>(
        [],
    );
    const navigate = useNavigate();

    const [AlcholthatUserWriteforWidget, setAlcholthatUserWriteforWidget] =
        useState<DrinkType[]>([]);

    const [userData, setUserData] = useState<UserType>(Object);
    const getData = () => {
        return axios.create({
            headers: { Authorization: `Bearer ${getAccessToken()}` },
        });
    };

    const getdata = () => {
        return axios.create({
            headers: { Authorization: `Bearer ${getAccessToken()}` },
        });
    };

    useEffect(() => {
        getdata()
            .post(
                'http://ec2-13-125-227-68.ap-northeast-2.compute.amazonaws.com:3000/review/user',
            )
            .then((res) => setAlcoholReviewData(res.data))
            .catch((err) => console.log(err));
    }, []);
    const [NoReviewData, setNoReviewData] = useState(true);
    const [NoLikeData, setNoLikeData] = useState(true);

    useEffect(() => {
        if (AlcoholReviewData.length !== 0) {
            setNoReviewData(false);
            setAlcholReviewReverse([...AlcoholReviewData].reverse());
        }
    }, [AlcoholReviewData]);

    const [RecentColor, setRecentColor] = useState(true);
    useEffect(() => {
        setAlcholthatUserWriteforWidget(AlcholReviewReverse.slice(0, 3));
    }, [AlcholReviewReverse]);

    const Recent = () => {
        setAlcholthatUserWriteforWidget(AlcholReviewReverse.slice(0, 3));
        setRecentColor(true);
    };
    const Older = () => {
        setAlcholthatUserWriteforWidget(AlcoholReviewData.slice(0, 3));
        setRecentColor(false);
    };

    useEffect(() => {
        getdata()
            .post(
                'http://ec2-13-125-227-68.ap-northeast-2.compute.amazonaws.com:3000/auth/myLikeAlcoholList',
            )
            .then((res) => setMyLikeAlcholData(res.data))
            .catch((err) => console.log(err));
    }, []);
    useEffect(() => {
        if (MyLikeAlcholData.length !== 0) {
            setNoLikeData(false);
        }
    }, [MyLikeAlcholData]);

    const MyLikeAlcoholDataforWidget = MyLikeAlcholData.slice(0, 4);

    useEffect(() => {
        getData()
            .get(
                'http://ec2-13-125-227-68.ap-northeast-2.compute.amazonaws.com:3000/auth/user',
            )
            .then((res) => setUserData(res.data))
            .catch(() => navigate('/'));
    }, []);

    return (
        <BackgroundTemplate heightValue="100%">
            <Inner>
                <ProfileContainer>
                    <ProfileImgSection>
                        <ProfileBox>
                            <ProfileImgBox>
                                <ProfileImg src={userData.profileImg} />
                                <ProfileFixImgBtn to="/profile/fix">
                                    <ProfileFixSvg
                                        width="51"
                                        height="51"
                                        viewBox="0 0 51 51"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/ProfileFixSvg"
                                    >
                                        <circle
                                            cx="25.5"
                                            cy="25.5"
                                            r="25"
                                            fill="white"
                                            stroke="#DEDEDE"
                                        />
                                        <path
                                            d="M24.0029 18.8264H16.9658V34.5764H32.7158V27.3923"
                                            stroke="black"
                                            strokeWidth="1.3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M32.7539 14.2529L37.2996 18.7986L27.2991 28.7991H22.7534V24.2534L32.7539 14.2529Z"
                                            stroke="black"
                                            strokeWidth="1.3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M30.3428 17.234L34.5379 21.4291"
                                            stroke="black"
                                            strokeWidth="1.3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </ProfileFixSvg>
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
                            <MyreciewArrayBox>
                                <MyreviwArrayText
                                    onClick={Recent}
                                    RecentColor={RecentColor}
                                >
                                    최신순
                                </MyreviwArrayText>
                                <MyreviewArrayBar>|</MyreviewArrayBar>
                                <MyreviwArrayText2
                                    onClick={Older}
                                    RecentColor={RecentColor}
                                >
                                    오래된 순
                                </MyreviwArrayText2>
                            </MyreciewArrayBox>
                        </MyreviewHeader>
                        <Myreview>
                            {NoReviewData ? (
                                <NoDataWindow>
                                    나의 리뷰가 없습니다.
                                </NoDataWindow>
                            ) : (
                                <>
                                    {AlcholthatUserWriteforWidget.map(
                                        (myreview: {
                                            id: number;
                                            alcoholId: number;
                                            title: string;
                                            star: number;
                                        }) => (
                                            <MyReviewWidget
                                                key={myreview.id}
                                                id={myreview.id}
                                                alcoholId={myreview.alcoholId}
                                                title={myreview.title}
                                                star={myreview.star}
                                            />
                                        ),
                                    )}
                                    <MyReviewSeeFullLink to="/profile/MyReview">
                                        <SeeFullOuter>
                                            전체보기 &#62;
                                        </SeeFullOuter>
                                    </MyReviewSeeFullLink>
                                </>
                            )}
                        </Myreview>
                        <MyfavoriteBox>
                            <MyreviewHeader2>
                                <MyreviewHeadingCom>
                                    찜한 옛술 모아보기
                                </MyreviewHeadingCom>
                            </MyreviewHeader2>
                            {NoLikeData ? (
                                <NoDataWindow>
                                    찜한 옛술이 없습니다.
                                </NoDataWindow>
                            ) : (
                                <>
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
                                                    AlcoholName={
                                                        mylike.AlcoholName
                                                    }
                                                    star={mylike.star}
                                                    AlcoholByVolume={
                                                        mylike.AlcoholByVolume
                                                    }
                                                    alcoholImage={
                                                        mylike.alcoholImage
                                                    }
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
                                </>
                            )}
                        </MyfavoriteBox>
                    </ProfileImformationSection>
                </ProfileContainer>

                <MobileConatiner>
                    <MobileProfileBox>
                        <MobileProfileImg src={userData.profileImg} />
                        <p>{userData.nickname}</p>
                        <ProfileFixImgBtn to="/profile/fix">
                            <MobileProfileFix
                                width="51"
                                height="51"
                                viewBox="0 0 51 51"
                                fill="none"
                                xmlns="http://www.w3.org/2000/ProfileFixSvg"
                            >
                                <circle
                                    cx="25.5"
                                    cy="25.5"
                                    r="25"
                                    fill="white"
                                    stroke="#DEDEDE"
                                />
                                <path
                                    d="M24.0029 18.8264H16.9658V34.5764H32.7158V27.3923"
                                    stroke="black"
                                    strokeWidth="1.3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M32.7539 14.2529L37.2996 18.7986L27.2991 28.7991H22.7534V24.2534L32.7539 14.2529Z"
                                    stroke="black"
                                    strokeWidth="1.3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M30.3428 17.234L34.5379 21.4291"
                                    stroke="black"
                                    strokeWidth="1.3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </MobileProfileFix>
                        </ProfileFixImgBtn>
                    </MobileProfileBox>
                    <MobileNavigationTable>
                        <tr>
                            <td>
                                <MyReviewSeeFullLink to="/profile/MyReview">
                                    <div>
                                        <p className="heading">
                                            나의 리뷰 모아보기
                                        </p>
                                        <p className="arrow">&#62;</p>
                                    </div>
                                </MyReviewSeeFullLink>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <MyLikeSeeFullLink to="/profile/MyLikeAlcohole">
                                    <div>
                                        <p className="heading">
                                            찜한 옛술 모아보기
                                        </p>
                                        <p className="arrow">&#62;</p>
                                    </div>
                                </MyLikeSeeFullLink>
                            </td>
                        </tr>
                    </MobileNavigationTable>
                </MobileConatiner>
            </Inner>
        </BackgroundTemplate>
    );
};

const Inner = styled.div`
    width: 100vw;
    display: flex;
    justify-content: flex-end;
    @media screen and (max-width: 767px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }
`;

const ProfileContainer = styled.div`
    margin-top: 9.1875em;
    display: flex;
    border-top: 1.3px solid #bbb6a8;
    justify-content: flex-start;
    width: 85.938vw;
    @media screen and (max-width: 767px) {
        display: none;
    }
`;

const ProfileImgSection = styled.section``;

const ProfileImformationSection = styled.section`
    border-left: 1.3px solid #bbb6a8;
    width: 55%;
`;

const ProfileBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-right: 6.823vw;
    margin-left: 6.823vw;
    margin-top: 3.229vw;
`;

const ProfileImgBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

const ProfileImg = styled.img`
    object-fit: cover;
    width: 8.6875em;
    height: 8.6875em;
    background: #d9d9d9;
    border-radius: 100%;
`;

const ProfileFixSvg = styled.svg`
    position: relative;
    top: calc(-10em);
    left: 1em;
    z-index: 200;
    width: 2.9375em;
`;
const ProfileFixImgBtn = styled(Link)``;

const ProfileName = styled.p`
    font-weight: 600;
    font-size: 1.875em;
    text-align: center;
    margin-top: -2.667vw;
`;

const Myreview = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-left: 2.5vw;
    height: 18vw;
`;

const MyreviewHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 2.083vw;
    margin-left: 2.5vw;
`;

const MyreviewHeader2 = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 0.5vw;
`;

const MyreviewHeadingCom = styled.p`
    font-size: 1.198vw;
    color: #675b4f;
`;

const NoDataWindow = styled.div`
    width: 100%;
    height: 18vw;

    display: flex;
    justify-content: center;
    align-items: center;
    color: #bbb6a8;
    font-size: 1.198vw;
`;

const MyreciewArrayBox = styled.div`
    display: flex;
`;

const MyreviwArrayText = styled.p<{ RecentColor: boolean }>`
    cursor: pointer;
    color: ${(props) => (props.RecentColor ? '#8B7E6A' : '#BBB6A8')};
    margin-right: 1.25vw;
`;
const MyreviwArrayText2 = styled.p<{ RecentColor: boolean }>`
    cursor: pointer;
    color: ${(props) => (props.RecentColor ? '#BBB6A8' : '#8B7E6A')};
`;

const MyreviewArrayBar = styled.p`
    margin-right: 1.25vw;
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
    margin-top: 0.833vw;
    margin-right: 1.563vw;
`;

const SeeFullOuter2Container = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const SeeFullOuter2 = styled.p`
    margin-top: 0.833vw;
    margin-right: 1.563vw;
`;

const MyfavoriteBox = styled.div`
    margin-left: 2.5vw;
`;

const MyLikeWidgetContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 1.406vw;
    margin-top: 0.6vw;
    width: auto;
`;

type UserType = {
    id: number;
    email: string;
    nickname: string;
    profileImg: string;
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

const MobileConatiner = styled.div`
    display: none;
    @media screen and (max-width: 767px) {
        width: 85.128vw;
        margin-top: 6.0625em;
        height: calc(100vh - 6.0625em);
        overflow-y: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 50vw;
    }
    @media screen and (max-width: 550px) {
        height: calc(100vh - 6.0625em);
        padding-bottom: 0vw;
    }
`;
const MobileProfileBox = styled.div`
    display: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin-top: 13.333vw;
    p {
        font-size: 6.41vw;
        font-weight: 400;
        margin-top: 7.179vw;
    }
`;

const MobileProfileImg = styled.img`
    width: 26.923vw;
    height: 26.923vw;
    background-color: #d9d9d9;
    border-radius: 100%;
    object-fit: cover;
`;

const MobileProfileFix = styled.svg`
    position: absolute;
    top: calc(6.0625em + 13vw);
    left: 55vw;
    width: 10vw;
    height: 10vw;
`;
const MobileNavigationTable = styled.table`
    margin-top: 13.59vw;
    width: 100%;
    border: 1px solid red;
    border-left: none;
    border-right: none;
    border-collapse: collapse;
    th,
    td {
        border: 1px solid #bbb6a8;
        border-left: none;
        border-right: none;
        border-collapse: collapse;
        color: #675b4f;
        font-size: 3.846vw;
        div {
            display: flex;
            justify-content: space-between;
            padding: 5.2vw 0;
            .arrow {
                margin-right: 5.128vw;
            }
            .heading {
                margin-left: 1.538vw;
            }
        }
    }
`;
