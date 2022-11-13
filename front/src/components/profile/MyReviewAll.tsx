/* eslint-disable no-plusplus */
import React, { useState, useEffect, ReactNode } from 'react';
import { Link } from 'react-router-dom';
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
    const getData = () => {
        const JWT = localStorage.getItem('accessToken') || '';
        return axios.create({
            headers: { Authorization: `Bearer ${JWT}` },
        });
    };

    useEffect(() => {
        getData()
            .post(
                'http://ec2-13-125-227-68.ap-northeast-2.compute.amazonaws.com:3000/review/user',
                {},
            )
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
                                    id={myreview.id}
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

                <MobileContainer>
                    <MobileBackButtonLink to="/profile">
                        <MobileBackButton>&#60;</MobileBackButton>
                    </MobileBackButtonLink>
                    <MobileHeader>
                        <MobileHeaderTextContainer>
                            <MobileHeaderHeading>
                                나의 리뷰 모아보기
                            </MobileHeaderHeading>
                            <MobileHeaderDescription>
                                내가 쓴 리뷰를 한 번에 볼 수 있어요
                            </MobileHeaderDescription>
                        </MobileHeaderTextContainer>
                        <MobileHeaderTemporarySaveButton
                            onClick={ChangeOpenModalShow}
                        >
                            임시저장
                        </MobileHeaderTemporarySaveButton>
                    </MobileHeader>
                    <MyReviewWidgetContainer>
                        {AlcholthatUserWrite.slice(offset, offset + limit).map(
                            (myreview: {
                                id: number;
                                alcoholId: number;
                                title: string;
                                star: number;
                            }) => (
                                <MyReviewWidget
                                    id={myreview.id}
                                    key={myreview.id}
                                    alcoholId={myreview.alcoholId}
                                    title={myreview.title}
                                    star={myreview.star}
                                />
                            ),
                        )}
                    </MyReviewWidgetContainer>
                </MobileContainer>
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
    margin-top: 8.333vw;
    width: 58.016vw;
    @media screen and (max-width: 767px) {
        display: none;
    }
`;

const MyReviewWidgetContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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
    width: 58.016vw;
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

const ModalBtn = styled.button`
    width: 8.281vw;
    height: 2.656vw;
    border: 1px solid #675b4f;
    border-radius: 18px;
    background: none;
    font-size: 1.042vw;
    margin-top: 2.865vw;
    margin-bottom: 0.833vw;
    cursor: pointer;
`;

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
    }
`;
const MobileBackButtonLink = styled(Link)`
    text-decoration: none;
`;

const MobileBackButton = styled.div`
    margin-top: 11.026vw;
    padding: 0 3.077vw;
    height: 7.436vw;
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
const MobileHeaderTemporarySaveButton = styled.button`
    width: 86.31px;
    height: 33px;
    border: 1px solid #8b7e6a;
    border-radius: 10px;
    outline: 0;
    margin-top: 3.846vw;
    background: none;
    color: #675b4f;
    font-size: 3.333vw;
`;
