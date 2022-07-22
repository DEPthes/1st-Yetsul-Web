import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../store/config';
import {
    setColor1,
    setColor2,
} from '../../store/slices/updateBackgroundGradientSlice';

const Main: React.FC = () => {
    const dispatch = useDispatch();
    const temp = useSelector((state: RootState) => {
        return state.updateBackgroundGradient.color1;
    });
    const [btnHover, setBtnHover] = useState<string>('#FCE2D9');
    const ClickSoju = () => {
        const target =
            document.querySelector<HTMLElement>('.tableCellInner') ||
            document.body;
        if (temp === '#E6E3DE') {
            setBtnHover('#FFE5BF');
            target.style.setProperty('--first-color', '#FCE2D9');
            target.style.setProperty(
                '--second-color',
                'rgba(244, 183, 156, 0)',
            );
            dispatch(setColor1('#FCE2D9'));
            dispatch(setColor2('rgba(244, 183, 156, 0)'));
        } else if (temp === '#FCE2D9') {
            setBtnHover('#FAF9F9');
            target.style.setProperty('--first-color', '#FFE5BF');
            target.style.setProperty('--second-color', '#fff9f7');
            dispatch(setColor1('#FFE5BF'));
            dispatch(setColor2('#fff9f7'));
        } else if (temp === '#FFE5BF') {
            setBtnHover('#FCE2D9');
            target.style.setProperty('--first-color', '#E6E3DE');
            target.style.setProperty('--second-color', '#fff');
            dispatch(setColor1('#E6E3DE'));
            dispatch(setColor2('#fff'));
        }
    };
    useEffect(() => {
        const target =
            document.querySelector<HTMLElement>('.tableCellInner') ||
            document.body;
        if (temp === '#E6E3DE') {
            target.style.setProperty('--first-color', '#E6E3DE');
            target.style.setProperty('--second-color', '#fff');
            setBtnHover('#FCE2D9');
        } else if (temp === '#FCE2D9') {
            target.style.setProperty('--first-color', '#FCE2D9');
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
    return (
        <MainStyle className="tableCellInner">
            <div id="line" />
            <Inner color={btnHover}>
                <InnerText>
                    <div>
                        <h1>9月,</h1>
                    </div>
                    <div>
                        <h1>전통주와 함께하는</h1>
                    </div>
                    <div>
                        <h1>개강파티</h1>
                        <h1>어때요?</h1>
                    </div>
                </InnerText>
                <div id="line" />

                <img
                    id="sojuImg"
                    src="https://s3-alpha-sig.figma.com/img/a2d7/f1fd/68c9f1e40c24846da055eebadf32c769?Expires=1659312000&Signature=CpSnHOU4Ak9HaflGQR6KE22c-h3b2ZaEIemP765uYN6QRvZeyHekhC6g-9jmpLsntCBo~onnZHhuACyauptvoIG44F1sQoViXDbh21Rxhs2mbKFe3b5846ESO2mg91-AIoyDn3HEP6mlXbTXkrIK0RWy3gyeGlS1R5WS0WB0B6TLOue5qa0TvZNclC8UdvVHbNaXn5FbDYSCWo9c~~ZtGnOd6QbjK8wbWgnj4Z1RggpoKQdsPQRvWCFadO0LoEALJ6yA05e-Z9qfMPB0IqDWmXvj4tT54x99DyyoWMQnngv-nK8BpLbX9W0f2iZwjxWZ0eweFN~0Ts47C872eBhBEA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    alt="traditional soju"
                />
                <div className="leftLine">
                    <div id="line" />
                    <div
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
                    </div>
                    <div id="line" />
                </div>
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
    --first-position: 107.4%;
    --second-position: 339.42%;
    --third-position: -7.4%;
    --fourth-position: -7.13%;
    --first-color: #e6e3de;
    --second-color: #fff;
    transition: --first-color 0.3s, --second-color 0.3s;
    #line {
        position: absolute;
        display: block;
        z-index: 999;
    }
    & > #line {
        border-bottom: 1px solid #bbb6a8;
        width: calc(100% - 266px);
        margin-top: 147px;
        right: 0;
        height: 1px;
    }
`;

type colorType = {
    color: string;
};

const Inner = styled.div<colorType>`
    position: absolute;
    width: 100%;
    height: calc(100% - 147px);
    margin-top: 147px;
    & > #line:nth-of-type(2) {
        left: 50%;
        transform: translateX(-50%);
        top: 1px;
        height: calc(100% - 1px);
        width: auto;
        border-left: 1px solid #bbb6a8;
    }
    .leftLine {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: -147px;
        right: 228.5px;
        height: calc(100% + 147px);
        width: 127px;
        #line:nth-of-type(1) {
            height: 268px;
            right: 62px;
            width: auto;
            border-left: 1px solid #bbb6a8;
        }
        #line:not(:first-of-type) {
            height: calc(100% - 268px - 127px);
            bottom: 0;
            right: 62px;
            width: auto;
            border-left: 1px solid #bbb6a8;
        }
        #svgBtn {
            width: 127px;
            height: 127px;
            z-index: 999;
            margin-top: 268px;
            border: 1px solid #8b7e6a;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: 0.6s ease;
            cursor: pointer;
            #svgIcon {
                z-index: 1000;
                margin-top: 5px;
                height: 35px;
            }
            &:hover {
                background: ${(props) => props.color};
            }
        }
    }

    #sojuImg {
        position: absolute;
        top: 137px;
        left: calc(50% + 279px);
        transform: translateX(-50%);
        width: 486px;
        height: 583px;
    }
`;

const InnerText = styled.div`
    font-family: 'GmarketSansLight';
    div:first-of-type {
        font-size: 60px;
        font-family: 'GmarketSansMedium';
        line-height: 60px;
        color: #8b7e6a;
        font-weight: 400;
        position: absolute;
        left: 269px;
        top: 181px;
    }
    div:nth-of-type(2) {
        font-size: 58px;
        line-height: 58px;
        letter-spacing: -0.01em;
        font-weight: 300;
        position: absolute;
        top: 299px;
        left: 269px;
    }
    div:nth-of-type(3) {
        font-size: 85px;
        font-family: 'GmarketSansLight';
        line-height: 85px;
        position: absolute;
        top: 376px;
        left: 266px;
        display: flex;
        h1:first-of-type {
            margin-right: 20px;
            font-family: 'GmarketSansMedium';
        }
    }
`;
