import React from 'react';
import styled from 'styled-components';
import BackgroundTemplate from '../common/BackgroundTemplate';

const ThirdMain: React.FC = () => {
    return (
        <BackgroundTemplate>
            <Inner>
                <InnerLeft>
                    <MachineWrap>
                        <MachineHead>
                            <div id="circleWrap">
                                <Circle />
                                <Circle />
                                <Circle />
                            </div>
                            <LongCircle />
                            <div id="circleWrap">
                                <Circle />
                                <Circle />
                                <Circle />
                            </div>
                        </MachineHead>
                        <MachineContent>
                            <RectangleWrap>
                                <Rectangle>
                                    <div />
                                </Rectangle>
                                <Rectangle>
                                    <div />
                                </Rectangle>
                                <Rectangle>
                                    <div />
                                </Rectangle>
                            </RectangleWrap>
                            <MachineBtnWrap>
                                <div>
                                    <div />
                                </div>
                            </MachineBtnWrap>
                        </MachineContent>
                    </MachineWrap>
                    <MachineText>
                        <p>
                            옛술의 전당에서는 <span>날씨/기분/상황에</span> 따라
                            전통주를
                            <br /> 추천해드리고 있습니다.
                        </p>
                    </MachineText>
                </InnerLeft>
                <div>
                    <svg
                        width="157"
                        height="157"
                        viewBox="0 0 157 157"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            cx="78.5"
                            cy="78.5"
                            r="78"
                            fill="white"
                            stroke="#675B4F"
                        />
                        <path
                            d="M58.76 95.04C68.12 95.04 75.32 88.4 75.32 78.96V77.52H58.08V81.16H70.84C70.36 86.96 65.48 91.28 58.92 91.28C51.44 91.28 46.16 85.84 46.16 78.28C46.16 70.76 51.44 65.36 58.84 65.36C64.32 65.36 68.84 68.36 70.16 72.4H74.72C73.04 66.28 66.92 61.52 58.76 61.52C48.96 61.52 41.96 68.6 41.96 78.28C41.96 87.96 48.96 95.04 58.76 95.04ZM95.7866 95.04C105.507 95.04 112.667 87.96 112.667 78.28C112.667 68.6 105.467 61.52 95.7466 61.52C86.0266 61.52 78.8666 68.6 78.8666 78.28C78.8666 87.96 86.0666 95.04 95.7866 95.04ZM95.7866 91.2C88.4666 91.2 83.0666 85.8 83.0666 78.28C83.0666 70.72 88.4266 65.36 95.7466 65.36C103.067 65.36 108.467 70.72 108.467 78.28C108.467 85.8 103.067 91.2 95.7866 91.2ZM118.036 85.44H121.076L122.116 62.28H117.036L118.036 85.44ZM119.556 94.96C121.236 94.96 122.516 93.68 122.516 92C122.516 90.36 121.236 89.08 119.556 89.08C117.876 89.08 116.596 90.36 116.596 92C116.596 93.68 117.876 94.96 119.556 94.96Z"
                            fill="#8B7E6A"
                        />
                    </svg>
                </div>
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
`;

const InnerLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 115px;
`;

const MachineWrap = styled.div`
    width: 853px;
    height: 503px;
    border: 1px solid #4f4941;
    border-radius: 47px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
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

const Circle = styled.div`
    box-sizing: border-box;
    width: 23.54px;
    height: 22.56px;
    background: #ffffff;
    border: 1px solid #cac2b7;
    border-radius: 50%;
`;

const LongCircle = styled.div`
    box-sizing: border-box;
    width: 593px;
    height: 85px;
    background: #ffffff;
    border: 1px solid #c3baae;
    border-radius: 42.5px;
    margin: 0 59.85px;
`;

const Rectangle = styled.div`
    box-sizing: border-box;
    width: 205.97px;
    height: 307.97px;
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
        height: 289.33px;
        width: 165.75px;
        border-right: 1px solid #675b4f;
        border-left: 1px solid #675b4f;
    }
`;

const MachineBtnWrap = styled.div`
    box-sizing: border-box;
    width: 57.87px;
    height: 307.97px;
    border: 1px solid #c4baae;
    border-radius: 47px;
    margin-left: 36.29px;
    display: flex;
    align-items: center;
    justify-content: center;
    > div {
        box-sizing: border-box;
        width: 44.14px;
        height: 270.7px;
        background: #ffffff;
        border: 1px solid #c4baae;
        border-radius: 47px;
        > div {
            box-sizing: border-box;
            width: 75.52px;
            height: 76.5px;
            background: #aaa39f;
            border: 1px solid #cac2b7;
            border-radius: 50%;
            margin-top: 160px;
            margin-left: -16.475px;
        }
    }
`;

const MachineText = styled.div`
    p {
        font-size: 25px;
        line-height: 175.5%;
        text-align: center;
        span {
            font-family: 'GmarketSansBold';
        }
    }
`;
