import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { RootState } from '../../store/config';
import {
    setColor1,
    setColor2,
} from '../../store/slices/updateBackgroundGradientSlice';
import DrinkSwiper from './DrinkSwiper';

// useRef 사용시 함수 type 선언
type refType = {
    SliderHandler: () => void;
};

const Main: React.FC = () => {
    // 배경 색 바꾸기
    const dispatch = useDispatch();
    const temp = useSelector((state: RootState) => {
        return state.updateBackgroundGradient.color1;
    });
    const [btnHover, setBtnHover] = useState<string>('#FFE1DC');

    // 술잔 버튼 클릭시 실행되는 함수
    const [isDone, setIsDone] = useState<boolean>(false); // boolean 속성으로 중복 클릭 방지
    const fnRef = useRef<refType>(null); // 자식 컴포넌트의 함수 호출
    const ClickSoju = () => {
        if (!isDone) {
            setIsDone(true);
            const target =
                document.querySelector<HTMLElement>('.tableCellInner') ||
                document.body;
            if (temp === '#E2DFDA') {
                setBtnHover('#FFE5BF');
                target.style.setProperty('--first-color', '#FFE1DC');
                target.style.setProperty(
                    '--second-color',
                    'rgba(244, 183, 156, 0)',
                );
                dispatch(setColor1('#FFE1DC'));
                dispatch(setColor2('rgba(244, 183, 156, 0)'));
            } else if (temp === '#FFE1DC') {
                setBtnHover('#FAF9F9');
                target.style.setProperty('--first-color', '#FFE5BF');
                target.style.setProperty('--second-color', '#fff9f7');
                dispatch(setColor1('#FFE5BF'));
                dispatch(setColor2('#fff9f7'));
            } else if (temp === '#FFE5BF') {
                setBtnHover('#FFE1DC');
                target.style.setProperty('--first-color', '#E2DFDA');
                target.style.setProperty('--second-color', '#fff');
                dispatch(setColor1('#E2DFDA'));
                dispatch(setColor2('#fff'));
            }

            if (fnRef.current) {
                fnRef.current.SliderHandler();
            }

            setTimeout(() => {
                setIsDone(false);
            }, 1000);
        }
    };

    // 하단 배너 자동 carousel
    const [currentBannerIndex, setCurrentBannerIndex] = useState<number>(0);
    const numberRef = useRef(0);

    useEffect(() => {
        // background color 변경
        const target =
            document.querySelector<HTMLElement>('.tableCellInner') ||
            document.body;
        if (temp === '#E2DFDA') {
            target.style.setProperty('--first-color', '#E2DFDA');
            target.style.setProperty('--second-color', '#fff');
            setBtnHover('#FFE1DC');
        } else if (temp === '#FFE1DC') {
            target.style.setProperty('--first-color', '#FFE1DC');
            target.style.setProperty(
                '--second-color',
                'rgba(244, 183, 156, 0)',
            );
            setBtnHover('#FFE5BF');
        } else if (temp === '#FFE5BF') {
            target.style.setProperty('--first-color', '#FFE5BF');
            target.style.setProperty('--second-color', '#fff9f7');
            setBtnHover('#FAF9F9');
        }

        // carousel
        const BannerCarousel = setInterval(() => {
            if (numberRef.current >= 1) {
                numberRef.current = 0;
            } else {
                numberRef.current += 1;
            }
            setCurrentBannerIndex(numberRef.current);
        }, 8000);
        return () => {
            clearInterval(BannerCarousel);
        };
    }, []);

    return (
        <MainStyle className="tableCellInner">
            <div id="line" />
            <Inner>
                <InnerLeft>
                    <InnerText>
                        <div>
                            <h1>9月,</h1>
                        </div>
                        <div>
                            <h1>전통주와 함께하는</h1>
                        </div>
                        <div>
                            <h1>개강파티</h1>
                            <img
                                src="https://s3-alpha-sig.figma.com/img/bbf8/2db6/afdd82e495d4eede9bb0456081a72bc1?Expires=1659916800&Signature=airT2ZvlIFlTkOPuAqwdX9Rf~YuQ~EhJEXASMCA3WV8YWKtq95~GNH7PQPv0bhtfJHhdKRG-qQbB1tMQcfNCEEULdrnQqtJhltSZOsXElaBuQ4Y0yIaxPC9P1akJ9aFYExC7LXweM1vv~uwtk1ZvBjqhQI3Ojwvx4eIqFDJVkAKF2csuQnvpQ2~MZEbL8aBhzcgIAlPHAN8QQOf6-Brq41LURM-a7r32vFyA91D~y5kwKwjwhjPBhT6ftKZ0H5-RQGuFvszWF14g5qMvzjAaNPxLEQE28e5MT~zuweL449vssUuZ~8Vk52slC59mvUpwZc6y5L9XzdpG8CrmIVDRPA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                                alt="underbar"
                            />
                            <h1>어때요?</h1>
                        </div>
                        <div>
                            <p>이달의 술 한눈에 보기</p>
                            <svg
                                width="11"
                                height="18"
                                viewBox="0 0 11 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M2 2L9 8.93636L2 15.8727"
                                    stroke="#8B7E6A"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>
                    </InnerText>
                    <FootBanner>
                        <div
                            style={{
                                transform: `translateX(${
                                    -50 * currentBannerIndex
                                }%)`,
                            }}
                        >
                            <FootBannerInner>
                                <div />
                                <div id="banner-text">
                                    <h3>
                                        <span>
                                            옛술의 전당에서 나만의 작품과
                                            옛술을!
                                        </span>
                                        <br />
                                        7가지 질문을 통해 나만의 작품과
                                        <br />
                                        옛술을 추천해드립니다. 안주 준비 고?
                                    </h3>
                                </div>
                                <Circle>
                                    <div />
                                </Circle>
                            </FootBannerInner>
                            <FootBannerInner>
                                <div />
                                <div id="banner-text">
                                    <h3>
                                        <span>돌려돌려 술롯머신</span>
                                        <br />
                                        날씨 / 기분 / 상황 조합으로 옛술을
                                        <br />
                                        추천받을 수 있습니다. 오늘의 옛술은?
                                    </h3>
                                </div>
                                <Circle>
                                    <Link to="soolot">
                                        <div />
                                    </Link>
                                </Circle>
                            </FootBannerInner>
                        </div>
                    </FootBanner>
                </InnerLeft>
                <InnerRight>
                    <DrinkSwiper ref={fnRef} />
                    <div className="leftLine">
                        <div id="line" />
                        <SojuBtn
                            color={btnHover}
                            aria-hidden="true"
                            id="svgBtn"
                            onClick={ClickSoju}
                            onKeyDown={ClickSoju}
                        >
                            <div id="svgIcon">
                                <svg
                                    width="50"
                                    height="35"
                                    viewBox="0 0 50 35"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M48.7757 2.96372C47.6353 16.1841 37.3226 26.45 24.8651 26.45C12.4076 26.45 2.09493 16.1841 0.954535 2.96373C0.877347 2.0689 1.61493 1.28002 2.6001 1.28002L47.1301 1.28001C48.1153 1.28001 48.8528 2.0689 48.7757 2.96372Z"
                                        stroke="#8B7E6A"
                                        strokeWidth="1.5"
                                    />
                                    <path
                                        d="M13.6278 34.07C13.9305 32.6126 15.1118 31.2065 17.0778 30.083C19.3584 28.7799 22.559 27.95 26.135 27.95C29.711 27.95 32.9116 28.7799 35.1921 30.083C37.1582 31.2065 38.3394 32.6126 38.6422 34.07L13.6278 34.07Z"
                                        stroke="#8B7E6A"
                                        strokeWidth="1.5"
                                    />
                                    <path
                                        d="M1.37012 5.60995H12.8001"
                                        stroke="#8B7E6A"
                                        strokeWidth="1.5"
                                    />
                                    <path
                                        d="M2.64014 9.41995L10.2601 9.41995"
                                        stroke="#8B7E6A"
                                        strokeWidth="1.5"
                                    />
                                    <path
                                        d="M3.91016 13.23L8.99016 13.23"
                                        stroke="#8B7E6A"
                                        strokeWidth="1.5"
                                    />
                                </svg>
                            </div>
                        </SojuBtn>
                        <div id="line" />
                    </div>
                </InnerRight>
            </Inner>
        </MainStyle>
    );
};

export default Main;

const MainStyle = styled.div`
    @property --first-color {
        syntax: '<color>';
        initial-value: #e2dfda;
        inherits: false;
    }
    @property --second-color {
        syntax: '<color>';
        initial-value: #ffffff;
        inherits: false;
    }
    width: 100%;
    height: 100%;
    background: radial-gradient(
        var(--first-position) var(--second-position) at var(--third-position)
            var(--fourth-position),
        var(--first-color) 0%,
        var(--second-color) 100%
    );
    --first-position: 85.83%;
    --second-position: 271.28%;
    --third-position: -7.4%;
    --fourth-position: -7.13%;
    --first-color: #e2dfda;
    --second-color: #fff;
    transition: --first-color 0.3s, --second-color 0.3s;
    zoom: 0.9;

    #line {
        display: block;
        z-index: 999;
    }
    & > #line {
        border-bottom: 1px solid #bbb6a8;
        width: 85%;
        height: 162px;
        float: right;
    }
`;

type colorType = {
    color: string;
};

const InnerLeft = styled.div`
    width: 50%;
    height: calc(100% - 282px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #bbb6a8;
    margin-bottom: 282.1px;
`;

const InnerRight = styled.div`
    width: 50%;
    height: calc(100% + 162px);
    margin-top: -162px;
    display: flex;
    position: relative;

    .leftLine {
        position: absolute;
        right: 236.5px;
        z-index: 1000;
        display: flex;
        flex-direction: column;
        height: calc(100% + 4px);
        width: 127px;
        display: flex;
        align-items: center;
        #line:nth-of-type(1) {
            z-index: 1000;
            height: 268px;
            width: 1px;
            border-left: 1px solid #bbb6a8;
        }
        #line:not(:first-of-type) {
            height: calc(100% - 268px - 127px);
            bottom: 0;
            width: auto;
            border-left: 1px solid #bbb6a8;
        }
    }
`;

const SojuBtn = styled.div<colorType>`
    width: 127px;
    height: 127px;
    z-index: 999;
    border: 1px solid #8b7e6a;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.6s ease;
    cursor: pointer;
    &:hover {
        background: ${(props) => props.color};
        width: 100%;
    }
    #svgIcon {
        z-index: 1000;
        margin-top: 5px;
        height: 35px;
    }
`;

const Inner = styled.div`
    width: 100%;
    height: calc(100% - 162px);
    display: flex;
    & > #line:nth-of-type(2) {
        left: 50%;
        transform: translateX(-50%);
        top: 1px;
        height: calc(100% - 1px);
        width: auto;
        border-left: 1px solid #bbb6a8;
    }
`;

const FootBanner = styled.div`
    position: absolute;
    height: 281px;
    width: calc(50% - 1px);
    bottom: 0;
    left: 0;
    overflow: hidden;
    border-right: 1px solid #bbb6a8;
    border-top: 1px solid #bbb6a8;

    > div {
        display: flex;
        width: 200%;
        height: 100%;
        transition: 2s ease;
    }
`;

const FootBannerInner = styled.div`
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
    display: flex;
    flex-direction: row;
    height: 100%;
    > div:first-of-type {
        width: 198px;
        height: 123px;
        border: 1px solid #999;
        background: #d9d9d9;
    }
    #banner-text {
        h3 {
            font-size: 25px;
            line-height: 42px;
            letter-spacing: -0.01em;
            color: #8b7e6a;
            font-family: 'GmarketSansLight';
            span {
                font-family: 'GmarketSansMedium';
            }
        }
    }
`;

const Circle = styled.div`
    width: 136px;
    height: 136px;
    border: 1px solid #8b7e6a;
    border-radius: 50%;
    transition: all 0.3s cubic-bezier(0.67, 0.13, 0.1, 0.81),
        transform 0.15s cubic-bezier(0.67, 0.13, 0.1, 0.81);
    z-index: 1000;

    div {
        width: 136px;
        height: 136px;
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
        cursor: pointer;
        transform: rotate(-26.9deg);
    }

    div:before {
        content: 'START';
        opacity: 1;
    }

    div:after {
        content: 'CLICK';
        top: -44px;
        opacity: 0;
    }

    div:hover:after {
        top: 0;
        opacity: 1;
    }

    div:hover:before {
        top: 44px;
        opacity: 0;
    }
`;

const InnerText = styled.div`
    margin-left: 100px;
    font-family: 'GmarketSansLight';
    > div:first-of-type {
        font-size: 60px;
        font-family: 'GmarketSansMedium';
        line-height: 60px;
        color: #8b7e6a;
        font-weight: 400;
        margin-bottom: 43px;
    }
    div:nth-of-type(2) {
        font-size: 58px;
        line-height: 58px;
        letter-spacing: -0.01em;
        font-weight: 300;
        margin-bottom: 20px;
    }
    div:nth-of-type(3) {
        font-size: 85px;
        font-family: 'GmarketSansLight';
        line-height: 85px;
        display: flex;
        position: relative;
        h1:first-of-type {
            margin-right: 20px;
            font-family: 'GmarketSansMedium';
        }
        img {
            position: absolute;
            width: 433px;
            height: 433px;
            top: -95px;
            left: -60px;
        }
    }
    div:nth-of-type(4) {
        width: 210px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 61px;
        font-family: 'GmarketSansMedium';
        font-size: 20px;
        letter-spacing: -0.01em;
        color: #8b7e6a;
    }
`;
