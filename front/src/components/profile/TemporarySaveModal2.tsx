import React, { useState, useEffect, ReactNode } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import MyPagination from './MypagePagination';
import { MyReviewModalWidget } from './MyReviewModalWidget';

type ModalType = {
    ChangeOpenModalShow: () => void;
    OpenModal: boolean;
};

export const TemporarySaveModal: React.FC<ModalType> = ({
    OpenModal,
    ChangeOpenModalShow,
}) => {
    const [AlcholthatUserWrite, setAlcholthatUserWrite] = useState<DrinkType[]>(
        [],
    );
    const getData = () => {
        const JWT = localStorage.getItem('accessToken') || '';
        return axios.create({
            headers: { Authorization: `Bearer ${JWT}` },
        });
    };
    useEffect(() => {
        getData()
            .post('http://ec2-13-125-227-68.ap-northeast-2.compute.amazonaws.com:3000/review/user/temporary')
            .then((res) => setAlcholthatUserWrite(res.data))
            .catch((err) => console.log(err));
    }, []);
    if (!OpenModal) return null;
    return (
        <ModalInner>
            <Modal>
                <ModalUpper>
                    <ModalHeaderBox>
                        <h1>리뷰 임시저장</h1>
                        <p>내가 전에 썼던 글을 이어서 쓸 수 있어요!</p>
                    </ModalHeaderBox>
                    <CancleBtn
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={ChangeOpenModalShow}
                    >
                        <path
                            d="M9.34766 22.4608L21.8144 9.99404"
                            stroke="black"
                            strokeWidth="1.3"
                            strokeLinecap="round"
                        />
                        <path
                            d="M9.34766 9.99402L21.8144 22.4608"
                            stroke="black"
                            strokeWidth="1.3"
                            strokeLinecap="round"
                        />
                    </CancleBtn>
                </ModalUpper>

                <WidgetContainer>
                    {AlcholthatUserWrite.map(
                        (myreview: {
                            id: number;
                            alcoholId: number;
                            title: string;
                            star: number;
                        }) => (
                            <MyReviewModalWidget
                                key={myreview.id}
                                alcoholId={myreview.alcoholId}
                                title={myreview.title}
                                star={myreview.star}
                            />
                        ),
                    )}
                </WidgetContainer>
                <LowerShadowBox />
            </Modal>
        </ModalInner>
    );
};

const ModalInner = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgba(90, 90, 90, 0.5);
    backdrop-filter: blur(10px);
    z-index: 9999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
`;

const Modal = styled.div`
    width: 39.792vw;
    height: 34.479vw;
    display: flex;
    flex-direction: column;
    border-radius: 18px;
    background-color: white;
    h1 {
        font-size: 1.302vw;
        color: #454038;
        margin-bottom: 0.677vw;
        margin-left: 0.521vw;
    }
    p {
        font-size: 0.938vw;
        color: #8e8372;
        margin-left: 0.521vw;
        margin-bottom: 1.042vw;
    }
    @media screen and (max-width: 767px) {
        width: 85.128vw;
        height: 125.897vw;
        h1{ 
            font-size: 3.846vw;
            margin-bottom: 2.872vw;
        }
        p{
            font-size: 3.077vw;
            margin-left: 0;
            margin-bottom: 5.042vw;
        }
    }
`;

const ModalUpper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 2.604vw;
    margin-top: 1.302vw;
    @media screen and (max-width: 767px) {
        margin: 0 6.410vw;
        margin-top: 8.205vw;
    }
`;

const ModalHeaderBox = styled.div`
    display: flex;
    flex-direction: column;
    h1,p{
        margin-left: 0px;
    }
`;
const CancleBtn = styled.svg`
    margin-bottom: 1.563vw;
    cursor: pointer;
`;

const WidgetContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 2.604vw;
    overflow-y: scroll;
    height: 26vw;
    ::-webkit-scrollbar {
    width: 6px;
}

    ::-webkit-scrollbar-thumb {
    background: #675B4F; /* 스크롤바의 색상 */
    background-clip: padding-box;
}

    ::-webkit-scrollbar-track {
    background-color: white;
}
@media screen and (max-width: 767px) {
    height: 91.538vw;
    margin: 0 6.410vw;
    }
`;



const LowerShadowBox = styled.div`
    border-bottom-left-radius: 18px;
    border-bottom-right-radius: 18px;
    background: white;
    z-index: 3333;
    width: 39.792vw;
    height: 3.073vw;
    box-shadow: 0px -4px 14px rgba(0, 0, 0, 0.1);
`
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
