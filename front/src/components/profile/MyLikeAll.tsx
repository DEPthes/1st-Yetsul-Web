/* eslint-disable no-plusplus */
import React, { useState, useEffect, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import BackgroundTemplate from '../common/BackgroundTemplate';
import { ProfileHeader } from './profileHeader';
import { FavoriteAlcholWidget } from './MyLikeAlcholWidget';
import MyPagination from './MypagePagination';

export const MyLikeAll: React.FC = () => {
    const [MyLikeAlcholData, setMyLikeAlcholData] = useState<DrinkType[]>([]);
    const [limit] = useState(10); // 페이지 당 보여줄 게시물 수
    const [page, setPage] = useState(1); // 현재 페이지
    const offset = (page - 1) * limit; // 페이지 당 첫 게시물의 index
    const [NoLikeData, setNoLikeData] = useState(true);
    const getData = () => {
        const JWT = localStorage.getItem('accessToken') || '';
        return axios.create({
            headers: { Authorization: `Bearer ${JWT}` },
        });
    };

    useEffect(() => {
        getData()
            .post(
                'http://ec2-13-125-227-68.ap-northeast-2.compute.amazonaws.com:3000/auth/myLikeAlcoholList',
            )
            .then((res) => setMyLikeAlcholData(res.data))
            .catch((err) => console.log(err));
    }, []);

    const [HeightPropsValue, setHeightPropsValue] = useState('100%');
    useEffect(() => {
        if (window.matchMedia('screen and (max-width: 767px)').matches) {
            if (MyLikeAlcholData.length >= 5) {
                setHeightPropsValue('auto');
            }
        }
    }, [MyLikeAlcholData]);

    useEffect(() => {
        if (MyLikeAlcholData.length !== 0) {
            setNoLikeData(false);
        }
    }, [MyLikeAlcholData]);
    return (
        <BackgroundTemplate heightValue={HeightPropsValue}>
            <Inner>
                <MyReviewAllConatainer>
                    <ProfileHeaderInner>
                        <ProfileHeaderHeadingContainer>
                            <HeaderHeading>찜한 옛술 모아보기</HeaderHeading>
                            <HeaderLittleHeading>
                                내가 찜한 옛술을 한 번에 모아볼 수 있어요!
                            </HeaderLittleHeading>
                        </ProfileHeaderHeadingContainer>
                    </ProfileHeaderInner>
                    {NoLikeData ? (
                        <NoDataBox>찜한 옛술이 없습니다.</NoDataBox>
                    ) : (
                        <>
                            {' '}
                            <MyReviewAllGridBox>
                                {MyLikeAlcholData.slice(
                                    offset,
                                    offset + limit,
                                ).map(
                                    (mylike: {
                                        id: number;
                                        AlcoholName: string;
                                        star: number;
                                        AlcoholByVolume: number;
                                        alcoholImage: string;
                                    }) => (
                                        <FavoriteAlcholWidget
                                            key={mylike.id}
                                            id={mylike.id}
                                            AlcoholName={mylike.AlcoholName}
                                            star={mylike.star}
                                            AlcoholByVolume={
                                                mylike.AlcoholByVolume
                                            }
                                            alcoholImage={mylike.alcoholImage}
                                        />
                                    ),
                                )}
                            </MyReviewAllGridBox>
                            <MyPagination
                                total={MyLikeAlcholData.length}
                                limit={limit}
                                page={page}
                                setPage={setPage}
                                marginValue={20}
                            />
                        </>
                    )}
                </MyReviewAllConatainer>

                <MobileContainer>
                    <MobileBackButtonLink to="/profile">
                        <MobileBackButton>&#60;</MobileBackButton>
                    </MobileBackButtonLink>
                    <MobileHeader>
                        <MobileHeaderTextContainer>
                            <MobileHeaderHeading>
                                찜한 옛술 모아보기
                            </MobileHeaderHeading>
                            <MobileHeaderDescription>
                                내가 찜한 옛술을 한 번에 모아볼 수 있어요!
                            </MobileHeaderDescription>
                        </MobileHeaderTextContainer>
                    </MobileHeader>
                    <MobileGridContainer>
                        {MyLikeAlcholData.map(
                            (mylike: {
                                id: number;
                                AlcoholName: string;
                                star: number;
                                AlcoholByVolume: number;
                                alcoholImage: string;
                            }) => (
                                <FavoriteAlcholWidget
                                    key={mylike.id}
                                    id={mylike.id}
                                    AlcoholName={mylike.AlcoholName}
                                    star={mylike.star}
                                    AlcoholByVolume={mylike.AlcoholByVolume}
                                    alcoholImage={mylike.alcoholImage}
                                />
                            ),
                        )}
                    </MobileGridContainer>
                </MobileContainer>
            </Inner>
        </BackgroundTemplate>
    );
};

const Inner = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 6vw;
`;

const MyReviewAllConatainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10.25em;
    @media screen and (max-width: 767px) {
        display: none;
    }
`;

const MyReviewAllGridBox = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-row-gap: 1.3125em;
    grid-column-gap: 0.99vw;
    margin-top: 1.25em;
    margin-bottom: 0.625em;
`;
const ProfileHeaderInner = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-bottom: 1px solid #bbb6a8;
`;

const ProfileHeaderHeadingContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const HeaderHeading = styled.h1`
    font-size: 1.302vw;
    color: #454038;
    margin-bottom: 1.25vw;
`;

const HeaderLittleHeading = styled.h2`
    font-size: 0.938vw;
    color: #8e8372;
    margin-bottom: 1.25vw;
`;

const NoDataBox = styled.div`
    width: 63vw;
    height: 30vw;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.198vw;
    color: #bbb6a8;
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

const MobileContainer = styled.div`
    display: none;
    flex-direction: column;
    align-items: center;
    width: 85.128vw;
    margin-top: 6.0625em;
    height: calc(100vh - 6.0625em);
    align-items: flex-start;
    @media screen and (max-width: 767px) {
        display: flex;
        height: auto;
    }
`;
const MobileBackButtonLink = styled(Link)`
    text-decoration: none;
`;

const MobileBackButton = styled.div`
    margin-top: 11.026vw;
    padding: 0 3.077vw;
    height: 6.436vw;
    border: 1px solid #8b7e6a;
    border-radius: 9px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #8b7e6a;
`;

const MobileHeader = styled.div`
    margin-top: 6.923vw;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 5.128vw;
    border-bottom: 1px solid #bbb6a8; ;
`;

const MobileHeaderTextContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const MobileHeaderHeading = styled.h1`
    color: #675b4f;
    font-size: 3.846vw;
    font-weight: 400;
    margin-bottom: 3.846vw;
`;
const MobileHeaderDescription = styled.h2`
    font-weight: 400;
    font-size: 3.077vw;
    color: #8e8372;
`;
const MobileGridContainer = styled.div`
    margin-top: 6.41vw;
    width: 85.29vw;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2.564vw;
    grid-row-gap: 2.564vw;
`;
