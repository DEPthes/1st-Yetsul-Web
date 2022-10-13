import React from 'react';
import styled from 'styled-components';

type modalType = {
    modal: () => void;
};
const LoginModal: React.FC<modalType> = ({ modal }) => {
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
                        href="https://kauth.kakao.com/oauth/authorize?client_id=301680b168fe30cd27fdafb039d82a6a&redirect_uri=http://localhost:3000/auth/kakaologin&response_type=code"
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
                    <ButtonStyle
                        id="google"
                        href="https://depth-server.herokuapp.com/auth/google"
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M19.6 10.2271C19.6 9.518 19.5364 8.83619 19.4182 8.18164H10V12.0498H15.3818C15.15 13.2998 14.4455 14.3589 13.3864 15.068V17.5771H16.6182C18.5091 15.8362 19.6 13.2725 19.6 10.2271Z"
                                fill="#4285F4"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.99972 19.9999C12.6997 19.9999 14.9634 19.1044 16.6179 17.5772L13.3861 15.0681C12.4906 15.6681 11.3452 16.0226 9.99972 16.0226C7.39517 16.0226 5.19063 14.2635 4.40426 11.8999H1.06335V14.4908C2.70881 17.759 6.09063 19.9999 9.99972 19.9999Z"
                                fill="#34A853"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M4.40455 11.9002C4.20455 11.3002 4.09091 10.6593 4.09091 10.0002C4.09091 9.3411 4.20455 8.70019 4.40455 8.10019V5.50928H1.06364C0.386364 6.85928 0 8.38655 0 10.0002C0 11.6138 0.386364 13.1411 1.06364 14.4911L4.40455 11.9002Z"
                                fill="#FBBC05"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.99972 3.97727C11.4679 3.97727 12.7861 4.48182 13.8224 5.47273L16.6906 2.60455C14.9588 0.990909 12.6952 0 9.99972 0C6.09063 0 2.70881 2.24091 1.06335 5.50909L4.40426 8.1C5.19063 5.73636 7.39517 3.97727 9.99972 3.97727Z"
                                fill="#EA4335"
                            />
                        </svg>
                        <p>구글 로그인</p>
                    </ButtonStyle>
                    <ButtonStyle
                        id="naver"
                        href="https://depth-server.herokuapp.com/auth/naver"
                    >
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12.2132 9.63L5.53388 0H0V18H5.80165V8.37L12.4661 18H18V0H12.2132V9.63Z"
                                fill="white"
                            />
                        </svg>

                        <p>네이버 로그인</p>
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
`;

const LoginCloseBtn = styled.div`
    position: absolute;
    width: 36.88em;
    display: flex;
    justify-content: flex-end;
    svg {
        margin-top: 2em;
        margin-right: 2em;
        cursor: pointer;
    }

    @media (max-width: 767px) {
        width: 19.19em;
        svg {
            margin-top: 0.56em;
            margin-right: 0.75em;
            width: 1.25;
            height: 1.25;
            cursor: pointer;
        }
    }
`;

const LoginWrap = styled.div`
    z-index: 100001;
    background: #fff;
    width: 36.88em;
    height: 36.88em;
    border-radius: 18px;
    display: flex;
    flex-direction: column;

    @media (max-width: 767px) {
        width: 19.19em;
        height: 19.19em;
    }
`;

const LoginHead = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 2.63em;
    margin-top: 3.94em;
    img:first-of-type {
        width: 5.38em;
        height: 4.69em;
        margin-bottom: 0.88em;
    }
    img {
        width: 7.06em;
        height: 1.75em;
    }

    @media (max-width: 767px) {
        margin-bottom: 1.44em;
        margin-top: 1.81em;
        img:first-of-type {
            width: 2.44em;
            height: 2.19em;
            margin-bottom: 0.25em;
        }
        img {
            width: 2.25em;
            height: 0.56em;
        }
    }
`;

const LoginText = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    margin-bottom: 3.06em;
    font-size: 0.94em;
    line-height: 1.5em; //24px
    color: #8b7e6a;

    @media (max-width: 767px) {
        margin-bottom: 1.88em;
        font-size: 0.64em;
        line-height: 0.94em;
    }
`;

const ButtonStyle = styled.a`
    width: 25em;
    height: 3.5em;
    border-radius: 12px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border: none;
    justify-content: center;
    background: #ffffff;
    margin-bottom: 0.69em;
    cursor: pointer;
    text-decoration: none;
    &#kakao {
        background: #fee500;
    }
    &#google {
        background-color: #f5f5f5;
    }
    &#naver {
        background: #03c75a;
        p {
            color: #fff;
        }
    }
    svg {
        position: absolute;
        margin-right: 20.63em;
    }
    p {
        font-size: 0.94em;
        color: #181600;
    }

    @media (max-width: 767px) {
        width: 16.19em;
        height: 2.25em;
        border-radius: 7px;
        margin-bottom: 0.38em;
        svg {
            position: absolute;
            margin-right: 13.13em;
            width: 1em;
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
