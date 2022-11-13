import React, { useEffect, useState } from 'react';
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

    return (
        <BackgroundTemplate heightValue={hv}>
            <Inner>
                <Head>
                    <h1>이달의 전통주</h1>
                    <span>전통주 이야기와 함께하는 이달의 전통주 추천!</span>
                </Head>
                <Content>
                    <MonthList>
                        <MonthBlock
                            contentName="9월"
                            img="/images/septemberDrink.png"
                            contentNumber={1}
                        />
                        <div>
                            <MonthBlock
                                contentName="10월"
                                img="/images/septemberDrink.png"
                                contentNumber={2}
                            />
                        </div>
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
    width: 1129px;
    height: auto;
    padding-top: 147px;

    @media (max-width: 767px) {
        padding-top: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 338px;
    }
`;

const Head = styled.div`
    margin-top: 79px;
    width: 100%;
    height: 69px;
    border-bottom: 1px solid #bbb6a8;
    padding-bottom: 40px;
    @media (max-width: 767px) {
        margin-top: 43px;
        padding-bottom: 25px;
    }
    h1 {
        font-size: 30px;
        line-height: 30px;
        color: #454038;
        margin-bottom: 18px;
        @media (max-width: 767px) {
            font-weight: 400;
            font-size: 20px;
            line-height: 20px;
        }
    }
    span {
        font-size: 20px;

        @media (max-width: 767px) {
            font-weight: 400;
            font-size: 15px;
            line-height: 15px;
        }
    }
`;
const Content = styled.div`
    margin-top: 44px;
    width: 100%;
    display: flex;
    flex-direction: column;

    @media (max-width: 767px) {
        margin-top: 30px;
    }
`;

const MonthList = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    h1 {
        font-size: 25px;
        margin-bottom: 20px;
        @media (max-width: 767px) {
            font-weight: 400;
            font-size: 18px;
            line-height: 18px;
            margin-bottom: 15px;
        }
    }
`;

export default MonthDrink;
