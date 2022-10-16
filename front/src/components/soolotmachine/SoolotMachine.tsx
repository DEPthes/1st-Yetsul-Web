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
                    결과확인
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
`;

const MachineResultBtn = styled.div`
    width: 157px;
    height: 157px;
    cursor: pointer;
    margin-left: 151.43px;
    border-radius: 50%;
    background: #ffffff;
    border: 1px solid #675b4f;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 35px;
    line-height: 35px;
    letter-spacing: -0.01em;
    color: #8b7e6a;
    font-family: 'LABDigital';
`;

const MachineText = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #675b4f;
    font-size: 25px;
    line-height: 190%;
    h1 {
        font-family: 'GmarketSansBold';
    }
`;

const MachineWrap = styled.div`
    width: 846.06px;
    height: 710.58px;
    border: 1px solid #4f4941;
    border-radius: 47px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 60px;
`;

const MachineHead = styled.div`
    width: 100%;
    margin-top: 34px;
    margin-bottom: 29px;
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
`;

const RectangleWrap = styled.div`
    display: flex;
`;

type isblack = {
    black?: boolean;
};

const Circle = styled.div<isblack>`
    box-sizing: border-box;
    width: 22.46px;
    height: 21.53px;
    background: ${(props) => (props.black ? '#AAA39F' : '#FFFFFF')};
    border: 1px solid #cac2b7;
    border-radius: 50%;
`;

const LongCircle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 578px;
    height: 82px;
    background: #ffffff;
    border: 1px solid #c3baae;
    border-radius: 42.5px;
    margin: 0 59.85px;
    h1 {
        font-family: 'LABDigital';
        font-size: 50px;
        line-height: 104%;
        color: #675b4f;
    }
`;

const Rectangle = styled.div`
    .cls-1 {
        fill: none;
        stroke: #a9a09c;
        stroke-miterlimit: 10;
        stroke-width: 4px;
    }
    .cls-2 {
        fill: none;
    }
    box-sizing: border-box;
    width: 196.55px;
    height: 293.89px;
    background: #ffffff;
    border: 1px solid #675b4f;
    border-radius: 47px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:not(:nth-of-type(3)) {
        margin-right: 23.54px;
    }
    > div {
        box-sizing: border-box;
        height: 276.91px;
        width: 157.24px;
        border-right: 1px solid #675b4f;
        border-left: 1px solid #675b4f;
    }
`;

const MachineBtnWrap = styled.div`
    box-sizing: border-box;
    width: 55.22px;
    height: 293.89px;
    border: 1px solid #675b4f;
    border-radius: 47px;
    margin-left: 36.29px;
    display: flex;
    align-items: center;
    justify-content: center;
    > div {
        box-sizing: border-box;
        width: 42.12px;
        height: 258.32px;
        background: #ffffff;
        border: 1px solid #675b4f;
        border-radius: 47px;
        > div {
            cursor: pointer;
            box-sizing: border-box;
            width: 72.07px;
            height: 73px;
            background: #675b4f;
            border: 1px solid #675b4f;
            border-radius: 50%;
            margin-top: 24px;
            margin-left: -16.475px;
            transition: all 1s ease-out;
        }
    }
`;
