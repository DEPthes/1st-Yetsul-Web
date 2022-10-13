import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';

const FormModal: React.FC<{ modal: () => void }> = ({ modal }) => {
    return (
        <ModalMain>
            <LoginWrap onClick={(e) => e.stopPropagation()} aria-hidden>
                <div>
                    <CloseBtn>
                        <svg
                            onClick={modal}
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M9.34766 22.4609L21.8144 9.99416"
                                stroke="#675B4F"
                                strokeWidth="1.3"
                                strokeLinecap="round"
                            />
                            <path
                                d="M9.34766 9.99414L21.8144 22.4609"
                                stroke="#675B4F"
                                strokeWidth="1.3"
                                strokeLinecap="round"
                            />
                        </svg>
                    </CloseBtn>
                    <ModalContents>
                        <LogoWrap>
                            <Logo />
                        </LogoWrap>
                        <h1>
                            옛술의 전당에 자유롭게
                            <br /> 의견을 남겨주세요 !
                        </h1>
                        <p>
                            아래 구글폼으로 들어가서 저희
                            <br />
                            사이트에 대한 만족도 및 피드백을 남겨주시면
                            <br /> 앞으로의 행보에 큰 도움이 될 것 같습니다
                            감사합니다 :)
                        </p>
                    </ModalContents>
                    <ModalBottom>
                        <Btn>
                            <a href="https://docs.google.com/forms/d/1PznqpfSg_6N9aEGWASG_mDRvEMBLYlI5py-jkGWArJs/viewform?edit_requested=true">
                                구글 폼 주소
                            </a>
                        </Btn>
                    </ModalBottom>
                </div>
            </LoginWrap>
        </ModalMain>
    );
};

export default FormModal;

const ModalMain = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1000;
    backdrop-filter: blur(5px);
`;

const LoginWrap = styled.div`
    @media (max-width: 767px) {
        right: 4.3125em;
        bottom: 9.4375em;
    }
    position: absolute;
    bottom: 10.375em;
    right: 11.4375em;
    z-index: 1001;
    background: #fff;
    width: 18.875em;
    height: 21.5em;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    > div {
        position: relative;
        width: 100%;
        height: 100%;
    }
`;

const CloseBtn = styled.div`
    z-index: 20;
    position: absolute;
    top: 0.6875em;
    right: 0.6875em;
    > svg {
        cursor: pointer;
    }
`;

const ModalContents = styled.div`
    > div {
        margin-top: 1.875em;
        margin-bottom: 1.54em;
    }
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 16.5625em;
    font-family: 'GmarketSansMedium';
    font-style: normal;
    font-weight: 400;
    line-height: 175.5%;
    > h1 {
        font-size: 0.9375em;
    }

    text-align: center;

    color: #675b4f;
    background: #e2dfda;
    border-radius: 12px 12px 0px 0px;
    > p {
        margin-top: 2.5em;
        font-family: 'GmarketSansMedium';
        font-style: normal;
        font-weight: 400;
        font-size: 0.625em;
        line-height: 175.5%;
        text-align: center;
        color: #8b7e6a;
    }
`;

const LogoWrap = styled.div`
    width: 100%;
    height: 3.585em;
    transform: scale(1.3);
    svg {
        height: 3.585em;
    }
`;

const ModalBottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: calc(100% - 16.5625em);
`;

const Btn = styled.div`
    > a {
        text-decoration: none;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #ffffff;
        font-size: 0.9375em;
    }

    cursor: pointer;
    width: 16.375em;
    height: 2.1875em;
    border: none;
    background: #8b7e6a;
    border-radius: 0.75em;

    font-family: 'GmarketSansLight';
    font-style: normal;
    font-weight: 400;

    line-height: 0.9375em;
    letter-spacing: -0.01em;
`;
