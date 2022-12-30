/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BackgroundTemplate from '../common/BackgroundTemplate';
import MonthBlock from './Block';

const MonthDrink: React.FC = () => {
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

    const isMobile = useMediaQuery({
        query: '(max-width:767px)',
    });

    const navigate = useNavigate();

    const gotoDrink = (drinkId: number) => {
        navigate(`/list/${drinkId}/spec`);
    };

    return (
        <BackgroundTemplate heightValue={hv}>
            <Inner>
                <Head>
                    <h1>이달의 전통주</h1>
                    <span>이달의 옛술 한 눈에 모아보기!</span>
                </Head>
                <Content>
                    <h1>1월</h1>
                    {isMobile ? (
                        <MMonthList>
                            <div onClick={() => gotoDrink(41)}>
                                <MonthBlock
                                    img="/images/Block/JanMDrink_1.png"
                                    contentNumber={1}
                                    contentWidth={32.6875}
                                    imgWidth={32.6875}
                                    btnImgLF={0}
                                    btnImgBT={0}
                                    btnArrowLF={0}
                                    btnArrowBT={0}
                                    mBtnImgBT={0.475}
                                    mBtnImgLF={1.575}
                                    mBtnArrowBT={0.475}
                                    mBtnArrowLF={1.575}
                                />
                            </div>
                            <div onClick={() => gotoDrink(223)}>
                                <MonthBlock
                                    img="/images/Block/JanMDrink_2.png"
                                    contentNumber={2}
                                    contentWidth={32.6875}
                                    imgWidth={32.6875}
                                    btnImgLF={0}
                                    btnImgBT={0}
                                    btnArrowLF={0}
                                    btnArrowBT={0}
                                    mBtnImgBT={0.475}
                                    mBtnImgLF={1.575}
                                    mBtnArrowBT={0.475}
                                    mBtnArrowLF={1.575}
                                />
                            </div>
                            <div onClick={() => gotoDrink(377)}>
                                <MonthBlock
                                    img="/images/Block/JanMDrink_3.png"
                                    contentNumber={3}
                                    contentWidth={32.6875}
                                    imgWidth={32.6875}
                                    btnImgLF={0}
                                    btnImgBT={0}
                                    btnArrowLF={0}
                                    btnArrowBT={0}
                                    mBtnImgBT={0.475}
                                    mBtnImgLF={1.575}
                                    mBtnArrowBT={0.475}
                                    mBtnArrowLF={1.575}
                                />
                            </div>
                        </MMonthList>
                    ) : (
                        <MonthList>
                            <div onClick={() => gotoDrink(41)}>
                                <MonthBlock
                                    img="/images/Block/JanDrink_1.png"
                                    contentNumber={1}
                                    contentWidth={69.875}
                                    imgWidth={69.875}
                                    btnImgLF={64.8875}
                                    btnImgBT={4.1875}
                                    btnArrowLF={64.8875}
                                    btnArrowBT={4.1875}
                                    mBtnImgLF={0}
                                    mBtnArrowBT={0}
                                    mBtnImgBT={0}
                                    mBtnArrowLF={0}
                                />
                            </div>
                            <div onClick={() => gotoDrink(223)}>
                                <MonthBlock
                                    img="/images/Block/JanDrink_2.png"
                                    contentNumber={2}
                                    contentWidth={69.875}
                                    imgWidth={69.875}
                                    btnImgLF={64.8875}
                                    btnImgBT={4.1875}
                                    btnArrowLF={64.8875}
                                    btnArrowBT={4.1875}
                                    mBtnImgLF={0}
                                    mBtnArrowBT={0}
                                    mBtnImgBT={0}
                                    mBtnArrowLF={0}
                                />
                            </div>
                            <div onClick={() => gotoDrink(377)}>
                                <MonthBlock
                                    img="/images/Block/JanDrink_3.png"
                                    contentNumber={3}
                                    contentWidth={69.875}
                                    imgWidth={69.875}
                                    btnImgLF={64.8875}
                                    btnImgBT={4.1875}
                                    btnArrowLF={64.8875}
                                    btnArrowBT={4.1875}
                                    mBtnImgLF={0}
                                    mBtnArrowBT={0}
                                    mBtnImgBT={0}
                                    mBtnArrowLF={0}
                                />
                            </div>
                        </MonthList>
                    )}
                </Content>
            </Inner>
        </BackgroundTemplate>
    );
};

const MMonthList = styled.div``;

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

    h1 {
        font-size: 1.5625em;
        color: #8e8372;
        margin-bottom: 0.9375em;
    }

    div {
        margin-bottom: 1.1875em;
    }

    @media (max-width: 767px) {
        margin-top: 1.875em;

        h1 {
            font-size: 1.125em;
            color: #8e8372;
        }
    }
`;

const MonthList = styled.div`
    h1 {
        font-size: 1.5625em;
        margin-bottom: 1.25em;
        @media (max-width: 767px) {
            font-weight: 400;
            font-size: 1.125em;
            line-height: 1.125em;
            margin-bottom: 0.9375em;
        }
    }
`;

export default MonthDrink;
