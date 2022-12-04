import axios from 'axios';
import React, { useRef } from 'react';
import $ from 'jquery';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { RootState } from '../../store/config';
import { setSoolotResult } from '../../store/slices/slotMachineResultSlice';
import BackgroundTemplate from '../common/BackgroundTemplate';
import { feelingArr } from './FeelingCarousel';
import { placeArr } from './PlaceCarousel';
import { weatherArr } from './WeatherCarousel';
import CarouselTemplate, { CallFn } from './CarouselTemplate';

const SoolotMachine: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const soolotMachineData = useSelector((state: RootState) => {
        return state.slotMachine.request;
    });

    const ChildComponentRef1 = useRef<CallFn>(null);
    const ChildComponentRef2 = useRef<CallFn>(null);
    const ChildComponentRef3 = useRef<CallFn>(null);

    const onClickRandom = () => {
        $('#random-button').css('margin-top', '160px');
        setTimeout(() => {
            $('#random-button').css('margin-top', '24px');
        }, 600);
        if (ChildComponentRef1.current) {
            ChildComponentRef1.current?.random();
        }
        if (ChildComponentRef2.current) {
            ChildComponentRef2.current?.random();
        }
        if (ChildComponentRef3.current) {
            ChildComponentRef3.current?.random();
        }
    };

    const postSoolot = () => {
        axios
            .post(
                'http://ec2-13-125-227-68.ap-northeast-2.compute.amazonaws.com:3000/slotMachine/total',
                soolotMachineData,
            )
            .then((res) => {
                dispatch(setSoolotResult(res.data));
                navigate('/soolotres');
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <BackgroundTemplate heightValue="100%">
            <Inner>
                <MachineWrap>
                    <MachineHead>
                        <div id="circleWrap">
                            <Circle />
                            <Circle black />
                            <Circle />
                        </div>
                        <LongCircle>
                            <h1>SOOLOT MACHINE</h1>
                        </LongCircle>
                        <div id="circleWrap">
                            <Circle />
                            <Circle black />
                            <Circle />
                        </div>
                    </MachineHead>
                    <MachineContent>
                        <RectangleWrap>
                            <Rectangle>
                                <CarouselTemplate
                                    dataArr={weatherArr}
                                    type="weather"
                                    ref={ChildComponentRef1}
                                />
                            </Rectangle>
                            <Rectangle>
                                <CarouselTemplate
                                    dataArr={feelingArr}
                                    type="mood"
                                    ref={ChildComponentRef2}
                                />
                            </Rectangle>
                            <Rectangle>
                                <CarouselTemplate
                                    dataArr={placeArr}
                                    type="situation"
                                    ref={ChildComponentRef3}
                                />
                            </Rectangle>
                        </RectangleWrap>
                        <MachineBtnWrap>
                            <div>
                                <div
                                    onClick={onClickRandom}
                                    aria-hidden
                                    id="random-button"
                                />
                            </div>
                        </MachineBtnWrap>
                    </MachineContent>
                    <MachineText>
                        <h1>[ 슬롯머신 사용법 ]</h1>
                        <p>1. 날씨 / 기분 / 상황 선택 후 조합하기</p>
                        <p>2. 손잡이를 당겨 랜덤 조합하기</p>
                    </MachineText>
                </MachineWrap>
                <MachineResultBtn onClick={postSoolot}>
                    <div />
                </MachineResultBtn>
            </Inner>
        </BackgroundTemplate>
    );
};

export default SoolotMachine;

const Inner = styled.div`
    width: 100%;

    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    zoom: 0.9;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    @media (max-width: 767px) {
        zoom: 1;
        flex-direction: column;
        padding: 0 2.5em;
    }
`;

const MachineResultBtn = styled.div`
    width: 9.813em;
    height: 9.813em;
    cursor: pointer;
    margin-left: 9.464em;
    border-radius: 50%;
    background: #ffffff;
    border: 1px solid #675b4f;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: -0.01em;
    color: #8b7e6a;
    font-family: 'LABDigital';
    transition: all 0.3s cubic-bezier(0.67, 0.13, 0.1, 0.81),
        transform 0.15s cubic-bezier(0.67, 0.13, 0.1, 0.81);
    div {
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
        font-size: 2.063em;
        font-family: 'LABDigital';
        cursor: pointer;
    }

    div:before {
        content: '결과확인';
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
    @media (max-width: 767px) {
        display: flex;
        margin-left: 0;
        zoom: 0.6;
        margin-top: 4.188em;
    }
`;

const MachineText = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #675b4f;
    line-height: 190%;
    zoom: 1.2;
    h1 {
        font-size: 1.563em;
        font-family: 'GmarketSansBold';
    }
    @media (max-width: 767px) {
        zoom: 1.5;
        margin: 1.975em 0;
    }
`;

const MachineWrap = styled.div`
    width: 52.879em;
    height: 44.411em;
    border: 1px solid #4f4941;
    border-radius: 47px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 3.75em;
    padding: 0 1.145625em;

    @media (max-width: 767px) {
        zoom: 0.4;
        margin-top: 10em;
        width: 80%;
        height: fit-content;
    }
`;

const MachineHead = styled.div`
    width: 100%;
    margin-top: 2.125em;
    margin-bottom: 1.813em;
    display: flex;
    justify-content: center;

    #circleWrap {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`;

const MachineContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 0 1em;
    box-sizing: border-box;
`;

const RectangleWrap = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    width: 90%;
`;

type isblack = {
    black?: boolean;
};

const Circle = styled.div<isblack>`
    box-sizing: border-box;
    width: 1.404em;
    height: 1.346em;
    background: ${(props) => (props.black ? '#AAA39F' : '#FFFFFF')};
    border: 1px solid #cac2b7;
    border-radius: 50%;
    @media (max-width: 767px) {
        width: 1.004em;
        height: 0.946em;
    }
`;

const LongCircle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 36.125em;
    height: 5.125em;
    background: #ffffff;
    border: 1px solid #c3baae;
    border-radius: 42.5px;
    margin: 0 3.741em;

    h1 {
        font-family: 'LABDigital';
        font-size: 3.125em;
        line-height: 104%;
        color: #675b4f;
    }
`;
const Rectangle = styled.div`
    .cls-1 {
        fill: none;
        stroke: #a9a09c;
        stroke-miterlimit: 10;
        stroke-width: 6px;
    }
    .cls-2 {
        fill: none;
    }
    box-sizing: border-box;
    width: 12.284em;
    height: 18.368em;
    background: #ffffff;
    border: 1px solid #675b4f;
    border-radius: 2.938em;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 767px) {
        width: 31%;
    }

    &:not(:nth-of-type(3)) {
        margin-right: 1.471em;
        @media (max-width: 767px) {
            margin-right: 0.471em;
        }
    }
    > div {
        box-sizing: border-box;
        height: 17.307em;
        width: 9.828em;
        border-right: 1px solid #675b4f;
        border-left: 1px solid #675b4f;

        @media (max-width: 767px) {
            height: 88%;
            box-sizing: border-box;
            width: 80%;
        }
    }
`;

const MachineBtnWrap = styled.div`
    box-sizing: border-box;
    width: 3.451em;
    height: 18.368em;
    border: 1px solid #675b4f;
    border-radius: 47px;
    margin-left: 2.268em;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 767px) {
        margin-left: 1.5em;
    }

    > div {
        box-sizing: border-box;
        width: 2.632em;
        height: 16.145em;
        background: #ffffff;
        border: 1px solid #675b4f;
        border-radius: 47px;
        @media (max-width: 767px) {
            height: 90%;
        }
        > div {
            cursor: pointer;
            box-sizing: border-box;
            width: 4.504em;
            height: 4.563em;
            background: #675b4f;
            border: 1px solid #675b4f;
            border-radius: 50%;
            margin-top: 1.5em;
            margin-left: -1.03em;
            transition: all 1s ease-out;
        }
    }
`;
