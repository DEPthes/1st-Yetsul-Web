import React from 'react';
import styled from 'styled-components';

type modalType = {
    modal: () => void;
};
const LoginModal: React.FC<modalType> = ({ modal }) => {
    const isDev: boolean =
        window.location.href.split('/')[2] === 'localhost:3000';
    const selectDevOrProductUrl = isDev
        ? 'localhost:3000'
        : 'yetsul.s3-website.ap-northeast-2.amazonaws.com';

    return (
        <ModalMain aria-hidden id="modal">
            <LoginWrap onClick={(e) => e.stopPropagation()} aria-hidden>
                <LoginCloseBtn>
                    <svg
                        width="38"
                        height="38"
                        viewBox="0 0 38 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={modal}
                    >
                        <path
                            d="M11.1003 26.6724L25.9046 11.8681"
                            stroke="#675B4F"
                            strokeWidth="1.3"
                            strokeLinecap="round"
                        />
                        <path
                            d="M11.1003 11.8677L25.9046 26.672"
                            stroke="#675B4F"
                            strokeWidth="1.3"
                            strokeLinecap="round"
                        />
                    </svg>
                </LoginCloseBtn>
                <LoginHead>
                    <img
                        src={`${process.env.PUBLIC_URL}/images/yetsul_logo1.png`}
                        alt="logo"
                    />
                    <img
                        src={`${process.env.PUBLIC_URL}/images/yetsul_logo2.png`}
                        alt="logotext"
                    />
                </LoginHead>
                <LoginText>
                    옛술의 전당에 로그인 하시고
                    <br /> 서비스를 간편하게 이용해보세요
                </LoginText>
                <LoginMain>
                    <ButtonStyle
                        id="kakao"
                        href={`https://kauth.kakao.com/oauth/authorize?client_id=e2d1c7ba92ca798e88509878ae8f44ee&redirect_uri=http://${selectDevOrProductUrl}/auth/kakaologin&response_type=code`}
                    >
                        <svg
                            width="22"
                            height="20"
                            viewBox="0 0 22 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M11 16C17.0751 16 22 12.4183 22 8C22 3.58172 17.0751 0 11 0C4.92487 0 0 3.58172 0 8C0 10.7744 1.94186 13.2189 4.89102 14.6539L4 20L9.4398 15.9201C9.94946 15.9728 10.4704 16 11 16Z"
                                fill="#181600"
                            />
                        </svg>
                        <p>카카오 로그인</p>
                    </ButtonStyle>
                </LoginMain>
            </LoginWrap>
        </ModalMain>
    );
};

export default LoginModal;

const ModalMain = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 100000;
    transition: 0.5s;
`;

const LoginCloseBtn = styled.div`
    position: absolute;
    width: 36.88em;
    display: flex;
    justify-content: flex-end;
    svg {
        margin-top: 1.125em;
        margin-right: 1.188em;
        cursor: pointer;
    }

    @media (max-width: 767px) {
        width: 19.1875em;
        svg {
            margin-top: 0.56em;
            margin-right: 0.75em;
            width: 1.25em;
            height: 1.25em;
            cursor: pointer;
        }
    }
`;

const LoginWrap = styled.div`
    z-index: 100001;
    background: #fff;
    width: 36.88em;
    height: 26.375em;
    border-radius: 1.125em;
    display: flex;
    flex-direction: column;

    @media (max-width: 767px) {
        width: 19.1875em;
        height: 14.1875em;
        border-radius: 0.75em;
    }
`;

const LoginHead = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 2.5em;
    margin-top: 4.3125em;
    img:first-of-type {
        width: 5.4375em;
        height: 4.75em;
        margin-bottom: 0.6875em;
    }
    img {
        width: 5.0625em;
        height: 1.1875em;
    }

    @media (max-width: 767px) {
        margin-bottom: 1.4375em;
        margin-top: 1.8125em;
        img:first-of-type {
            width: 2.4375em;
            height: 2.1875em;
            margin-bottom: 0.25em;
        }
        img {
            width: 2.25em;
            height: 0.5625em;
        }
    }
`;

const LoginText = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    margin-bottom: 3.063em;
    font-size: 0.9375em;
    letter-spacing: -0.01em;
    color: #8b7e6a;

    @media (max-width: 767px) {
        margin-bottom: 2.125em;
        font-size: 0.625em;
    }
`;

const ButtonStyle = styled.a`
    width: 25em;
    height: 3.5em;
    border-radius: 0.75em;
    display: flex;
    flex-direction: row;
    align-items: center;
    border: none;
    justify-content: center;
    margin-bottom: 3.938em;
    cursor: pointer;
    text-decoration: none;
    &#kakao {
        background: #fee500;
    }
    svg {
        position: absolute;
        margin-right: 20.63em;
        width: 1.375em;
    }
    p {
        font-size: 0.9375em;
        color: #181600;
    }

    @media (max-width: 767px) {
        width: 16.1875em;
        height: 2.25em;
        border-radius: 0.438em;
        margin-bottom: 2.3125em;
        svg {
            position: absolute;
            margin-right: 13.13em;
            width: 1.1075em;
        }
        p {
            font-size: 0.75em;
        }
    }
`;

const LoginMain = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;
