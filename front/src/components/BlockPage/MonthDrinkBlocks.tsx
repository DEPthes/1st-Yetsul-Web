import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
                        <LinkWrapper to="/BlockPage/DecDrink">
                            <MonthBlock
                                contentName="12월"
                                img="/images/Block/JongGang.png"
                                contentNumber={1}
                            />
                        </LinkWrapper>
                        <div>
                            <MonthBlock
                                contentName="1월"
                                img="/images/Block/ready.png"
                                contentNumber={2}
                            />
                        </div>
                    </MonthList>
                </Content>
            </Inner>
        </BackgroundTemplate>
    );
};

const LinkWrapper = styled(Link)`
    text-decoration: none;
    color: #8e8372;
`;

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
    @media (max-width: 767px) {
        display: flex;
        justify-content: center;
    }
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
