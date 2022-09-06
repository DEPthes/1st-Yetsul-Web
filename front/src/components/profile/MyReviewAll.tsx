/* eslint-disable no-plusplus */
import React, { useState, useEffect, ReactNode } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import BackgroundTemplate from '../common/BackgroundTemplate';
import { MyReviewWidget } from './MyReviewWidget';
import MyPagination from './MypagePagination';
import { TemporarySaveModal } from './TemporarySaveModal2';

export const MyReviewAll: React.FC = () => {
    const [OpenModal, setOpenModal] = useState(false);
    const ChangeOpenModalShow = () => {
        setOpenModal((e) => !e);
    };
    console.log(OpenModal);
    const [AlcholthatUserWrite, setAlcholthatUserWrite] = useState<DrinkType[]>(
        [],
    );
    const [limit] = useState(4); // 페이지 당 보여줄 게시물 수
    const [page, setPage] = useState(1); // 현재 페이지
    const offset = (page - 1) * limit; // 페이지 당 첫 게시물의 index
    useEffect(() => {
        axios
            .post('https://depth-server.herokuapp.com/review/user', {
                user: 1,
            })
            .then((res) => setAlcholthatUserWrite(res.data))
            .catch((err) => console.log(err));
    }, []);
    return (
        <BackgroundTemplate heightValue="100%">
            <Inner>
                <MyReviewAllConatainer>
                    <ProfileHeaderInner>
                        <ProfileHeaderHeadingContainer>
                            <HeaderHeading>나의 리뷰 모아보기</HeaderHeading>
                            <HeaderLittleHeading>
                                내가 쓴 리뷰를 한 번에 볼 수 있어요!
                            </HeaderLittleHeading>
                        </ProfileHeaderHeadingContainer>
                        <ModalBtn onClick={ChangeOpenModalShow}>
                            임시저장
                        </ModalBtn>
                    </ProfileHeaderInner>
                    <MyReviewWidgetContainer>
                        {AlcholthatUserWrite.slice(offset, offset + limit).map(
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
                    </MyReviewWidgetContainer>
                    <MyPagination
                        total={AlcholthatUserWrite.length}
                        limit={limit}
                        page={page}
                        setPage={setPage}
                        marginValue={80}
                    />
                </MyReviewAllConatainer>
                <TemporarySaveModal
                    ChangeOpenModalShow={ChangeOpenModalShow}
                    OpenModal={OpenModal}
                />
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
    margin-top: 160px;
`;

const MyReviewWidgetContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1113.9px;
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
const ProfileHeaderInner = styled.div`
    display: flex;
    justify-content: space-between;
    width: 1125px;
    border-bottom: 1px solid #bbb6a8;
`;

const ProfileHeaderHeadingContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const HeaderHeading = styled.h1`
    font-size: 30px;
    color: #454038;
    margin-bottom: 24px;
`;

const HeaderLittleHeading = styled.h2`
    font-size: 20px;
    color: #8e8372;
    margin-bottom: 24px;
`;

const ModalBtn = styled.button`
    width: 159px;
    height: 51px;
    border: 1px solid #675b4f;
    border-radius: 18px;
    background: none;
    font-size: 20px;
    margin-top: 55px;
    cursor: pointer;
`;
