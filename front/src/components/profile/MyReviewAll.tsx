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
    const [NoLikeData, setNoLikeData] = useState(true);
    const ChangeOpenModalShow = () => {
        setOpenModal((e) => !e);
    };
    console.log(OpenModal);
    const [AlcholthatUserWrite, setAlcholthatUserWrite] = useState<DrinkType[]>(
        [],
    );
    const [AlcholReviewReverse, setAlcholReviewReverse] = useState<DrinkType[]>(
        [],
    );
    const [HeightPropsValue, setHeightPropsValue] = useState('100%');

    const [AlcholthatUserWriteforWidget, setAlcholthatUserWriteforWidget] =
        useState<DrinkType[]>([]);
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

    useEffect(() => {
        if (AlcholthatUserWrite.length !== 0) {
            setAlcholReviewReverse([...AlcholthatUserWrite].reverse());
            setNoLikeData(false);
        }
    }, [AlcholthatUserWrite]);

    const [RecentColor, setRecentColor] = useState(true);

    useEffect(() => {
        setAlcholthatUserWriteforWidget(AlcholReviewReverse);
    }, [AlcholReviewReverse]);

    useEffect(() => {
        if (RecentColor) {
            setAlcholthatUserWriteforWidget(AlcholReviewReverse);
        } else {
            setAlcholthatUserWriteforWidget(AlcholthatUserWrite);
        }
    }, [RecentColor]);

    const ChangeArray = () => {
        setRecentColor(!RecentColor);
    };
    useEffect(() => {
        if (window.matchMedia('screen and (max-width: 767px)').matches) {
            if (AlcholthatUserWrite.length >= 5) {
                setHeightPropsValue('auto');
            }
        }
    }, [AlcholthatUserWrite]);

    return (
        <BackgroundTemplate heightValue={HeightPropsValue}>
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

                    {NoLikeData ? (
                        <NoDataBox>나의 리뷰가 없습니다.</NoDataBox>
                    ) : (
                        <>
                            <ArrayChangeContainer onClick={ChangeArray}>
                                <p>
                                    {RecentColor ? <>오래된 순</> : <>최신순</>}
                                </p>
                                <ArrayChangeSvg
                                    width="32"
                                    height="20"
                                    viewBox="0 0 32 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10.7146 16.3403L10.7146 4.40811"
                                        stroke="#675B4F"
                                        strokeWidth="1.3"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M6.35156 8.57068L10.7144 4.20782L15.0773 8.57068"
                                        stroke="#675B4F"
                                        strokeWidth="1.3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M21.2854 3.65967L21.2854 15.5919"
                                        stroke="#675B4F"
                                        strokeWidth="1.3"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M25.6484 11.4293L21.2856 15.7922L16.9227 11.4293"
                                        stroke="#675B4F"
                                        strokeWidth="1.3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </ArrayChangeSvg>
                            </ArrayChangeContainer>
                            <MyReviewWidgetContainer>
                                {AlcholthatUserWriteforWidget.slice(
                                    offset,
                                    offset + limit,
                                ).map(
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
                        </>
                    )}
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
                    <ArrayChangeContainer onClick={ChangeArray}>
                        <p>{RecentColor ? <>최신순</> : <>오래된 순</>}</p>
                        <ArrayChangeSvg
                            width="32"
                            height="20"
                            viewBox="0 0 32 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.7146 16.3403L10.7146 4.40811"
                                stroke="#675B4F"
                                strokeWidth="1.3"
                                strokeLinecap="round"
                            />
                            <path
                                d="M6.35156 8.57068L10.7144 4.20782L15.0773 8.57068"
                                stroke="#675B4F"
                                strokeWidth="1.3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M21.2854 3.65967L21.2854 15.5919"
                                stroke="#675B4F"
                                strokeWidth="1.3"
                                strokeLinecap="round"
                            />
                            <path
                                d="M25.6484 11.4293L21.2856 15.7922L16.9227 11.4293"
                                stroke="#675B4F"
                                strokeWidth="1.3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </ArrayChangeSvg>
                    </ArrayChangeContainer>
                    <MyReviewWidgetContainer>
                        {AlcholthatUserWriteforWidget.map(
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
    padding-bottom: 5vw;
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

const ArrayChangeContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 1vw;
    margin-bottom: 0vw;
    cursor: pointer;
    p {
        font-size: 1.077vw;
    }
    @media screen and (max-width: 767px) {
        margin-top: 3vw;
        margin-bottom: 3vw;
        p {
            font-size: 3.077vw;
        }
    }
`;

const ArrayChangeSvg = styled.svg`
    width: 3vw;
    @media screen and (max-width: 767px) {
        width: 8.205vw;
    }
`;

const NoDataBox = styled.div`
    width: 100%;
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
const MobileHeaderTemporarySaveButton = styled.button`
    width: 22.131vw;
    height: 8.462vw;
    border: 1px solid #8b7e6a;
    border-radius: 10px;
    outline: 0;
    margin-top: 3.846vw;
    background: none;
    color: #675b4f;
    font-size: 3.333vw;
`;
