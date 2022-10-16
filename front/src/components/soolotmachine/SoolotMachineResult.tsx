import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { RootState } from '../../store/config';
import BackgroundTemplate from '../common/BackgroundTemplate';

const SoolotMachineResult: React.FC = () => {
    const resultData = useSelector((state: RootState) => {
        return state.slotMachineResult.array;
    });

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
                            <h1>이런 옛술은 어때요?</h1>
                        </LongCircle>
                        <div id="circleWrap">
                            <Circle />
                            <Circle black />
                            <Circle />
                        </div>
                    </MachineHead>
                    <MachineContent>
                        <RectangleWrap>
                            {resultData.map((el) => {
                                return (
                                    <Rectangle key={resultData.indexOf(el)}>
                                        <ResultInner>
                                            <ResultHead>
                                                <p>
                                                    {
                                                        {
                                                            1: `탁주`,
                                                            2: `과실주`,
                                                            3: `약주`,
                                                            4: `청주`,
                                                            5: `증류주`,
                                                            6: `리큐르주`,
                                                        }[el.category]
                                                    }
                                                </p>
                                            </ResultHead>
                                            <ResultContents>
                                                <ResultImage>
                                                    <img
                                                        src={el.alcoholImage}
                                                        alt="drinkImage"
                                                    />
                                                    <div>
                                                        <div>
                                                            <svg
                                                                width="14"
                                                                height="14"
                                                                viewBox="0 0 14 14"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M6.04426 1.10489C6.33393 0.163822 7.66607 0.163825 7.95574 1.1049L8.80337 3.85854C8.93251 4.27807 9.32015 4.56434 9.75911 4.56434L12.6123 4.56434C13.5679 4.56434 13.9791 5.77633 13.2209 6.35785L10.8212 8.19818C10.4895 8.45255 10.351 8.88639 10.474 9.28589L11.3684 12.1914C11.6549 13.1224 10.577 13.8719 9.8041 13.2792L7.60855 11.5954C7.24956 11.3201 6.75044 11.3201 6.39145 11.5954L4.19591 13.2792C3.42301 13.8719 2.34506 13.1224 2.63161 12.1914L3.52599 9.28588C3.64897 8.88639 3.51049 8.45255 3.1788 8.19818L0.779129 6.35785C0.0208566 5.77633 0.432093 4.56434 1.38768 4.56434L4.24089 4.56434C4.67985 4.56434 5.06749 4.27807 5.19663 3.85853L6.04426 1.10489Z"
                                                                    fill="#8E8372"
                                                                />
                                                            </svg>
                                                            <p>
                                                                {Math.round(
                                                                    +el.star *
                                                                        10,
                                                                ) / 10}
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <p>
                                                                👍{' '}
                                                                {el.likeCount}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </ResultImage>
                                                <ResultName>
                                                    <h1>{el.AlcoholName}</h1>
                                                    <p>
                                                        <Link
                                                            to={`/list/${el.id}/spec`}
                                                        >
                                                            상세페이지 &gt;
                                                        </Link>
                                                    </p>
                                                </ResultName>
                                            </ResultContents>
                                        </ResultInner>
                                    </Rectangle>
                                );
                            })}
                        </RectangleWrap>
                        <MachineBtnWrap>
                            <div>
                                <div />
                            </div>
                        </MachineBtnWrap>
                    </MachineContent>
                    <MachineText>
                        <MachineResultBtn>
                            <Link to="/soolot">
                                <div />
                            </Link>
                        </MachineResultBtn>
                    </MachineText>
                </MachineWrap>
            </Inner>
        </BackgroundTemplate>
    );
};

export default SoolotMachineResult;

const ResultInner = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const ResultHead = styled.div`
    border: 1px solid #8b7e6a;
    border-radius: 1.125em;
    width: 4.886em;
    height: 2.058em;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0.893em;
    margin-bottom: 0.938em;
    margin-top: 0.5em;
`;

const ResultContents = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: calc(100% - 2.125em);
    justify-content: space-between;
`;

const ResultImage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    > img {
        width: 8.125em;
    }
    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 1.25em;
        margin-bottom: 0.5em;
        > div:first-of-type {
            margin-right: 1em;
        }
        > div {
            display: flex;
        }
    }
`;

const ResultName = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 0.75em;
    > h1 {
        font-family: 'GmarketSansMedium';
        font-style: normal;
        font-weight: 400;
        font-size: 1.125em;
        line-height: 100%;
        letter-spacing: -0.01em;
        color: #675b4f;
        width: 7.889em;
        display: flex;
        justify-content: center;
        white-space: normal;
    }
    > p {
        margin-top: 0.923em;
        font-family: 'GmarketSansMedium';
        font-style: normal;
        font-weight: 400;
        font-size: 0.813em;
        line-height: 100%;
        letter-spacing: -0.01em;

        > a {
            text-decoration: none;
            color: #675b4f;
        }
    }
`;

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
    }
`;

const MachineResultBtn = styled.div`
    width: 9.813em;
    height: 9.813em;
    cursor: pointer;
    border-radius: 50%;
    background: #ffffff;
    border: 1px solid #675b4f;
    line-height: 100%;
    letter-spacing: -0.01em;
    color: #8b7e6a;
    font-family: 'LABDigital';
    > a {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #8b7e6a;
        text-decoration: none;
    }
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
        content: '다시하기';
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
    h1 {
        font-size: 1.563em;
        font-family: 'GmarketSansBold';
    }
    @media (max-width: 767px) {
        zoom: 1.5;
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
    @media (max-width: 767px) {
        zoom: 0.4;
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
`;

const RectangleWrap = styled.div`
    display: flex;
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
    &:not(:nth-of-type(3)) {
        margin-right: 1.471em;
    }
    > div {
        box-sizing: border-box;
        height: 17.307em;
        width: 9.828em;
        border-right: 1px solid #675b4f;
        border-left: 1px solid #675b4f;
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
    > div {
        box-sizing: border-box;
        width: 2.632em;
        height: 16.145em;
        background: #ffffff;
        border: 1px solid #675b4f;
        border-radius: 47px;
        > div {
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
