import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../store/config';
import { setFormModal } from '../../store/slices/formModalSlice';
import {
    setColor1,
    setColor2,
} from '../../store/slices/updateBackgroundGradientSlice';
import DrinkSwiper from './DrinkSwiper';
import FootBannerSwiper from './FootBannerSwiper';
import FormModal from './FormModal';

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
    }, []);

    const isModal = useSelector((state: RootState) => {
        return state.formModal.modal;
    });

    const handleModal = () => {
        const head = document.getElementsByClassName('head')[0];
        const nav = document.getElementById('fp-nav');
        dispatch(setFormModal(!isModal));
        if (!isModal) {
            $('body').on('scroll mousewheel', (event) => {
                event.preventDefault();
                event.stopPropagation();
                return false;
            });
            head.className = 'head is-blurred';
            if (nav) {
                nav.className = 'right is-blurred';
            }
        } else {
            $('body').off('scroll mousewheel');
            head.className = 'head';
            if (nav) {
                nav.className = 'right';
            }
        }
    };

    return (
        <MainStyle className="tableCellInner">
            <div id="line" />
            <Inner>
                <InnerLeft>
                    <InnerText>
                        <div>
                            <h1>10月,</h1>
                        </div>
                        <div>
                            <h1>
                                왜 벌써 <span>중간고사인건데,</span>
                            </h1>
                        </div>
                        <div>
                            <div>
                                <h1>날 위로해줄 한 잔, </h1>
                            </div>

                            <div>
                                <h1>이 술 어때요?</h1>
                            </div>
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
                    <FootBannerSwiper />
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
            <FormBtn onClick={handleModal}>
                <div>
                    <svg
                        width="32"
                        height="40"
                        viewBox="0 0 32 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect
                            x="0.5"
                            y="0.5"
                            width="31"
                            height="39"
                            stroke="white"
                        />
                        <path d="M6 8H25" stroke="white" />
                        <path d="M6 8H25" stroke="white" />
                        <path d="M6 8H25" stroke="white" />
                        <path d="M6 14H25" stroke="white" />
                        <path d="M6 14H25" stroke="white" />
                        <path d="M6 14H25" stroke="white" />
                        <path d="M6 20H25" stroke="white" />
                        <path d="M6 20H25" stroke="white" />
                        <path d="M6 20H25" stroke="white" />
                    </svg>
                </div>
            </FormBtn>
            {isModal && <FormModal modal={handleModal} />}
        </MainStyle>
    );
};

export default Main;

const FormBtn = styled.div`
    z-index: 1001;
    cursor: pointer;
    position: absolute;
    bottom: 5.3125em;
    right: 5.3125em;
    box-sizing: border-box;
    width: 5.25em;
    height: 5.25em;

    background: #8b7e6a;
    border: 1px solid #675b4f;
    border-radius: 50%;
    @media (max-width: 767px) {
        top: 80%;
        right: 1.0625em;
        width: 2.375em;
        height: 2.375em;
    }
    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        > svg {
            height: 2.5em;
            @media (max-width: 767px) {
                height: 1.125em;
            }
        }
    }
`;

const MainStyle = styled.div`
    position: relative;
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

    #line {
        display: block;
        z-index: 999;
    }
    & > #line {
        border-bottom: 1px solid #bbb6a8;
        width: 85%;
        height: 9.1875em;
        float: right;
        @media (max-width: 767px) {
            border-bottom: none;
            height: 6.0625em;
            width: 100%;
        }
    }
`;

type colorType = {
    color: string;
};

const InnerLeft = styled.div`
    @media (max-width: 767px) {
        width: calc(100% - 4.4375em);
        height: 19.1875em;
        margin-bottom: 0;
        border: none;
        display: block;
    }
    width: 50%;
    height: calc(100% - 17.625em);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #bbb6a8;
    margin-bottom: 17.63125em;
`;

const InnerRight = styled.div`
    @media (max-width: 767px) {
        width: calc(100% - 4.4375em);
        height: 20em;
        margin-top: 0;
        border-top: 1px solid #bbb6a8;
        position: static;
        padding-right: 4.4375em;
    }
    width: 50%;
    height: calc(100% + 10.125em);
    margin-top: -10.125em;
    display: flex;
    position: relative;

    .leftLine {
        position: absolute;
        right: 14.78125em;
        @media (max-width: 767px) {
            width: 4.375em;
            right: 2.25em;
            height: calc(100vh - 6.0625em);
            top: 6.0625em;
            #line:nth-of-type(1) {
                height: 21.875em !important;
            }
            #line:not(:first-of-type) {
                height: calc(100% - 21.875em - 4.375em - 0.125em) !important;
            }
        }
        z-index: 1000;
        display: flex;
        flex-direction: column;
        height: calc(100% + 0.25em);
        width: 7.9375em;
        display: flex;
        align-items: center;
        #line:nth-of-type(1) {
            z-index: 1000;
            height: 16.75em;
            width: 1px;
            border-left: 1px solid #bbb6a8;
        }
        #line:not(:first-of-type) {
            height: calc(100% - 16.75em - 7.9375em);
            bottom: 0;
            width: auto;
            border-left: 1px solid #bbb6a8;
        }
    }
`;

const SojuBtn = styled.div<colorType>`
    @media (max-width: 767px) {
        width: 4.375em;
        height: 4.375em;
        #svgIcon {
            height: 1.356875em !important;
            > svg {
                height: 1.356875em !important;
            }
        }
    }
    width: 7.9375em;
    height: 7.9375em;
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
        margin-top: 0.3125em;
        height: 2.1875em;
        > svg {
            height: 2.1875em;
        }
    }
`;

const Inner = styled.div`
    width: 100%;
    height: calc(100% - 9.1875em);
    display: flex;
    @media (max-width: 767px) {
        flex-direction: column;
        height: 39.5em;
    }
    & > #line:nth-of-type(2) {
        left: 50%;
        transform: translateX(-50%);
        top: 1px;
        height: calc(100% - 0.0625em);
        width: auto;
        border-left: 1px solid #bbb6a8;
    }
`;

const InnerText = styled.div`
    @media (max-width: 767px) {
        margin-top: 2.5em;
        margin-left: 1.625em;
        > div:first-of-type {
            margin-bottom: 1.4375em !important;
            > h1 {
                font-size: 2.1875em !important;
            }
        }

        > div:nth-of-type(2) {
            line-height: 1.375em !important;
            > h1 {
                font-size: 1.375em !important;
            }
        }

        > div:nth-of-type(3) {
            line-height: 1.375em !important;
            > div > h1 {
                font-size: 1.365em !important;
            }
            > div:nth-of-type(2) {
                line-height: 1.875em !important;
                margin-top: 0.85em !important;
            }
            > div:nth-of-type(2) > h1 {
                font-size: 1.875em !important;
            }
        }

        > div:nth-of-type(4) {
            float: right;
            margin-right: 1.125em;
            margin-top: 2.9375em !important;
            width: 9.25em !important;
            line-height: 0.8125em !important;
            > svg {
                width: 0.5em;
            }
            > p {
                font-size: 0.8125em !important;
                height: 0.625em;
            }
        }
    }
    margin-left: 6.25em;
    font-family: 'GmarketSansLight';
    > div:first-of-type {
        font-family: 'GmarketSansMedium';

        color: #8b7e6a;
        font-weight: 400;
        margin-bottom: 2.6875em;
        > h1 {
            font-size: 3.75em;
        }
    }
    > div:nth-of-type(2) {
        line-height: 3.625em;
        letter-spacing: -0.01em;
        font-weight: 300;
        margin-bottom: 1.25em;
        font-style: normal;
        color: #8b7e6a;
        > h1 {
            font-size: 3.625em;
        }
        > h1 > span {
            font-family: 'GmarketSansMedium';
        }
    }
    div:nth-of-type(3) {
        font-family: 'GmarketSansLight';

        display: flex;
        flex-direction: column;
        position: relative;

        font-style: normal;
        font-weight: 300;

        line-height: 3.125em;
        letter-spacing: -0.01em;

        color: #8b7e6a;
        > div > h1 {
            font-size: 3.125em;
        }
        > div:nth-of-type(2) {
            line-height: 5.3125em;
            margin-top: 1.25em;
        }
        > div:nth-of-type(2) > h1 {
            font-size: 5.3125em;

            font-family: 'GmarketSansMedium';
        }
    }
    div:nth-of-type(4) {
        width: 13.125em;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 3.8125em;
        font-family: 'GmarketSansMedium';
        letter-spacing: -0.01em;
        color: #8b7e6a;
        > p {
            font-size: 1.25em;
        }
    }
`;
