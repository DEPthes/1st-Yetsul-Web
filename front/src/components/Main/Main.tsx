import React from 'react';
import styled from 'styled-components';

const Main: React.FC = () => {
    return (
        <MainStyle>
            <div id="line" />
            <Inner>
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
                <div id="line" />
                <div id="svgBtn">
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
                                fill="#FAF9F9"
                                stroke="#4F4941"
                                strokeWidth="1.5"
                            />
                            <path
                                d="M13.6278 34.07C13.9305 32.6126 15.1118 31.2065 17.0778 30.083C19.3584 28.7799 22.559 27.95 26.135 27.95C29.711 27.95 32.9116 28.7799 35.1921 30.083C37.1582 31.2065 38.3394 32.6126 38.6422 34.07L13.6278 34.07Z"
                                fill="#FAF9F9"
                                stroke="#4F4941"
                                strokeWidth="1.5"
                            />
                            <path
                                d="M1.37012 5.60995H12.8001"
                                stroke="#4F4941"
                                strokeWidth="1.5"
                            />
                            <path
                                d="M2.64014 9.41995L10.2601 9.41995"
                                stroke="#4F4941"
                                strokeWidth="1.5"
                            />
                            <path
                                d="M3.91016 13.23L8.99016 13.23"
                                stroke="#4F4941"
                                strokeWidth="1.5"
                            />
                        </svg>
                    </div>
                </div>
            </Inner>
        </MainStyle>
    );
};

export default Main;

const MainStyle = styled.div`
    width: 100%;
    height: 100%;
    background: radial-gradient(
        107.4% 339.42% at -7.4% -7.13%,
        #e2dfda 0%,
        #ffffff 100%
    );
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

const Inner = styled.div`
    position: absolute;
    width: 100%;
    height: calc(100% - 147px);
    margin-top: 147px;
    & > #line:not(:nth-of-type(2)) {
        left: 50%;
        transform: translateX(-50%);
        top: 1px;
        height: calc(100% - 1px);
        width: auto;
        border-left: 1px solid #bbb6a8;
    }
    & > #line:nth-of-type(2) {
        right: 292px;
        top: -147px;
        position: absolute;
        height: calc(100% + 147px);
        width: auto;
        border-left: 1px solid #bbb6a8;
    }

    #svgBtn {
        position: absolute;
        width: 127px;
        height: 127px;
        right: 228.5px;
        z-index: 999;
        top: 121px;
        background: #faf9f9;
        border: 1px solid #4f4941;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        #svgIcon {
            margin-top: 5px;
            height: 35px;
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
