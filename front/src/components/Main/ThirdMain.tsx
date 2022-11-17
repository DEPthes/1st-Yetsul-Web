import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BackgroundTemplate from '../common/BackgroundTemplate';

const ThirdMain: React.FC = () => {
    return (
        <BackgroundTemplate heightValue="100%">
            <Inner>
                <InnerLeft>
                    <MachineText>
                        <p>
                            <span>당신의 날씨/기분/상황을 조합해보세요!</span>
                            <br />
                            당신의 전통주를 추천받아보세요!
                        </p>
                    </MachineText>
                    <MachineImg
                        src={`${process.env.PUBLIC_URL}/images/soolot.png`}
                        alt="soolot"
                    />
                    <Circle>
                        <Link to="/soolot">
                            <div />
                        </Link>
                    </Circle>
                </InnerLeft>
            </Inner>
        </BackgroundTemplate>
    );
};

export default ThirdMain;

const Inner = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3.6875em;
    @media (max-width: 767px) {
        margin-top: 0;
        zoom: 0;
    }
`;

const InnerLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    > a > svg {
        height: 4.09375em;
    }
`;

const MachineImg = styled.img`
    width: 25.25em;
    height: 24.625em;
    margin-bottom: 3.3125em;
    margin-left: 7.1875em;
    @media (max-width: 767px) {
        width: 17.165em;
        height: 16.9375em;
        margin-bottom: 2.9375em;
        margin-left: 4.1875em;
    }
`;

const MachineText = styled.div`
    margin-bottom: 1.875em;
    p {
        font-size: 1.5625em;
        line-height: 175.5%;
        text-align: center;
        color: #675b4f;
        span {
            font-family: 'GmarketSansBold';
        }
    }
    @media (max-width: 767px) {
        margin-bottom: 2.125em;
        p {
            font-size: 0.75em;
        }
    }
`;

const Circle = styled.div`
    @media (max-width: 767px) {
        width: 4.1875em;
        height: 4.1875em;
        display: flex;
        > a {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
    width: 8.5em;
    height: 8.5em;
    border: 1px solid #8b7e6a;
    border-radius: 50%;
    transition: all 0.3s cubic-bezier(0.67, 0.13, 0.1, 0.81),
        transform 0.15s cubic-bezier(0.67, 0.13, 0.1, 0.81);

    div {
        @media (max-width: 767px) {
            zoom: 0.5;
        }
        width: 8.5em;
        height: 8.5em;
        position: absolute;
        overflow: hidden;
        cursor: pointer;
    }

    div:before,
    div:after {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 1;
        transition: all 0.3s cubic-bezier(0.67, 0.13, 0.1, 0.81);
        display: flex;
        align-items: center;
        justify-content: center;
        color: #8b7e6a;
        font-size: 2.5em;
        font-family: 'LABDigital';
        cursor: pointer;
    }

    div:before {
        content: 'GO!';
        opacity: 1;
    }

    div:after {
        content: 'CLICK';
        top: -1.1em;
        opacity: 0;
    }

    div:hover:after {
        top: 0;
        opacity: 1;
    }

    div:hover:before {
        top: 1.1em;
        opacity: 0;
    }
`;
