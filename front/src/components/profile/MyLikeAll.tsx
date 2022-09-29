/* eslint-disable no-plusplus */
import React, { useState, useEffect, ReactNode } from 'react';
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
    useEffect(() => {
        axios
            .post('https://depth-server.herokuapp.com/auth/myLikeAlcoholList', {
                id: 1,
            })
            .then((res) => setMyLikeAlcholData(res.data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <BackgroundTemplate heightValue="100%">
            <Inner>
                <MyReviewAllConatainer>
                    <ProfileHeader
                        BigHeader="찜한 옛술 모아보기"
                        SmallHeader="내가 찜한 옛술을 한 번에 모아볼 수 있어요!  "
                    />
                    <MyReviewAllGridBox>
                        {MyLikeAlcholData.slice(offset, offset + limit).map(
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
                    </MyReviewAllGridBox>
                    <MyPagination
                        total={MyLikeAlcholData.length}
                        limit={limit}
                        page={page}
                        setPage={setPage}
                    />
                </MyReviewAllConatainer>
            </Inner>
        </BackgroundTemplate>
    );
};

const Inner = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;

const MyReviewAllConatainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 180px;
`;

const MyReviewAllGridBox = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    margin-top: 20px;
    margin-bottom: 10px;
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
