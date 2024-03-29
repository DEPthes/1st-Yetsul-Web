import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MetaTag from '../../SEOMetatag';
import BackgroundTemplate from '../common/BackgroundTemplate';
import Block from './Block';

const AllDrinkRecommend = () => {
    const [hv, setHv] = useState('100%');
    useEffect(() => {
        if (
            document.body.clientWidth <= 767 &&
            document.body.clientWidth > 380
        ) {
            setHv('100vh');
        } else if (
            document.body.clientWidth <= 380 &&
            document.body.clientWidth > 360
        ) {
            setHv('fit-content');
        } else setHv('100%');
    }, []);

    return (
        <BackgroundTemplate heightValue={hv}>
            <MetaTag
                title="옛술의 전당 - 추천"
                description="옛술의 전당 매표소와 술롯머신으로 나와 가장 잘 어울리는, 나의 술BTI를 알아보세요!"
                keywords="전통주 추천, 우리나라 술 추천, 우리 술 추천, 옛술 추천, 술 추천, 술BTI, 옛술의 전당 슬롯머신, 옛술의 전당 매표소, 전통주, 옛술, 옛술의 전당, 우리술, 술, 우리나라 술, 청주, 약주, 증류주, 리큐르주, 과실주, 탁주, 막걸리"
                imgsrc="images/slotMachingImg.png"
                url="https://www.yetsul.com/AllDrinkRecommend"
            />
            <Inner>
                <Head>
                    <h1>옛술 추천</h1>
                    <span>* 취향에 맞는 다양한 전통주를 추천해드립니다!</span>
                </Head>
                <Content>
                    <MonthList>
                        <MonthContent to="/RecommendTicket">
                            <h1>옛술의 전당 매표소</h1>
                            <Block
                                img="/images/Block/Recommend_Ticket.png"
                                contentNumber={1}
                                contentWidth={32.6875}
                                imgWidth={32.6875}
                                btnImgLF={1.8875}
                                btnImgBT={1.8875}
                                btnArrowLF={1.8875}
                                btnArrowBT={1.8875}
                                mBtnImgLF={1.2875}
                                mBtnImgBT={1.2875}
                                mBtnArrowBT={1.2875}
                                mBtnArrowLF={1.2875}
                            />
                        </MonthContent>
                        <MonthContent to="/RecommendSlot">
                            <h1>슬롯 머신</h1>
                            <Block
                                img="/images/Block/Recommend_Slot.png"
                                contentNumber={2}
                                contentWidth={32.6875}
                                imgWidth={32.6875}
                                btnImgLF={1.8875}
                                btnImgBT={1.8875}
                                btnArrowLF={1.8875}
                                btnArrowBT={1.8875}
                                mBtnImgLF={1.2875}
                                mBtnArrowBT={1.2875}
                                mBtnImgBT={1.2875}
                                mBtnArrowLF={1.2875}
                            />
                        </MonthContent>
                    </MonthList>
                </Content>
            </Inner>
        </BackgroundTemplate>
    );
};

const Inner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70.5625em;
    height: auto;
    padding-top: 9.1875em;

    @media (max-width: 767px) {
        padding-top: 8.75em;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 21.125em;
    }
`;

const Head = styled.div`
    margin-top: 4.938em;
    width: 100%;
    height: 4.313em;
    border-bottom: 0.0625em solid #bbb6a8;
    padding-bottom: 2.063em;
    h1 {
        font-size: 1.875em;
        line-height: 1em;
        color: #454038;
        margin-bottom: 0.6em;
    }
    span {
        font-size: 1.25em;
    }
    @media (max-width: 767px) {
        margin-top: 0;
        height: auto;
        padding-bottom: 1.375em;
        h1 {
            color: #454038;
            margin-bottom: 1.2em;
            font-weight: 400;
            font-size: 1.25em;
            line-height: 1.25em;
        }
        span {
            font-weight: 400;
            font-size: 0.9375em;
            line-height: 0.9375em;
            color: #8e8372;
        }
    }
`;
const Content = styled.div`
    margin-top: 2.75em;
    width: 100%;
    display: flex;
    flex-direction: column;

    @media (max-width: 767px) {
        margin-top: 1.875em;
    }
`;

const MonthList = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    h1 {
        font-size: 1.5625em;
        margin-bottom: 1.25em;

        @media (max-width: 767px) {
            margin-top: 0;
            font-weight: 400;
            font-size: 1.125em;
            line-height: 1.125em;
            margin-bottom: 0.9375em;
        }
    }
`;

const MonthContent = styled(Link)`
    position: relative;
    width: 32.6875em;
    height: 12.8125em;
    border-radius: 1.125em;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #8e8372;

    @media (max-width: 767px) {
        width: 21.0625em;
        height: 8.3125em;
        font-weight: 400;
        margin-bottom: 4.375em;
    }
`;
export default AllDrinkRecommend;
